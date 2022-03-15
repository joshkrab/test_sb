let openP = document.querySelector('.header__links');
let popup1 = document.querySelector('.popup1');
openP.addEventListener('click', function () {
   // toggle в отличии от add работает туда и обратно
   popup1.classList.add('open');
   body.classList.add('scroll');
});

let closeP = document.querySelector('.popup1__close');
closeP.addEventListener('click', function () {
   popup1.classList.remove('open');
   body.classList.remove('scroll');
});

// Burger
let navLIst = document.querySelector('.nav__list');
let burger = document.querySelector('.header__burger');
let navClose = document.querySelector('.global__close');
let body = document.body;

burger.addEventListener('click', function () {
   navLIst.classList.add('show1');
   navClose.classList.add('show');
   body.classList.add('scroll');
});
navClose.addEventListener('click', function () {
   navLIst.classList.remove('show1');
   navClose.classList.remove('show');
   body.classList.remove('scroll');
});

// Catalog window
let catalogBtn = document.querySelector('.nav__show');
let catList = document.querySelector('.catalog__list');
let back1 = document.querySelector('.arrow-back');
let sticky = document.querySelector('.header__sticky');

catalogBtn.addEventListener('click', function () {
   back1.classList.add('show');
   catList.classList.add('show2');
   sticky.classList.add('sticky-index');
});

back1.addEventListener('click', function () {
   back1.classList.remove('show');
   catList.classList.remove('show2');
   sticky.classList.remove('sticky-index');
});
