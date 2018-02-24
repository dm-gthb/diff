'use strict';

document.addEventListener("DOMContentLoaded", function() {
  var toggler = document.getElementById('toggler');
  var mainNav = document.querySelector('.main-nav');
  var headerTitle = document.querySelector('.page-header__title');
  var buttonToShowHiddenTextAboutAuthor = document.querySelector('.about__description-button');
  var hiddenTextAboutAuthor = document.querySelector('.about__description--hidden');

  function mainNavVisibleToggle(event) {
    event.preventDefault();
    toggler.classList.toggle('toggler--close');
    mainNav.classList.toggle('main-nav--active');
    headerTitle.classList.toggle('page-header__title--transform');

    if (toggler.classList.contains('toggler--close')) {
      toggler.setAttribute('aria-pressed', 'true');
    } else {
      toggler.setAttribute('aria-pressed', 'false');
    }
  }

  if (toggler) {
    toggler.addEventListener('click', mainNavVisibleToggle);
  }

  function showMoreHiddenTextAboutAuthor(event) {
    event.preventDefault();
    hiddenTextAboutAuthor.classList.toggle('about__description--hidden');
    buttonToShowHiddenTextAboutAuthor.classList.toggle('about__description-button--transformed');
  }

  if (buttonToShowHiddenTextAboutAuthor) {
    buttonToShowHiddenTextAboutAuthor.addEventListener('click', showMoreHiddenTextAboutAuthor);
  }
});
