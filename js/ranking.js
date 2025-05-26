// js/ranking.js

document.addEventListener('DOMContentLoaded', () => {
  console.log('[DEBUG] JS 初始化開始');

  if (!window.firebase || !firebase.apps.length) {
    console.error('[ERROR] Firebase 尚未初始化');
    alert('系統初始化失敗，請稍後再試🥲');
    return;
  }

  const hamburgerMenuBtn  = document.getElementById('hamburger-menu-btn');
  const hamburgerMenuList = document.getElementById('hamburger-menu-list');
  const langToggleBtn     = document.getElementById('lang-toggle-btn');
  const langOptions       = document.getElementById('lang-options');
  const rankingList       = document.getElementById('ranking-list');
  const openBtn           = document.getElementById('open-submit');
  const modal             = document.getElementById('submit-modal');
  const backdrop          = document.getElementById('submit-backdrop');
  const cancelBtn         = document.getElementById('cancel-submit');
  const submitBtn         = document.getElementById('submit-reason');
  const reasonInput       = document.getElementById('reason-input');
  const charCount         = document.getElementById('char-count');

  let sortContainer, sortBtn, sortOptions;
  let rangeTabs;
  let currentRange = 'day';
  let currentSort = 'popular';

  const VOTE_KEY = 'voted_reason_ids';
  const getVotedReasonIds = () => JSON.parse(localStorage.getItem(VOTE_KEY)) || [];
  const markReasonAsVoted = (id) => {
    const voted = getVotedReasonIds();
    if (!voted.includes(id)) {
      voted.push(id);
      localStorage.setItem(VOTE_KEY, JSON.stringify(voted));
    }
  };
  const unmarkReasonAsVoted = (id) => {
    const voted = getVotedReasonIds().filter(x => x !== id);
    localStorage.setItem(VOTE_KEY, JSON.stringify(voted));
  };
  const hasVotedFor = (id) => getVotedReasonIds().includes(id);

  function detectLang(text) {
    const zhMatch = text.match(/[\u4e00-\u9fff]/g) || [];
    const enMatch = text.match(/[a-zA-Z]/g) || [];
    return enMatch.length > zhMatch.length ? 'en' : 'zh-TW';
  }

  function getMaxLengthByLang(lang) {
    return lang === 'en' ? 120 : 60;
  }

  hamburgerMenuBtn?.addEventListener('click', e => {
    e.stopPropagation();
    hamburgerMenuList.classList.toggle('show');
  });
  hamburgerMenuList?.addEventListener('click', e => e.stopPropagation());

  langToggleBtn?.addEventListener('click', e => {
    e.stopPropagation();
    langOptions.classList.toggle('show');
  });
  langOptions?.addEventListener('click', e => e.stopPropagation());

  document.addEventListener('click', () => {
    hamburgerMenuList.classList.remove('show');
    langOptions.classList.remove('show');
    sortContainer?.classList.remove('open');
    modal?.classList.add('hidden');
  });

  rangeTabs = document.querySelectorAll('.range-tab');
  rangeTabs.forEach(tab => {
    tab.addEventListener('click', e => {
      e.stopPropagation();
      rangeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentRange = tab.dataset.range;
      fetchReasonsAndRender();
    });
  });

  sortBtn       = document.querySelector('.sort-btn');
  sortContainer = sortBtn?.parentElement;
  sortOptions   = document.querySelectorAll('.sort-options li');

  sortBtn?.addEventListener('click', e => {
    e.stopPropagation();
    sortContainer.classList.toggle('open');
  });
  sortContainer?.addEventListener('click', e => e.stopPropagation());

  sortOptions.forEach(li => {
    li.addEventListener('click', e => {
      e.stopPropagation();
      currentSort = li.dataset.sort;
      sortBtn.firstChild.nodeValue = li.textContent + ' ';
      sortContainer.classList.remove('open');
      fetchReasonsAndRender();
    });
  });

  openBtn?.addEventListener('click', e => {
    e.stopPropagation();
    modal.classList.remove('hidden');
    reasonInput.value = '';
    reasonInput.focus();
    if (charCount) charCount.textContent = '0 / 90';
  });

  reasonInput?.addEventListener('input', () => {
    const text = reasonInput.value.trim();
    const lang = detectLang(text);
    const maxLength = getMaxLengthByLang(lang);
    if (charCount) charCount.textContent = `${text.length} / ${maxLength}`;
  });

  modal?.addEventListener('click', e => e.stopPropagation());
  backdrop?.addEventListener('click', () => modal.classList.add('hidden'));
  cancelBtn?.addEventListener('click', () => modal.classList.add('hidden'));

  submitBtn?.addEventListener('click', () => {
    const text = reasonInput.value.trim();
    const detectedLang = detectLang(text);
    const maxLength = getMaxLengthByLang(detectedLang);

    if (text.length < 2) {
      alert('請輸入至少兩個字');
      return;
    }

    if (text.length > maxLength) {
      alert(`離職理由請勿超過 ${maxLength} 字，請精煉你的痛苦 ✂️`);
      return;
    }

    firebase.firestore().collection('Quit reasons').add({
      text,
      lang: detectedLang,
      votes: 0,
      time: Date.now()
    })
    .then(() => {
      modal.classList.add('hidden');
      alert('投稿成功🎉');
      fetchReasonsAndRender();
    })
    .catch(err => {
      console.error('[ERROR] 投稿失敗：', err);
      alert('投稿失敗，請稍後再試');
    });
  });

  function fetchReasonsAndRender() {
    const now = Date.now();
    let timeLimit = 0;
    if (currentRange === 'day') {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      timeLimit = today.getTime();
    } else if (currentRange === 'week') {
      timeLimit = now - 7 * 24 * 60 * 60 * 1000;
    }

    let query = firebase.firestore().collection('Quit reasons');

    if (currentRange !== 'all') {
      query = query.where('time', '>', timeLimit);
    }

    query.get()
      .then(snapshot => {
        const results = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          data.id = doc.id;
          results.push(data);
        });
        window.ReasonsAPI = { allReasons: results };
        renderRanking();
      })
      .catch(err => {
        console.error('[ERROR] 無法取得資料：', err);
      });
  }

  function renderRanking() {
    rankingList.innerHTML = '';

    const arr = (window.ReasonsAPI?.allReasons || []).sort((a, b) =>
      currentSort === 'popular'
        ? (b.votes ?? 0) - (a.votes ?? 0)
        : b.time - a.time
    );

    arr.forEach(item => {
      const div = document.createElement('div');
      div.className = 'ranking-item';

      const voteCount = item.votes ?? 0;
      const voted = hasVotedFor(item.id);

      div.innerHTML = `
        <span class="reason">${item.text}</span>
        <div class="vote-area">
          <button class="plus-one-btn" ${voted ? 'class="voted"' : ''}>+1</button>
          <span class="votes">${voteCount}</span>
        </div>`;

      const plusBtn = div.querySelector('.plus-one-btn');
      const voteSpan = div.querySelector('.votes');

      plusBtn.addEventListener('click', () => {
        const docRef = firebase.firestore().collection('Quit reasons').doc(item.id);

        if (hasVotedFor(item.id)) {
          docRef.update({ votes: firebase.firestore.FieldValue.increment(-1) })
            .then(() => {
              unmarkReasonAsVoted(item.id);
              const currentVotes = parseInt(voteSpan.textContent) || 1;
              voteSpan.textContent = currentVotes - 1;
              plusBtn.classList.remove('voted');
              console.log(`已取消投票：${item.text}`);
            })
            .catch(err => {
              console.error('[ERROR] 取消投票失敗：', err);
              alert('取消投票失敗，請稍後再試');
            });
        } else {
          docRef.update({ votes: firebase.firestore.FieldValue.increment(1) })
            .then(() => {
              markReasonAsVoted(item.id);
              const currentVotes = parseInt(voteSpan.textContent) || 0;
              voteSpan.textContent = currentVotes + 1;
              plusBtn.classList.add('voted');
              console.log(`已投票給：${item.text}`);
            })
            .catch(err => {
              console.error('[ERROR] 投票失敗：', err);
              alert('投票失敗，請稍後再試');
            });
        }
      });

      rankingList.appendChild(div);
    });
  }

  fetchReasonsAndRender();
});
