'use strict'

//Burger-menu

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu__link');

 //Тап по бургеру
if (burger) {
  burger.addEventListener('click', toggleMenu);
};

//Переход по ссылке
links.forEach( link => {
  link.addEventListener('click', toggleMenu);
});

//Нажатие Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('menu--active')) {
    toggleMenu();
  }
});

//Функция открытия/закрытия меню
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

  setTimeout(() => {
    searchForm.classList.add('search-form--visible');
  },  0);
};

function closeSearch() {
  searchForm.classList.remove('search-form--visible');
  
  setTimeout(() => {
    searchForm.classList.remove('search-form--active');
  }, 300);
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && searchForm.classList.contains('search-form--active')) {
    closeSearch();
  }
});

//Swiper-on-resize by maxdenaro

window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  resizableSwiper(
    '(max-width: 576px)',
    '.slider',
    {
      direction: 'horizontal',
      loop: true,
      initialSlide: 0,
      autoplay: { 
        delay: 1500, 
        disableOnInteraction: true,
      },
      spaceBetween: 10,
      slidesPerView: 2,          // сколько слайдов показывать
      slidesPerGroup: 1,         // сколько пролистывать за раз
      centeredSlides: false,

      speed: 300,
      freeMode: true,
    }
  );
});