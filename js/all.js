document.addEventListener('DOMContentLoaded', () => {

  initHamburger();

  
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {

      const newLang = btn.getAttribute('data-lang');

      
      const currentFile = window.location.pathname.split('/').pop();

      let targetFile = currentFile;

      if (newLang === 'en') {
       
        if (!currentFile.endsWith('-en.html')) {
          
          targetFile = currentFile.replace('.html', '-en.html');
        }
      } else {
        
        if (currentFile.endsWith('-en.html')) {
         
          targetFile = currentFile.replace('-en.html', '.html');
        }
      }

      
      window.location.href = targetFile;
    });
  });
});


function initHamburger() {
  const menuBtn  = document.getElementById('hamburger-menu-btn');
  const closeBtn = document.getElementById('menu-close');
  const sideMenu = document.getElementById('side-menu');
  const overlay  = document.getElementById('overlay');

  if (!menuBtn || !closeBtn || !sideMenu || !overlay) {
    console.warn('[initHamburger] 缺少必要元素');
    return;
  }


  menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('show');
    overlay.classList.add('show');
  });

 
  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('show');
    overlay.classList.remove('show');
  });
  overlay.addEventListener('click', () => {
    sideMenu.classList.remove('show');
    overlay.classList.remove('show');
  });

  
  let touchStartX = 0;
  let touchEndX   = 0;
  const threshold = 20;
  sideMenu.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
  });
  sideMenu.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > threshold) {
      sideMenu.classList.remove('show');
      overlay.classList.remove('show');
    }
  });
  overlay.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
  });
  overlay.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > threshold) {
      sideMenu.classList.remove('show');
      overlay.classList.remove('show');
    }
  });
}
