const reasons = {
  zh: {
    quit: [
      "「該！我才不在意這點小錢！」",
      "「該！你值得更好的，而不是更慘的。」",
      "「該！被薪水羞辱久了，總要自尊回來一下。」",
      "「該！我夢到自己離職，醒來居然在偷笑。」",
      "「該！我沒在做事，只是在耗生命。」",
      "「該！公司已經變成我的壞習慣。」",
      "「該！我不應該在 PPT 裡找人生意義。」",
      "「該！我唯一能掌控的，就是何時離開。」",
      "「該！我才不是來這裡學會忍耐的。」",
      "「該！薪水讓我懷疑我是不是實習生。」",
      "「該！我的夢想不是成為疲憊的上班生物。」",
      "「該！再不走，我怕自己會開始習慣這一切。」",
      "「該！上班讓我學會演戲，但我不是演員。」",
      "「該！我不是來這裡當人生失敗的代言人。」",
      "「該！這不是工作，這是慢性自殺！」",
      "「該！你值得更好的，而不是更慘的。」",
      "「該！我來上班，不是來渡劫的。」",
      "「該！再留下去，我怕我連離職的力氣都沒有。」",
      "「該！不然你是打算在這裡耗死？」",
      "「該！公司要我成長，我卻只剩頭痛。」",
      "「該！早上打卡像報到，晚上下班像逃亡。」",
      "「該！開會像打仗，做事像打怪，薪水像打水漂。」",
      "「該！這份工作快把我變成沒有靈魂的 Excel 附加元件。」",
      "「該！原本想撐到過年，結果過年在加班。」",
      "「該！我沒在厭世，我只是在上班。」",
      "「該！連想到要寫離職信的時候我都在笑，這不就是答案嗎？」",
      "「該！主管說要彈性，我以為是放我走。」",
      "「該！不然我怕我真的會開始習慣痛苦。」",
      "「該！我已經不記得上班為了什麼，只記得下班多快。」",
      "「該！日復一日不是成長，是消磨。」",
      "「該！就算我不動，公司還是會出包。」",
      "「該！會議多到我開始懷疑『上班』是不是指上會議。」",
      "「該！別人朝夢想前進，我在原地讀主管的情緒。」",
      "「該！公司不是牢，但我每天都想越獄。」",
      "「該！不走，我就要開始學著假笑了。」",
      "「該！我沒變爛，是工作把我磨平了。」",
      "「該！一想到明天還要來，我今天就想辭。」"
    ],
    
    stay: [
      "「今天還是先不要好了～ 我也不確定離職會不會更慘。」",
      "「今天還是先不要好了～ 月底再說。」",
      "「今天還是先不要好了～ 搞不好明天主管就離職了！」",
      "「今天還是先不要好了～ 現在離職，年終就飛了。」",
      "「今天還是先不要好了～ 離了我就沒辦法帶薪💩了。」",
      "「今天還是先不要好了～ 因為還沒存夠離職的底氣。」",
      "「今天還是先不要好了～ 畢竟我也沒多好，怎麼要求工作要多好。」",
      "「今天還是先不要好了～ 這麼爛我都能活，代表我真的很強。」",
      "「今天還是先不要好了～ 我走了，這裡會更慘，我良心不允許。」",
      "「今天還是先不要好了～ 因為懶得交接，能拖就拖。」",
      "「今天還是先不要好了～ 比爛我還沒輸，還不能退場。」",
      "「今天還是先不要好了～ 因為我不想在新工作重新學人名。」",
      "「今天還是先不要好了～ 我其實只是來蹭冷氣的。」",
      "「今天還是先不要好了～ 我沒在上班，我在拖時間。」",
      "「今天還是先不要好了～ 現在辭職，今年的尾牙就吃不到了。」",
      "「今天還是先不要好了～ 因為我已經進化成不會被罵影響的生物了。」",
      "「今天還是先不要好了～ 有穩定薪水的爛，還是比沒錢的自由好。」",
      "「今天還是先不要好了～ 我走了，就沒人幫新同事翻譯主管的情緒。」",
      "「今天還是先不要好了～ 工作爛歸爛，但樓下早餐店很好吃。」",
      "「今天還是先不要好了～ 薪水雖小，能繳房租就不錯了。」",
      "「今天還是先不要好了～ 我想看這家公司最後會怎麼爆炸。」",
      "「今天還是先不要好了～ 我沒夢想，只想準時下班而已。」",
      "「今天還是先不要好了～ 每天都想離職，但想完就下班了。」",
      "「今天還是先不要好了～ 還沒想好要去哪裡擺爛。」",
      "「今天還是先不要好了～ 因為我相信躺平也能等到奇蹟。」",
      "「今天還是先不要好了～ 我還沒有準備好當自由人。」",
      "「今天還是先不要好了～ 至少這裡 Wi-Fi 穩、冷氣強。」",
      "「今天還是先不要好了～ 我走了誰幫同事吐槽？」",
      "「今天還是先不要好了～ 下班後罵公司，是我唯一的快樂。」",
      "「今天還是先不要好了～ 因為我太懶，連離職信都懶得寫。」",
      "「今天還是先不要好了～ 這裡爛習慣我都適應了，懶得重新學。」",
      "「今天還是先不要好了～ 我的靈魂早離了，身體還在而已。」",
      "「今天還是先不要好了～ 外面更可怕，我還沒準備好探險。」",
      "「今天還是先不要好了～ 我已經培養出躺著上班的技能。」",
      "「今天還是先不要好了～ 公司爛歸爛，但發薪水準時。」",
      "「今天還是先不要好了～ 我還沒想好要去哪裡擺爛。」"
    ]    
  },
  en: {
    quit: [
      "“QUIT! Congratulations! You’re now emotionally free.”",
    "“QUIT! Your soul just submitted its resignation.”",
    "“QUIT! Don't forget to clear your browser history on the way out.”",
    "“QUIT! Celebrate with bubble tea and a passive-aggressive Slack message.”",
    "“QUIT! Print this and hand it to HR. Or not. Up to you.”",
    "“QUIT! Or are you planning to rot here forever?”",
    "“QUIT! The only thing growing here is my frustration, not my paycheck.”",
    "“QUIT! I’ve spent more time dodging meetings than doing work.”",
    "“QUIT! This job is like a bad relationship, the longer I stay, the worse it gets.”",
    "“QUIT! Because my soul is already on vacation, my body just hasn’t left yet.”",
    "“QUIT! I thought this job would be my dream, but it’s more of a nightmare.”",
    "“QUIT! I can’t handle another week of pretending to enjoy ‘team-building exercises.’”",
    "“QUIT! This company has a growth mindset, but my career isn’t growing here.”",
    "“QUIT! I’ve hit the ‘exit stage left’ button in my head a hundred times.”",
    "“QUIT! Because my emotional support coffee cup is tired of me bringing it here every day.”",
    "“QUIT! I don’t need a job, I need therapy. And neither of those things are happening here.”",
    "“QUIT! I’m starting a new career as a professional napper, and it's going great.”",
    "“QUIT! I’m convinced the office printer is plotting against me, and I’m done being part of this drama.”",
    "“QUIT! I’m tired of pretending this job is anything more than a paycheck with a side of disappointment.”",
    "“QUIT! I was promised growth. Instead, I got another email about a mandatory meeting.”",
    "“QUIT! Because I was promoted to ‘employee of the month’… in my own daydreams.”",
    "“QUIT! I’ve mastered the art of pretending to care, but now I’m just exhausted.”",
    "“QUIT! The office plant is the only thing that gets better treatment than me.”",
    "“QUIT! I realized my career is more of a hobby at this point.”",
    "“QUIT! This job is like a bad reality show—there’s no winner, just constant drama.”",
    "“QUIT! I’m not leaving, I’m just giving this job a break from me.”",
    "“QUIT! Every time I think about the future, I imagine it without this job.”",
    "“QUIT! I tried to ‘manage stress,’ but my stress manages me instead.”",
    "“QUIT! I can’t keep pretending this place is a career; it’s more like a time sink.”",
    "“QUIT! I gave it my all, and all I got was another round of pointless meetings.”",
    "“QUIT! I’m too old for ‘team-building exercises’ and too young for this much stress.”",
    "“QUIT! I’ve been staring at my screen for hours, and I’m still not sure what I’m doing.”",
    "“QUIT! They said the sky’s the limit, but I’m still stuck in the basement.”",
    "“QUIT! Because my ‘creative space’ feels more like a creative prison.”",
    "“QUIT! The most fulfilling part of my day is when I finally log off.”",
    "“QUIT! Every email feels like a new layer of emotional baggage.”",
    "“QUIT! I’m starting to believe the only thing I’m good at here is surviving.”",
    "“QUIT! I gave 100%, and all I got was an email chain that could’ve been a 5-minute meeting.”",
    "“QUIT! You deserve better, not worse!”"
    ],
    stay: [
      "“Still here. Too broke to leave.”",
      "“Another day, another existential crisis. You’re getting good at this.”",
      "“Still underpaid. But at least you know where the snacks are.”",
      "“Not quitting. Yet. Hope is a next-week thing.”",
      "“Keep dragging yourself in. It’s cheaper than therapy.”",
      "“You’re staying, apparently. Even though your brain left.”",
      "“This is fine. Just ignore the fire.”",
      "“It's the end of the month, wait till payday.”",
      "“Not today, maybe tomorrow.”",
      "“Maybe my boss will quit before me!”",
      "“I can’t leave yet, I’m too invested in the office gossip.”",
      "“I’m staying for the snacks, honestly.”",
      "“I have too many unused vacation days to just leave.”",
      "“I’m waiting for the company to figure out what they actually want from me.”",
      "“I’m holding out for a bigger crisis, and I need to be here for it.”",
      "“I’m staying because my email inbox hasn’t reached peak disaster yet.”",
      "“I’ll leave when the Wi-Fi stops working. Until then, I’m here.”",
      "“I need to finish at least one project... for the memories.”",
      "“The drama is so good here, I don’t want to miss the next episode.”",
      "“I’m not leaving until they offer me the free coffee I was promised.”",
      "“It’s not the job, it’s the paycheck. And the paycheck keeps me here.”",
      "“The fear of starting fresh is stronger than my desire to quit.”",
      "“I need to finish reading all my emails before I can walk away.”",
      "“I’m just here for the free Wi-Fi and to avoid responsibility.”",
      "“My desk is the only place where I’m still respected. For now.”",
      "“The email chains are getting better, I can’t just abandon them.”",
      "“I’m here for the long run... or at least until the next company restructuring.”",
      "“I’m just holding on for the next promotion that’ll never come.”",
      "“Leaving would mean dealing with change, and I’m too tired for that.”",
      "“I’m staying until my soul finds an escape route.”"
    ]
  }
};

  const dumbReasons = {
    zh: [
      "「老闆霸凌我。」",
      "「我不是討厭加班，我只是想知道下班的感覺。」",
      "「主管說 KPI 要感動他，我想說我媽都沒這麼難取悅。」",
      "「同事太正，我無法專心當廢物。」",
      "「每天都要裝得很愛工作，我怕得內傷。」",
      "「打卡機比我還難搞，我輸了。」",
      "「主管說我太安靜，我怕我開口會吵到他靈魂出竅。」",
      "「打卡打到感情出現裂痕，我和人生冷戰中。」",
      "「主管一直用『像家人一樣』形容公司，我怕接下來要叫他爸。」",
      "「每天都在演很愛工作的戲，拿臨演的錢演主角的命。」",
      "「辦公桌風水太差，我連週五都等不到。」",
      "「公司氣氛太安靜，連放個屁都要請假。」",
      "「每次開會都像靈魂出竅研討會。」",
      "「連影印機都比我有存在感。」",
      "「我只是打個哈欠，被主管問是不是不夠投入。」",
      "「公司冷氣太強，我的夢想被凍傷了。」",
      "「我只是沒回訊息，老闆就安排我下週簡報。」",
      "「公司熱愛創新，除了薪資永遠不動。」",
      "「我點開薪資單，感覺被詐騙集團慰問。」",
      "「週會 PPT 改五次，最後主管說用第一版就好。」",
      "「同事請育嬰假，我開始羨慕嬰兒。」",
      "「HR 問我未來規劃，我說活著就好，她記了筆記。」",
      "「我以為我在上班，HR 以為我在實習。」",
      "「辦公室沒有插座，我手機比我先離職。」",
      "「因為茶水間沒有免費可樂。」",
      "「開會時有人問我是新人嗎，我已經做三年了。」",
      "「因為 WiFi 太慢，Google 都打不開。」",
      "「因為公司馬桶沖水太大聲，壓力太大。」",
      "「因為老闆的名字跟我前任一樣。」",
      "「每次打開信箱都像恐怖箱，我不想再玩了。」",
      "「我太常點外送，外送員都知道我在哪個部門。」",
      "「我原本只是想請個特休，不小心請到人生轉捩點。」",
      "「我曾經試著努力，結果被加了兩倍工作量。」",
      "「用 ChatGPT 都比跟主管溝通有效率。」",
      "「每週例會像恐怖片的續集，永遠不知道誰會崩潰。」",
      "「我把公司名字打進 Google，第一個建議是『倒閉』。」",
      "「開會 90 分鐘沒結論，但我下班的夢破滅了。」",
      "「我午休時間比我人生自由時間還多。」",
      "「薪水少就算了，還要裝得自己很感恩。」",
      "「請了三天假回來，世界沒變，但我的心已經變了。」",
      "「我在上班途中希望被隕石砸中，代表我真的該走了。」",
      "「連發呆都要躲主管，我太累了。」",
      "「我只是想當個快樂的廢物，不是高效率的工具人。」",
      "「我只是請個假，公司就當我離職了，那我就離啊。」",
      "「因為影印機每次都跟我作對。」"
  
    ],
    en: [
      "“I’ve been promoted to professional napper.”",
      "“The Wi-Fi here isn’t strong enough for my dreams.”",
      "“I got a job offer from my couch. It’s full-time.”",
      "“My keyboard is louder than my ambition.”",
      "“I’ve mastered the art of pretending to work.”",
      "“The printer knows too many secrets.”",
      "“I’m pretty sure the coffee machine is a spy.”",
      "“I’m too busy planning my escape to do actual work.”",
      "“My energy is better spent on napping than networking.”",
      "“The office plants look happier than I am.”",
      "“I can’t handle the stress of organizing my desktop anymore.”",
      "“I’m overqualified for this mental breakdown.”",
      "“I’m joining a circus. The pay is better.”",
      "“The HR department is running out of excuses for me.”",
      "“I’ll be more useful as an inflatable lawn decoration.”",
      "“My email inbox is my personal hell.”",
      "“I’m leaving for greener pastures... or at least a less soul-sucking job.”",
      "“I got offered a job as a professional procrastinator.”",
      "“I can’t work in an office where the fridge is always empty.”",
      "“I’ve mastered the art of pretending to listen.”",
      "“I realized I peak at lunchtime.”",
      "“My plants need me full-time.”",
      "“I’m allergc to Excel.”",
      "“I heard Mercury is in retrograde.”",
      "“My dog said it’s time.”",
      "“I’ve decided to pursue a career in doing nothing.”",
      "“I ran out of fake smiles.”",
      "“The office chairs gave me trust issues.”",
      "“I accidentally became self-aware.”",
      "“I can’t keep pretending to care about Q4.”",
      "“I joined a cult. They offer dental.”",
      "“I'm moving to a remote island. Spiritually.”",
      "“My horoscope told me to quit.”",
      "“I’ve achieved everything I never wanted.”",
      "“The coffee machine betrayed me.”",
      "“I thought this was an unpaid internship.”",
      "“My inner child filed a complaint.”",
      "“I’ve chosen vibes over stability.”",
      "“My imaginary friend got a better job.”",
      "“HR, it’s not you. It’s capitalism.”"

    ]
  };

let currentLanguage = localStorage.getItem("selectedLanguage") || "zh";


function toggleLanguage() {
  currentLanguage = currentLanguage === "zh" ? "en" : "zh";
  localStorage.setItem("selectedLanguage", currentLanguage);
  updateLanguage();
}


function updateLanguage() {

  document.getElementById("menu-gen").innerText =
    currentLanguage === "zh" ? "今天該離職了嗎？" : "Time to quit my job?";
  document.getElementById("menu-submit").innerText =
    currentLanguage === "zh"
      ? "分享給我們更多離職的理由"
      : "Share more reasons for quitting with us!";

  if (document.getElementById("title")) {
    document.getElementById("title").innerText =
      currentLanguage === "zh"
        ? "今天該離職了嗎？"
        : "Should I quit my job today?";
  }

  if (document.getElementById("generateBtn")) {
    document.getElementById("generateBtn").innerText =
      currentLanguage === "zh" ? "開始！" : "START!";
  }

  if (document.getElementById("result")) {
    document.getElementById("result").innerText =
      currentLanguage === "zh"
        ? " 機會＆命運？ "
        : "Click it. You’ve made worse decisions anyway.";
  }

  if (document.getElementById("dumbReasonBtn")) {
    document.getElementById("dumbReasonBtn").innerText =
      currentLanguage === "zh" ? "查看你的離職理由" : "See the Quit Reasons";
  }

  if (document.getElementById("userReason")) {
    document.getElementById("userReason").placeholder =
      currentLanguage === "zh"
        ? "請輸入你的離職理由..."
        : "Type your quitting reason here...";
  }

  if (document.getElementById("submitBtn")) {
    document.getElementById("submitBtn").innerText =
      currentLanguage === "zh"
        ? "提交並公開理由"
        : "Submit Your Resignation";
  }

  if (document.getElementById("submitTitle")) {
    document.getElementById("submitTitle").innerText =
      currentLanguage === "zh"
        ? "分享大家你的離職理由"
        : "Share your reason for quitting with everyone!";
  }

  if (document.getElementById("reasonsTitle")) {
    document.getElementById("reasonsTitle").innerText =
      currentLanguage === "zh"
        ? "📢 大家的離職理由"
        : "📢 Everyone’s Quitting Reasons";
  }


  const langToggleBtn = document.getElementById("lang-toggle");
  if (langToggleBtn) {
    langToggleBtn.innerText = currentLanguage === "zh" ? "🇬🇧 ENG" : "🇹🇼 繁中";
  }


  const footerContent = {
    zh: {
      copyright: "© 2025 今天該離職了嗎？",
      licenseText: "本網站以",
      licenseLinkText: "CC BY-NC 4.0 創用 CC 授權",
      shareNotice: "歡迎非商業用途的分享與改作，請註明原作者與出處。",
    },
    en: {
      copyright: "© 2025 Time to quit my job?",
      licenseText: "This website is licensed under",
      licenseLinkText: "CC BY-NC 4.0",
      shareNotice: "Feel free to share and adapt for non-commercial use, with attribution.",
    }
  };

  const footer = document.getElementById("footer");
  footer.innerHTML = `
    <p style="margin: 0;">
      ${footerContent[currentLanguage].copyright}<br>
      ${footerContent[currentLanguage].licenseText}
      <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">
        <strong>${footerContent[currentLanguage].licenseLinkText}</strong>
      </a>
      <br>
      ${footerContent[currentLanguage].shareNotice}
    </p>
    <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer">
      <img src="https://licensebuttons.net/l/by-nc/4.0/88x31.png" alt="CC BY-NC 4.0" style="margin-top: 6px; height: 24px; filter: invert(0);" class="cc-badge">
    </a>
  `;

  loadReasons();
}


function generateReason() {
  const resultElement = document.getElementById("result");
  const dumbReasonBtn = document.getElementById("dumbReasonBtn");
  const restartBtn = document.getElementById("restartBtn");
  const generateBtn = document.getElementById("generateBtn");


  dumbReasonBtn.style.display = "none";
  restartBtn.style.display = "none";
  disableButtons();

  const pool = reasons[currentLanguage];
  let startTime = Date.now();

  const interval = setInterval(() => {
    const randomText = pool[Math.floor(Math.random() * pool.length)];
    resultElement.innerText = randomText;

    if (Date.now() - startTime >= 800) {
      clearInterval(interval);


      const finalReason = pool[Math.floor(Math.random() * pool.length)];
      resultElement.innerText = finalReason;
      confettiEffect();


      generateBtn.style.display = "none";
      restartBtn.style.display = "inline-block";


      const showDumb = currentLanguage === "zh"
      ? /^「?該！/.test(finalReason)
      : /^QUIT!/.test(finalReason);
    

      if (showDumb) {
        dumbReasonBtn.style.display = "inline-block";
        dumbReasonBtn.disabled = false;
      } else {
        dumbReasonBtn.style.display = "none";
      }
    }
  }, 1);
}
    
  

function generateReason() {
  const resultElement = document.getElementById("result");
  const dumbReasonBtn = document.getElementById("dumbReasonBtn");
  const restartBtn = document.getElementById("restartBtn");
  const generateBtn = document.getElementById("generateBtn");
  const dumbResultElement = document.getElementById("dumbResult");


  dumbReasonBtn.style.display = "none";
  dumbResultElement.innerText = ""; 
  restartBtn.style.display = "none";
  generateBtn.disabled = true;
  dumbReasonBtn.disabled = false;

  const langGroup = reasons[currentLanguage];
  const allReasons = [...langGroup.quit, ...langGroup.stay];
  let startTime = Date.now();


  const interval = setInterval(() => {
    const randomText = allReasons[Math.floor(Math.random() * allReasons.length)];
    resultElement.innerText = randomText;
  }, 10);

  setTimeout(() => {
    clearInterval(interval);


    const selectedGroup = Math.random() < 0.5 ? "quit" : "stay";
    const selectedList = langGroup[selectedGroup];
    const finalReason = selectedList[Math.floor(Math.random() * selectedList.length)];


    resultElement.innerText = finalReason;
    confettiEffect();

    generateBtn.style.display = "none";
    restartBtn.style.display = "inline-block";

    if (selectedGroup === "quit") {
      dumbReasonBtn.style.display = "inline-block";
      dumbReasonBtn.disabled = false;
    } else {
      dumbReasonBtn.style.display = "none";
    }

  }, 800);
}


function generateDumbReason() {
  const dumbResultElement = document.getElementById("dumbResult");
  const dumbReasonBtn = document.getElementById("dumbReasonBtn");
  dumbReasonBtn.disabled = true;

  const pool = dumbReasons[currentLanguage];
  let startTime = Date.now();

  const interval = setInterval(() => {
    const randomText = pool[Math.floor(Math.random() * pool.length)];
    dumbResultElement.innerText = randomText;
  }, 10);

  setTimeout(() => {
    clearInterval(interval);
    const finalReason = pool[Math.floor(Math.random() * pool.length)];
    dumbResultElement.innerText = finalReason;
    confettiEffect();

    dumbReasonBtn.style.display = "none"; 

  }, 800); 
}


function confettiEffect() {
  confetti({
    particleCount: 500,
    spread: 360,
    startVelocity: 50,
    origin: { y: 0.5 },
  });
}


function restartPage() {
  window.location.reload();
}

  
  function disableButtons() {
    document.getElementById("generateBtn").disabled = true;
    document.getElementById("dumbReasonBtn").disabled = true;
  }
  
  function enableButtons() {
    document.getElementById("generateBtn").disabled = false;
    document.getElementById("dumbReasonBtn").disabled = false;
  }
  
  
  function submitReason() {
    const userReason = document.getElementById("userReason").value.trim();
    if (userReason === "") {
      alert(currentLanguage === "zh" ? "請輸入你的離職理由！" : "Please enter your resignation reason!");
      return;
    }
  
    const key = `reasons_${currentLanguage}`;
    let storedReasons = JSON.parse(localStorage.getItem(key) || "[]");
    storedReasons.push(userReason);
    localStorage.setItem(key, JSON.stringify(storedReasons));
  
    document.getElementById("userReason").value = "";
    alert(currentLanguage === "zh" ? "你的離職理由已公開！" : "Your resignation reason has been posted!");
    loadReasons();
  }
  

  function loadReasons() {
    const reasonList = document.getElementById("reasonList");
    if (!reasonList) return;
  
    const key = `reasons_${currentLanguage}`;
    let storedReasons = JSON.parse(localStorage.getItem(key) || "[]");
  
    reasonList.innerHTML =
      storedReasons.length === 0
        ? `<p>${currentLanguage === "zh" ? "目前沒有任何離職理由。" : "No resignation reasons yet."}</p>`
        : storedReasons.map((reason) => `<li>${reason}</li>`).join("");
  }
  

  function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    updateDarkModeIcon();
  }
  
  function updateDarkModeIcon() {
    const modeBtn = document.querySelector(".mode-btn");
    if (modeBtn) {
      modeBtn.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    }
  }
  

  document.addEventListener("DOMContentLoaded", function () {
    currentLanguage = localStorage.getItem("selectedLanguage") || "zh";
  
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
    }
  
    updateDarkModeIcon();
    updateLanguage();
  
    const submitBtn = document.getElementById("submitBtn");
    if (submitBtn) {
      submitBtn.addEventListener("click", submitReason);
    }
  
    loadReasons();
  });

  
