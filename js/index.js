// === 全域設定 ===
const slots = ['slot1', 'slot2', 'slot3'];
const items = ['O', 'X'];
let isSpinning = false;
let isWaiting = false;
let intervals = [];
let consecutiveOOO = 0;
let spinCount = 0;
let gotOOO = false;

// === 加權組合設定 ===
const outcomes = [
  { combo: ['O', 'O', 'O'], weight: 25 },
  { combo: ['O', 'O', 'X'], weight: 15 },
  { combo: ['O', 'X', 'O'], weight: 15 },
  { combo: ['O', 'X', 'X'], weight: 10 },
  { combo: ['X', 'O', 'O'], weight: 14 },
  { combo: ['X', 'O', 'X'], weight: 10 },
  { combo: ['X', 'X', 'O'], weight: 10 },
  { combo: ['X', 'X', 'X'], weight: 1 }
];

function getWeightedRandomCombo() {
  const expanded = outcomes.flatMap(item =>
    Array(item.weight).fill().map(() => [...item.combo])
  );
  const idx = Math.floor(Math.random() * expanded.length);
  return expanded[idx];
}

function toggleSpin() {
  if (isWaiting) return;
  isSpinning ? stopSpinning() : startSpinning();
}

function startSpinning() {
  isSpinning = true;
  isWaiting = false;

  const btn = document.getElementById('toggle-btn');
  btn.innerText = 'STOP';
  btn.classList.add('stop-mode');
  btn.classList.remove('disabled');
  btn.disabled = false;

  document.getElementById('result-msg').innerText = '';

  slots.forEach((id, idx) => {
    const container = document.getElementById(id);
    container.innerHTML = '';
    for (let i = 0; i < 40; i++) {
      const d = document.createElement('div');
      d.className = 'slot-item';
      d.innerText = items[i % 2];
      container.appendChild(d);
    }

    let pos = 0;
    intervals[idx] = setInterval(() => {
      pos = (pos + 1) % 40;
      container.style.transition = 'transform 0.1s linear';
      container.style.transform = `translateY(-${pos * 70}px)`;
    }, 40);
  });
}

function stopSpinning() {
  isSpinning = false;
  isWaiting = true;

  const btn = document.getElementById('toggle-btn');
  btn.classList.add('disabled');
  btn.disabled = true;

  spinCount++;
  let result;

  // --- 特殊規則判斷 ---
  if (consecutiveOOO === 2) {
    result = Math.random() < 0.01 ? ['O', 'O', 'O'] : getWeightedRandomCombo();
    while (result.join('') === 'OOO') result = getWeightedRandomCombo();
  } else if (spinCount === 1 && Math.random() < 0.2) {
    result = ['O', 'O', 'O'];
  } else if (spinCount === 5 && !gotOOO) {
    result = ['O', 'O', 'O'];
  } else {
    result = getWeightedRandomCombo();
  }

  if (result.join('') === 'OOO') {
    gotOOO = true;
    consecutiveOOO++;
  } else {
    consecutiveOOO = 0;
  }

  // --- 停止動畫 ---
  const slotContainers = slots.map(id => document.getElementById(id).parentElement);

  slots.forEach((id, idx) => {
    setTimeout(() => {
      clearInterval(intervals[idx]);
      const container = document.getElementById(id);
      const targetIndex = 10 + (result[idx] === 'O' ? 0 : 1);
      container.style.transition = 'transform 1s cubic-bezier(0.25,0.1,0.25,1)';
      container.style.transform = `translateY(-${targetIndex * 70}px)`;
    }, idx * 500);
  });

  // --- 顯示結果訊息 ---
  setTimeout(() => {
    const langKey = localStorage.getItem('lang') || 'zh-TW';
    const t = translations[langKey];
    const joined = result.join('');
    let message = '';

    if (joined === 'OOO' && consecutiveOOO >= 3) {
      message = t.msgTripleOOO;
      slots.forEach(id => {
        const c = document.getElementById(id);
        c.classList.add('highlight');
        setTimeout(() => c.classList.remove('highlight'), 1500);
      });
    } else if (joined === 'OOO') {
      message = t.msgOOO;
      slots.forEach(id => {
        const c = document.getElementById(id);
        c.classList.add('highlight');
        setTimeout(() => c.classList.remove('highlight'), 1500);
      });
    } else if (joined === 'XXX') {
      message = t.msgXXX;
      slotContainers.forEach(slot => {
        slot.classList.add('highlight-red');
        setTimeout(() => slot.classList.remove('highlight-red'), 1500);
      });
    } else {
      switch (joined) {
        case 'XOX': message = t.msgXOX; break;
        case 'OXO': message = t.msgOXO; break;
        case 'XOO': message = t.msgXOO; break;
        case 'OOX': message = t.msgOOX; break;
        case 'OXX': message = t.msgOXX; break;
        case 'XXO': message = t.msgXXO; break;
        default:
          const oCount = result.filter(x => x === 'O').length;
          const xCount = result.filter(x => x === 'X').length;
          message = oCount === 2 ? t.msgTwoO : xCount === 2 ? t.msgTwoX : t.msgChaos;
      }
    }

    document.getElementById('result-msg').innerText = message;

    setTimeout(() => {
      btn.innerText = 'START';
      btn.classList.remove('stop-mode', 'disabled');
      btn.disabled = false;
      isWaiting = false;
    }, (joined === 'OOO' || joined === 'XXX') ? 1500 : 200);
  }, slots.length * 500 + 500);
}

// === 漢堡選單與語言切換 ===
document.addEventListener('DOMContentLoaded', () => {
  // 開始按鈕
  document.getElementById('toggle-btn')?.addEventListener('click', toggleSpin);

  // 側邊選單開關
  const menuBtn = document.getElementById('hamburger-menu-btn');
  const closeBtn = document.getElementById('menu-close');
  const sideMenu = document.getElementById('side-menu');
  const overlay = document.getElementById('overlay');

 function openMenu() {
  sideMenu.classList.remove('hidden');
  // 強迫觸發重繪，才能讓 transition 生效
  void sideMenu.offsetWidth;
  sideMenu.classList.add('show');
  overlay.classList.add('show');
}

function closeMenu() {
  sideMenu.classList.remove('show');
  overlay.classList.remove('show');
  setTimeout(() => {
    sideMenu.classList.add('hidden');
  }, 400); // 跟 transition 時間同步
}


  function closeMenu() {
    sideMenu.classList.remove('show');
    overlay.classList.remove('show');
  }

  menuBtn?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  // 多語系切換
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      localStorage.setItem('lang', lang);
      location.reload();
    });
  });
});
