let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let headerLogo = document.querySelector('.page-header__logo');
let overlay = document.querySelector('.main-nav__overlay');

const openingNavigation = () => {
  navMain.classList.remove('main-nav--nojs');
  headerLogo.classList.remove('page-header__logo--hidden');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      headerLogo.classList.add('page-header__logo--hidden');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      headerLogo.classList.remove('page-header__logo--hidden');
    }
  });

  overlay.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      headerLogo.classList.remove('page-header__logo--hidden');
    }
  });
};

export {openingNavigation};
