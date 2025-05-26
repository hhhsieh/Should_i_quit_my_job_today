// js/lang.js
const translations = {
  'zh-TW': {
    title:            '今天該離職了嗎？',
    startBtn:         '開始',
    navHome:          '💭 離職嗎？',
    navRanking:       '🏆 排行榜',
    navAbout:         'ℹ️ 關於',
    footer:           '© 2025 今天該離職了嗎？歡迎分享網址，但禁止未經授權的內容重製或商業使用。',
    msgOOO:      '現在就去提離職！！！',
    msgXXX:      '機率只有 1% 你還是抽到了…再撐幾天吧😉',
    msgXOX:      '😵 再撐幾天，可能會轉機？',
    msgOXO:      '💡 你偶爾還有期待，先不要急。',
    msgXOO:      '🌀 動搖中，但還有餘力。',
    msgOOX:      '🤔 有點動搖，但還不算絕望。',
    msgOXX:      '😓 心已不在工作上。',
    msgXXO:      '😩 有點撐不下去了。',
    msgTwoO:     '有兩個O欸，好像可以提離職？',
    msgTwoX:     '😩 開始厭世，再撐一下吧。',
    msgChaos:    '🌀 命運混亂，再試一次吧。',
    msgConsecutiveOOO: '你已經連續三次得到 OOO，現在就去提離職！',


    // Ranking 頁面
    titleRanking:     '今天想離職的理由',
    rangeToday:       '今天',
    rangeWeek:        '本週',
    rangeAll:         '全部',
    sortPopular:      '🔥 最多＋',
    sortLatest:       '🆕 最新留言 ',
    modalTitle:       '寫下你的離職理由：',
    modalPlaceholder: '例如：我連夢裡都在開會...',
    btnSend:          '送出',
    btnCancel:        '取消',


    // About 頁面
    titleAbout:       '關於本站｜今天該離職了嗎？',
    letterMeta:       'To：所有坐在辦公桌前想離職的你',
    letterTitle:      '「今天該離職了嗎？」',
    aboutP1:          '這是一個給職場人的幽默互動網站。<br />如果你正在工作、會議、或厭世的午休中突然懷疑人生，<br />這裡就是你該來的地方。',
    aboutP2:          '雖然不是我在上班，但我身邊的人都在上班，而且幾乎每天都想離職。<br />有人因為主管、有人因為開不完的會、<br />也有人只是單純……覺得活著很累。<br />所以我做了這個網站，希望可以當成大家上班上得很累的時候的一點救贖。',
    aboutP3:          '這個網站可以幹嘛？<br />🎲 離職理由產生器：生成一句「聽起來合理又很荒謬」的理由。<br />🔺 +1：看到有共鳴的理由可以投票，順便推爆它。<br />🏆 排行榜：看看大家都想因為什麼而離職。<br />✍️ 投稿區：你也可以匿名分享你的爆氣瞬間。',
    aboutP4:          '<strong>我們不是真的要你離職。</strong><br />但有時候情緒需要出口，有時候幽默比正經更有力。<br />如果你笑了，那就值了。',
    aboutP5:          '我是 UX 設計背景，喜歡設計一些結合 <strong>情緒 × 互動 × 日常文化</strong> 的小專案。<br />如果你喜歡這個網站，或想聊聊離職、設計、人生迷惘——<br />歡迎來信聊聊，也歡迎分享出去。',
    letterSign:       '敬上，<br /><strong>今天該離職了嗎？團隊</strong><br />📮 hello@iquit.today'
  },
  'en': {
    title:            'Should I quit today?',
    startBtn:         'START',
    navHome:          '💭 Quit?',
    navRanking:       '🏆 Ranking',
    navAbout:         'ℹ️ About',
    footer:           '© 2025 Should I quit today? Share the link, but unauthorized reproduction or commercial use is prohibited.',
    msgOOO:      'Go ahead and quit right now!!!',
    msgXXX:      'A 1% chance but you got it… hang in there a few more days 😉',
    msgXOX:      '😵 Hang in there, things might turn around?',
    msgOXO:      '💡 You still have hope—don’t rush.',
    msgXOO:      '🌀 Feeling shaken but still have some strength.',
    msgOOX:      '🤔 A bit uneasy, but not hopeless yet.',
    msgOXX:      '😓 Your heart’s not at work anymore.',
    msgXXO:      '😩 It’s getting hard to keep going.',
    msgTwoO:     'Two O’s? Maybe you should quit?',
    msgTwoX:     '😩 Feeling down—hold on a bit longer.',
    msgChaos:    '🌀 Fate is chaotic—try again.',
    msgConsecutiveOOO: 'You’ve hit OOO three times in a row—quit right now!',
    // Ranking
    titleRanking:     'Quit Reasons by Everyone',
    rangeToday:       'Today',
    rangeWeek:        'This Week',
    rangeAll:         'All Time',
    sortPopular:      '🔥 Most +',
    sortLatest:       '🆕 Latest',
    modalTitle:       'Write your quit reason:',
    modalPlaceholder: 'e.g.: I’m even in meetings in my dreams...',
    btnSend:          'Send',
    btnCancel:        'Cancel',
    

    // About 頁面
    titleAbout:       'About｜Should I Quit Today?',
    letterMeta:       'To: Anyone at their desk pondering resignation',
    letterTitle:      '"Should I Quit Today?"',
    aboutP1:          'Welcome to a humorous interactive site for professionals.<br />When you find yourself at work, in meetings, or during a bleak lunch break questioning life,<br />this is the place to be.',
    aboutP2:          'Though I’m not the one working, everyone around me is, and almost daily they think about quitting.<br />Some blame their managers, some blame endless meetings,<br />and others simply feel that life is exhausting.<br />So I created this site as a small refuge when work becomes overwhelming.',
    aboutP3:          'What can you do here?<br />🎲 Quit Reason Generator: Produces a “plausible yet absurd” reason to quit.<br />🔺 +1: Upvote reasons that resonate and boost them.<br />🏆 Ranking: See the most popular quit reasons.<br />✍️ Submit: Anonymously share your own venting moment.',
    aboutP4:          '<strong>We’re not actually telling you to quit.</strong><br />Sometimes you need an outlet, and humor is more powerful than seriousness.<br />If it makes you laugh, it’s worth it.',
    aboutP5:          'As a UX designer, I love projects that blend <strong>emotion × interaction × everyday culture</strong>.<br />If you enjoy this site or want to chat about quitting, design, or life’s uncertainties,<br />feel free to reach out or share it with others.',
    letterSign:       'Sincerely,<br /><strong>The Should I Quit Today Team</strong><br />📮 hello@iquit.today'
}
};
function applyTranslations(lang) {
  // 1. 同步更新 <html lang="…">
  document.documentElement.lang = lang;

  // 2. 掃描所有 data-i18n 元素，用 innerHTML 注入含 <br>、<strong> 等標籤的字串
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const txt = translations[lang]?.[key];
    if (!txt) return;

    // input/textarea 的 placeholder
    if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && el.placeholder !== undefined) {
      el.placeholder = txt;
    } else {
      el.innerHTML = txt;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let lang = localStorage.getItem('lang') || 'zh-TW';
  applyTranslations(lang);

  document.querySelectorAll('#lang-options li').forEach(li => {
    li.addEventListener('click', () => {
      lang = li.dataset.lang;
      localStorage.setItem('lang', lang);
      applyTranslations(lang);
      document.getElementById('lang-options').classList.remove('show');
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const options = document.querySelectorAll('#lang-options li');
  let lang = localStorage.getItem('lang') || 'zh-TW';
  applyTranslations(lang);

  options.forEach(li => {
    li.addEventListener('click', e => {
      e.stopPropagation();
      const newLang = li.dataset.lang;        // zh-TW / en
      localStorage.setItem('lang', newLang);
      // 重新載入整個頁面（乾淨狀態，就像剛打開一樣）
      window.location.reload();
    });
  });
});
