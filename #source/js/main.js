let openP = document.querySelector('.header__links');
let popup1 = document.querySelector('.popup1');
openP.addEventListener('click', function () {
   // toggle в отличии от add работает туда и обратно
   popup1.classList.toggle('open');
});

let closeP = document.querySelector('.popup1__close');
closeP.addEventListener('click', function () {
   popup1.classList.toggle('open');
});

// Burger
let navLIst = document.querySelector('.nav__list');
let burger = document.querySelector('.header__burger');
let navClose = document.querySelector('.nav__close');

burger.addEventListener('click', function () {
   navLIst.classList.add('show1');
});
navClose.addEventListener('click', function () {
   navLIst.classList.remove('show1');
});

// Catalog window
let catalogBtn = document.querySelector('.derevo');
let catList = document.querySelector('.catalog__list');
let back1 = document.querySelector('.arrow-back');
let sticky = document.querySelector('.header__sticky');

catalogBtn.addEventListener('click', function () {
   catList.classList.toggle('show2');
   sticky.classList.toggle('sticky-index');
});

back1.addEventListener('click', function () {
   catList.classList.toggle('show2');
   sticky.classList.toggle('sticky-index');
});

// Sub
// let catItem = document.querySelector('.catalog__item');
// let subList = document.querySelector('.sub-list');

// catItem.addEventListener('click', function () {
//    subList.classList.toggle('show-sub');
// });
