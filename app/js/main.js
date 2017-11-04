//-------------------------------------------------
//--- click and animation for nav-burger button
//-------------------------------------------------
var burgerButton = document.querySelector(".nav-burger");
var closeIcon = document.querySelector(".close-icon");
var burgerIcon = document.querySelector(".burger-icon");
var navPage = document.querySelector(".nav-page");
var navPageMenu = document.querySelector(".nav-page--menu");
var animBackUL = document.querySelector('.anim-back--upper-left');
var animBackUR = document.querySelector('.anim-back--upper-right');
var animBackBL = document.querySelector('.anim-back--bottom-left');
var animBackBR = document.querySelector('.anim-back--bottom-right');

burgerButton.addEventListener('click', function(e) {
  closeIcon.classList.toggle('change');
  burgerIcon.classList.toggle('change');
  navPage.classList.toggle('show');
  navPageMenu.classList.toggle('show');
  animBackUL.classList.toggle('show');
  animBackUR.classList.toggle('show');
  animBackBL.classList.toggle('show');
  animBackBR.classList.toggle('show');

  e.stopPropagation();
});

//-------------------------------------------------
//--- load onepage_scroll
//-------------------------------------------------
$(".main").onepage_scroll();
