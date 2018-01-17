'use strict';

var toggler = document.getElementById('toggler');
var mainNav = document.querySelector('.main-nav');
var headerTitle = document.querySelector('.page-header__title');

function mainNavVisibleToggle(event) {
  event.preventDefault();
  toggler.classList.toggle('toggler--close');
  mainNav.classList.toggle('main-nav--active');
  headerTitle.classList.toggle('page-header__title--transform');
}

if (toggler) {
  toggler.addEventListener('click', mainNavVisibleToggle);
}
