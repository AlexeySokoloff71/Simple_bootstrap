'use strict'

//Burger-menu

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', toggleMenu);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('menu--active')) {
    toggleMenu();
  }
});

function toggleMenu() {
  const isOpen = menu.classList.toggle('open');

  menu.classList.toggle("menu--active");
  burger.classList.toggle("burger--active");

  if (isOpen) {
    document.body.style.overflow = 'hidden';
    burger.setAttribute('aria-label', 'Закрыть меню');
  } else {
    document.body.style.overflow ='';
    burger.setAttribute('aria-label', 'Открыть меню');
  }
};

//Search-form
const searchBtn = document.querySelector('.search-btn');
const searchForm = document.querySelector('.search-form');
const searchClose = document.querySelector('.search-form__close');

searchBtn.addEventListener('click', openSearch);

searchClose.addEventListener('click', closeSearch);

function openSearch() {
  searchForm.classList.add('search-form--active');
  // searchForm.classList.add('search-form--visible');
  setTimeout(() => {
    searchForm.classList.add('search-form--visible');
  },  0);
};

function closeSearch() {
  searchForm.classList.remove('search-form--visible');
  // searchForm.classList.remove('search-form--visible');
  setTimeout(() => {
    searchForm.classList.remove('search-form--active');
  }, 300);
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && searchForm.classList.contains('search-form--active')) {
    closeSearch();
  }
});