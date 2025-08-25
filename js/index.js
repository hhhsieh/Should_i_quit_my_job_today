const translations = {
  'zh-TW': {
    msgOOO:        '去提離職吧！ 還沒辦法下定決心要不要去提離職的話不然試試看會不會連續得到三個Ｏ😉',
    msgXXX:        '機率只有 1% 你還是抽到了…再撐幾天吧😉',
    msgXOX:        'ㄨㄚˊ 不是ＯＯＯ，再試一次吧',
    msgOXO:        'ㄨㄚˊ 不是ＯＯＯ，再試一次吧',
    msgXOO:        'ㄨㄚˊ 不是ＯＯＯ，再試一次吧',
    msgOOX:        'ㄨㄚˊ 不是ＯＯＯ，再試一次吧',
    msgOXX:        'ㄨㄚˊ 不是ＯＯＯ，再試一次吧',
    msgXXO:        'ㄨㄚˊ 不是ＯＯＯ，再試一次吧',
    msgTwoO:       '連續兩個Ｏ了，要不要湊湊看連續三次，或許會有驚喜（？？？） ',
    msgTwoX:       'ㄨㄚˊ 不是ＯＯＯ，再試一次吧',
    msgChaos:      '再試一次',
    msgTripleOOO:  '恭喜你連續抽到三個Ｏ──你可以考慮真的去提離職了😉'
  },
  'en': {
    msgOOO:        'Go ahead and quit right now!!!',
    msgXXX:        'A 1% chance but you got it… hang in there a few more days 😉',
    msgXOX:        'Ohoh, not OOO, try again',
    msgOXO:        'Ohoh, not OOO, try again',
    msgXOO:        'Ohoh, not OOO, try again',
    msgOOX:        'Ohoh, not OOO, try again',
    msgOXX:        'Ohoh, not OOO, try again',
    msgXXO:        'Ohoh, not OOO, try again',
    msgTwoO:       'That‘s two O‘s already. Wanna go for three? You might unlock… something. Maybe. (???)',
    msgTwoX:       'Ohoh, not OOO, try again',
    msgChaos:      'Try again',
    msgTripleOOO:  'You’ve hit OOO three times in a row—quit right now!'
  }
};


const slots = ['slot1', 'slot2', 'slot3'];
const items = ['O', 'X'];
let isSpinning = false;
let isWaiting = false;
let intervals = [];
let consecutiveOOO = 0;
let spinCount = 0;
let gotOOO = false;


const outcomes = [
  { combo: ['O','O','O'], weight: 11 },
  { combo: ['O','O','X'], weight: 15 },
  { combo: ['O','X','O'], weight: 15 },
  { combo: ['O','X','X'], weight: 15 },
  { combo: ['X','O','O'], weight: 15 },
  { combo: ['X','O','X'], weight: 14 },
  { combo: ['X','X','O'], weight: 14 },
  { combo: ['X','X','X'], weight: 1 }
];

function getWeightedRandomCombo() {
  const expanded = outcomes.flatMap(item =>
    Array(item.weight).fill().map(() => [...item.combo])
  );
  const idx = Math.floor(Math.random() * expanded.length);
  return expanded[idx];
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


  if (consecutiveOOO === 2) {
    result = Math.random() < 0.01 ? ['O','O','O'] : getWeightedRandomCombo();
    while (result.join('') === 'OOO') result = getWeightedRandomCombo();
  }
  else if (spinCount === 1 && Math.random() < 0.2) {
    result = ['O','O','O'];
  }
  else if (spinCount === 5 && !gotOOO) {
    result = ['O','O','O'];
  }
  else {
    result = getWeightedRandomCombo();
  }

  if (result.join('') === 'OOO') {
    gotOOO = true;
    consecutiveOOO++;
  } else {
    consecutiveOOO = 0;
  }


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


  setTimeout(() => {

    const langKey = document.documentElement.getAttribute('lang') || 'zh-TW';
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
    }
    else if (joined === 'OOO') {
      message = t.msgOOO;
      slots.forEach(id => {
        const c = document.getElementById(id);
        c.classList.add('highlight');
        setTimeout(() => c.classList.remove('highlight'), 1500);
      });
    }
    else if (joined === 'XXX') {
      message = t.msgXXX;
      slotContainers.forEach(slot => {
        slot.classList.add('highlight-red');
        setTimeout(() => slot.classList.remove('highlight-red'), 1500);
      });
    }
    else {
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
          message = (oCount === 2) ? t.msgTwoO : (xCount === 2) ? t.msgTwoX : t.msgChaos;
      }
    }

    document.getElementById('result-msg').innerText = message;


    setTimeout(() => {
      btn.innerText = 'START';
      btn.classList.remove('stop-mode','disabled');
      btn.disabled = false;
      isWaiting = false;
    }, (joined === 'OOO' || joined === 'XXX') ? 1500 : 200);
  }, slots.length * 500 + 500);
}


function toggleSpin() {
  if (isWaiting) return;
  isSpinning ? stopSpinning() : startSpinning();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('toggle-btn')?.addEventListener('click', toggleSpin);
});
