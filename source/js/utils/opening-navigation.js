let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let headerLogo = document.querySelector('.page-header__logo');
let overlay = document.querySelector('.main-nav__overlay');
let body = document.querySelector('body');

const openingNavigation = () => {
  navMain.classList.remove('main-nav--nojs');
  headerLogo.classList.remove('page-header__logo--hidden');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      headerLogo.classList.add('page-header__logo--hidden');
      body.classList.add('dis-scroll');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      headerLogo.classList.remove('page-header__logo--hidden');
      body.classList.remove('dis-scroll');
    }
  });

  overlay.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      headerLogo.classList.remove('page-header__logo--hidden');
      body.classList.remove('dis-scroll');
    }
  });
};

export {openingNavigation};
