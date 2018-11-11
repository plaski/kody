import '../scss/main.scss'

import '../img/forbet-bonus.png'
import '../img/fortuna-bonus.png'
import '../img/lvbet-bonus.png'
import '../img/milenium-bonus.png'
import '../img/totolotek-bonus.png'
import '../img/totolotek-bonus.png'
import '../img/logo.png'
import '../img/fortuna-gift.png'
import '../img/fortuna-bukmacher-600x400.jpg'
import '../img/milenium-bukmacher-600x400.jpg'
import '../img/etoto-bukmacher-600x400.jpg'
import '../img/forbet-bukmacher-600x400.jpg'
import '../img/lvbet-bukmacher-600x400.jpg'
import '../img/totolotek-bukmacher-600x400.jpg'
import '../img/sts-bukmacher-600x400.jpg'
import '../img/superbet-bukmacher-600x400.jpg'
import '../img/forbet-thumb.jpg'
import '../img/fortuna-thumb.jpg'
import '../img/lvbet-thumb.jpg'
import '../img/milenium-thumb.jpg'
import '../img/totolotek-thumb.jpg'

(function() {

const menuToggle = () => {
  const menuBtn = document.getElementById('menuBtn');
  const menuList = document.getElementById('menuList');
  menuBtn.addEventListener('click', () => { 
    menuList.classList.toggle('opened')
  })
}

const submenuToggle = () => {
  const submenuBtn = document.getElementById('submenuBtn');
  const submenuList = document.getElementById('submenuList');
  submenuBtn.addEventListener('click', (e) => {
    if (window.innerWidth < 960 && e.target === submenuBtn) {
      submenuList.classList.toggle('opened') 
    }
  })
}

const init = function() {
  menuToggle()
  submenuToggle()
}
  init();
})();
