//@prepros-append jq-start.js
//@prepros-append forms.js
//@prepros-append script.js
//@prepros-append jq-end.js
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
