// ✅ 漢堡選單開關
const hamburgerMenuBtn = document.getElementById('hamburger-menu-btn');
const hamburgerMenuList = document.getElementById('hamburger-menu-list');
hamburgerMenuBtn?.addEventListener('click', e => {
  e.stopPropagation();
  hamburgerMenuList.classList.toggle('show');
});
// 點在選單內部不要被 document 的 click 關掉
hamburgerMenuList?.addEventListener('click', e => e.stopPropagation());

// ✅ 語言選單開關
const langToggleBtn = document.getElementById('lang-toggle-btn');
const langOptions   = document.getElementById('lang-options');
langToggleBtn?.addEventListener('click', e => {
  e.stopPropagation();
  langOptions.classList.toggle('show');
});
langOptions?.addEventListener('click', e => e.stopPropagation());

// ✅ 點空白處自動關閉
document.addEventListener('click', () => {
  hamburgerMenuList.classList.remove('show');
  langOptions.classList.remove('show');
});

// ✅ 避免點選 menu / langOptions 本身會被 document 關閉
hamburgerMenuList?.addEventListener('click', (e) => e.stopPropagation());
langOptions?.addEventListener('click', (e) => e.stopPropagation());
