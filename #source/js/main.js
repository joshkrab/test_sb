let openP = document.querySelector('.header__links');
let popup1 = document.querySelector('.popup1');
let body = document.body;

if (openP) {
   openP.addEventListener('click', function () {
      // toggle в отличии от add работает туда и обратно
      popup1.classList.add('open');
      body.classList.add('scroll');
   });
}

let closeP = document.querySelector('.popup1__close');
if (closeP) {
   closeP.addEventListener('click', function () {
      popup1.classList.remove('open');
      body.classList.remove('scroll');
   });
}

// Burger
let navLIst = document.querySelector('.nav__list');
let burger = document.querySelector('.header__burger');
let navClose = document.querySelector('.global__close');

let inputFiefd = document.querySelector('.header__input');
let linkPopFiefd = document.querySelector('.header__links');

if (burger) {
   burger.addEventListener('click', function () {
      navLIst.classList.add('show1');
      navClose.classList.add('show');
      body.classList.add('scroll');
      inputFiefd.hidden = true;
      linkPopFiefd.hidden = true;
      burger.classList.add('hiddenx');
   });
}

if (navClose) {
   navClose.addEventListener('click', function () {
      navLIst.classList.remove('show1');
      navClose.classList.remove('show');
      body.classList.remove('scroll');
      inputFiefd.hidden = false;
      linkPopFiefd.hidden = false;
      burger.classList.remove('hiddenx');
   });
}

// Catalog window
let catalogBtn = document.querySelector('.nav__show');
let catList = document.querySelector('.catalog__list.sub2');
let back1 = document.querySelector('.arrow-back');
let sticky = document.querySelector('.header__sticky');
let beforeBack = document.querySelector('.catalog__list.show2::before');

if (catalogBtn) {
   catalogBtn.addEventListener('click', function () {
      navLIst.classList.remove('show1');
      back1.classList.add('show');
      catList.classList.add('show2');
      // sticky.classList.add('sticky-index');
      navClose.classList.remove('show');
   });
}

if (back1) {
   back1.addEventListener('click', function () {
      back1.classList.remove('show');
      catList.classList.remove('show2');
      // sticky.classList.remove('sticky-index');
      navClose.classList.add('show');
      navLIst.classList.add('show1');
   });
}
