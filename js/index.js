// js/index.js

// --- 全域設定 ---
const slots       = ['slot1','slot2','slot3'];
const items       = ['O','X'];
let isSpinning    = false;
let isWaiting     = false;
let intervals     = [];
let consecutiveOOO = 0;  // 用來記錄連續 OOO 次數
let spinCount     = 0;     // 用來計算已玩次數
let gotOOO        = false; // 是否曾經抽中過 OOO


// 加權組合設定
const outcomes = [
  { combo:['O','O','O'], weight:25 },
  { combo:['O','O','X'], weight:15 },
  { combo:['O','X','O'], weight:15 },
  { combo:['O','X','X'], weight:10 },
  { combo:['X','O','O'], weight:14 },
  { combo:['X','O','X'], weight:10 },
  { combo:['X','X','O'], weight:10 },
  { combo:['X','X','X'], weight:1  }
];

// 產生加權隨機組合
function getWeightedRandomCombo() {
  const expanded = outcomes.flatMap(item =>
    Array(item.weight).fill().map(() => [...item.combo])
  );
  const idx = Math.floor(Math.random() * expanded.length);
  return expanded[idx];
}

// START/STOP 切換
function toggleSpin() {
  if (isWaiting) return;
  isSpinning ? stopSpinning() : startSpinning();
}

// 開始動畫
function startSpinning() {
  isSpinning = true;
  isWaiting   = false;

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
      container.style.transform  = `translateY(-${pos * 70}px)`;
    }, 40);
  });
}

function stopSpinning() {
  isSpinning = false;
  isWaiting   = true;

  const btn = document.getElementById('toggle-btn');
  btn.classList.add('disabled');
  btn.disabled = true;

  // ─── 計次＋強制 OOO 邏輯 ───
spinCount++;
let result;

// ① 如果前兩次都是 OOO（consecutiveOOO===2），第三次只用 1% 機率中 OOO
if (consecutiveOOO === 2) {
  if (Math.random() < 0.01) {
    result = ['O','O','O'];
  } else {
    // 1% 以外就排除 OOO，用隨機但保證不是 OOO
    do {
      result = getWeightedRandomCombo();
    } while (result.join('') === 'OOO');
  }
}
// ② 第一次有 25% 機率強制 OOO
else if (spinCount === 1 && Math.random() < 0.20) {
  result = ['O','O','O'];
}
// ③ 第五次若從未中過 OOO 則強制
else if (spinCount === 5 && !gotOOO) {
  result = ['O','O','O'];
}
// ④ 其餘狀況拿一般加權隨機
else {
  result = getWeightedRandomCombo();
}

// 更新連中計數
if (result.join('') === 'OOO') {
  gotOOO = true;
  consecutiveOOO++;
} else {
  consecutiveOOO = 0;
}

  const slotContainers = slots.map(id => document.getElementById(id).parentElement);

  // 1️⃣ 停格動畫
  slots.forEach((id, idx) => {
    setTimeout(() => {
      clearInterval(intervals[idx]);
      const container = document.getElementById(id);
      const targetIndex = 10 + (result[idx] === 'O' ? 0 : 1);
      container.style.transition = 'transform 1s cubic-bezier(0.25,0.1,0.25,1)';
      container.style.transform  = `translateY(-${targetIndex*70}px)`;
    }, idx * 500);
  });

  // 2️⃣ 訊息顯示 & 高亮效果
  setTimeout(() => {
    const langKey = localStorage.getItem('lang') || 'zh-TW';
    const t       = translations[langKey];
    const joined  = result.join('');
    let message   = '';

    // 連續三次 OOO
    if (joined === 'OOO' && consecutiveOOO >= 3) {
      message = t.msgTripleOOO;
      slots.forEach(id => {
        const c = document.getElementById(id);
        c.classList.add('highlight');
        setTimeout(() => c.classList.remove('highlight'), 1500);
      });
      // 1.5s 後重置
      setTimeout(() => {
        btn.innerText = 'START';
        btn.classList.remove('stop-mode','disabled');
        btn.disabled = false;
        isWaiting = false;
      }, 1500);
    }
    // 單次 OOO
    else if (joined === 'OOO') {
      message = t.msgOOO;
      slots.forEach(id => {
        const c = document.getElementById(id);
        c.classList.add('highlight');
        setTimeout(() => c.classList.remove('highlight'), 1500);
      });
      setTimeout(() => {
        btn.innerText = 'START';
        btn.classList.remove('stop-mode','disabled');
        btn.disabled = false;
        isWaiting = false;
      }, 1500);
    }
    // XXX
    else if (joined === 'XXX') {
      message = t.msgXXX;
      slotContainers.forEach((slot, i) => {
        slot.classList.add('highlight-red');
        setTimeout(() => slot.classList.remove('highlight-red'), 1500);
      });
      setTimeout(() => {
        btn.innerText = 'START';
        btn.classList.remove('stop-mode','disabled');
        btn.disabled = false;
        isWaiting = false;
      }, 1500);
    }
    // 其他
    else {
      switch (joined) {
        case 'XOX': message = t.msgXOX; break;
        case 'OXO': message = t.msgOXO; break;
        case 'XOO': message = t.msgXOO; break;
        case 'OOX': message = t.msgOOX; break;
        case 'OXX': message = t.msgOXX; break;
        case 'XXO': message = t.msgXXO; break;
        default:
          const oCount = result.filter(x => x==='O').length;
          const xCount = result.filter(x => x==='X').length;
          message = oCount === 2 ? t.msgTwoO
                   : xCount === 2 ? t.msgTwoX
                   : t.msgChaos;
      }
      document.getElementById('result-msg').innerText = message;
      // 200ms 後重置
      setTimeout(() => {
        btn.innerText = 'START';
        btn.classList.remove('stop-mode','disabled');
        btn.disabled = false;
        isWaiting = false;
      }, 200);
    }

    // 顯示文字
    document.getElementById('result-msg').innerText = message;
  }, slots.length * 500 + 500);
}




// DOM 載入完再綁定
document.addEventListener('DOMContentLoaded', () => {
  // START/STOP
  document.getElementById('toggle-btn')?.addEventListener('click', toggleSpin);

  // 漢堡選單
  const hBtn  = document.getElementById('hamburger-menu-btn');
  const hList = document.getElementById('hamburger-menu-list');
  hBtn?.addEventListener('click', e => { e.stopPropagation(); hList.classList.toggle('show'); });
  hList?.addEventListener('click', e => e.stopPropagation());

  // 語言選單
  const lBtn = document.getElementById('lang-toggle-btn');
  const lOpt = document.getElementById('lang-options');
  lBtn?.addEventListener('click', e => { e.stopPropagation(); lOpt.classList.toggle('show'); });
  lOpt?.addEventListener('click', e => e.stopPropagation());

  // 點空白關閉浮層
  document.addEventListener('click', () => {
    hList.classList.remove('show');
    lOpt.classList.remove('show');
  });
});
