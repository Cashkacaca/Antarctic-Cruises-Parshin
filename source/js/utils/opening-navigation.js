const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const headerLogo = document.querySelector('.page-header__logo');
const overlay = document.querySelector('.main-nav__overlay');
let body = document.querySelector('body');
const mobilMenu = document.querySelectorAll('.main-nav__link');

function openMenu() {
  navMain.classList.remove('main-nav--closed');
  navMain.classList.add('main-nav--opened');
  headerLogo.classList.add('page-header__logo--hidden');
  body.classList.add('dis-scroll');
}

function closeMenu() {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  headerLogo.classList.remove('page-header__logo--hidden');
  body.classList.remove('dis-scroll');
}

const openingNavigation = () => {
  navMain.classList.remove('main-nav--nojs');
  headerLogo.classList.remove('page-header__logo--hidden');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  overlay.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--opened')) {
      closeMenu();
    }
  });

  mobilMenu.forEach((closer) => closer.addEventListener('click', closeMenu));
};


export {openingNavigation};
