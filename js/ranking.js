// js/ranking.js

document.addEventListener('DOMContentLoaded', () => {
  console.log('[DEBUG] Ranking JS 初始化開始');

  // 0. 先讀 <html lang="…">，決定當前語系：'zh-TW' 或 'en'
  const pageLang = document.documentElement.getAttribute('lang') || 'zh-TW';
  // 之後 fetch / modal / char-limit 都會用到 pageLang

  if (!window.firebase || !firebase.apps.length) {
    console.error('[ERROR] Firebase 尚未初始化');
    alert('系統初始化失敗，請稍後再試🥲');
    return;
  }

  // ─── 二、抓元素，並預設分頁範圍與排序 ───
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

  // 票選系統相關
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

  // 這兩個函式留著，如果你要根據使用者輸入判斷語系時再用，但下面我們
  // 改為用 pageLang 直接決定 maxlength。
  function detectLang(text) {
    const zhMatch = text.match(/[\u4e00-\u9fff]/g) || [];
    const enMatch = text.match(/[a-zA-Z]/g) || [];
    return enMatch.length > zhMatch.length ? 'en' : 'zh-TW';
  }
  function getMaxLengthByLang(lang) {
    return lang === 'en' ? 120 : 60;
  }

  // ─── 三、範圍選項（本日/本週/全部）───
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

  // ─── 四、排序選項（最多/最新）───
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

  // ─── 五、開啟「投稿 Modal」時，預設 textarea maxlength & 字數顯示───
  openBtn?.addEventListener('click', e => {
    e.stopPropagation();
    modal.classList.remove('hidden');

    // 1. 根據 pageLang 決定最大長度 (中文60字/英文120字)
    const maxLen = getMaxLengthByLang(pageLang);

    // 2. 清空先前輸入，並設定 maxlength
    reasonInput.value = '';
    reasonInput.setAttribute('maxlength', maxLen);

    // 3. 初始化字數顯示：「0 / maxLen」
    if (charCount) charCount.textContent = `0 / ${maxLen}`;

    reasonInput.focus();
  });

  // ─── 六、輸入文字時，動態更新字數顯示───
  reasonInput?.addEventListener('input', () => {
    // 直接用 pageLang 決定最大長度（不再 detectLang）
    const maxLen = getMaxLengthByLang(pageLang);
    const len = reasonInput.value.trim().length;
    if (charCount) charCount.textContent = `${len} / ${maxLen}`;
  });

  // 點擊 Modal 背景或取消按鈕要關閉
  modal?.addEventListener('click', e => e.stopPropagation());
  backdrop?.addEventListener('click', () => modal.classList.add('hidden'));
  cancelBtn?.addEventListener('click', () => modal.classList.add('hidden'));

  // ─── 七、送出按鈕：檢查長度 & 寫入 Firestore───
  submitBtn?.addEventListener('click', () => {
    const text = reasonInput.value.trim();
    const detectedLang = pageLang;              // 這裡直接用 pageLang（zh-TW / en）
    const maxLength = getMaxLengthByLang(pageLang);

    if (text.length < 2) {
      const alertMsg = pageLang === 'en'
        ? 'Please enter at least 2 characters'
        : '請輸入至少兩個字';
      alert(alertMsg);
      return;
    }

    if (text.length > maxLength) {
      const alertMsg = pageLang === 'en'
        ? `Your quit reason must be no more than ${maxLength} characters.`
        : `離職理由請勿超過 ${maxLength} 字，請精煉你的痛苦 ✂️`;
      alert(alertMsg);
      return;
    }

    // 把文字寫入 Firestore，並帶上 lang 欄位
    firebase.firestore().collection('quitreasons').add({
      text,
      lang: detectedLang, // 'zh-TW' 或 'en'
      votes: 0,
      time: Date.now()
    })
    .then(() => {
      modal.classList.add('hidden');
      const successMsg = pageLang === 'en'
        ? 'Submission successful 🎉'
        : '投稿成功🎉';
      alert(successMsg);
      fetchReasonsAndRender();
    })
    .catch(err => {
      console.error('[ERROR] 投稿失敗：', err);
      const failMsg = pageLang === 'en'
        ? 'Submission failed, please try again later.'
        : '投稿失敗，請稍後再試';
      alert(failMsg);
    });
  });

  // ─── 八、抓留言並渲染；在查詢時只帶 pageLang 過濾───
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

    // 建立 Firestore 查詢：先拿 collection，再篩選語系，最後篩時間（如果需要）
    let query = firebase.firestore().collection('quitreasons')
                  .where('lang', '==', pageLang);

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

  // ─── 九、渲染留言列表 & 投票邏輯───
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
        const docRef = firebase.firestore().collection('quitreasons').doc(item.id);

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
              alert(pageLang === 'en' ? 'Unvote failed, please try again.' : '取消投票失敗，請稍後再試');
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
              alert(pageLang === 'en' ? 'Vote failed, please try again.' : '投票失敗，請稍後再試');
            });
        }
      });

      rankingList.appendChild(div);
    });
  }

  // 初次載入就呼叫一次
  fetchReasonsAndRender();
});
