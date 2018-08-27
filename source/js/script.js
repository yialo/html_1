var button_1 = document.querySelector('.controls__button--slide--expensive');
var button_2 = document.querySelector('.controls__button--slide--math');
var button_3 = document.querySelector('.controls__button--slide--night');
var slide_1 = document.querySelector('.advantages__item--expensive');
var slide_2 = document.querySelector('.advantages__item--math');
var slide_3 = document.querySelector('.advantages__item--night');
var feedbackLink = document.querySelector('.contacts__link');
var modal = document.querySelector('.feedback');
var fullname = document.querySelector('.feedback__field--fullname');
var close = document.querySelector('.feedback__close');

button_1.addEventListener('click', function(evt) {
  evt.preventDefault();
  slide_1.classList.add('advantages__item--current');
  slide_2.classList.remove('advantages__item--current');
  slide_3.classList.remove('advantages__item--current');
  button_1.classList.add('controls__button--active');
  button_2.classList.remove('controls__button--active');
  button_3.classList.remove('controls__button--active');
});

button_2.addEventListener('click', function(evt) {
  evt.preventDefault();
  slide_1.classList.remove('advantages__item--current');
  slide_2.classList.add('advantages__item--current');
  slide_3.classList.remove('advantages__item--current');
  button_1.classList.remove('controls__button--active');
  button_2.classList.add('controls__button--active');
  button_3.classList.remove('controls__button--active');
});

button_3.addEventListener('click', function(evt) {
  evt.preventDefault();
  slide_1.classList.remove('advantages__item--current');
  slide_2.classList.remove('advantages__item--current');
  slide_3.classList.add('advantages__item--current');
  button_1.classList.remove('controls__button--active');
  button_2.classList.remove('controls__button--active');
  button_3.classList.add('controls__button--active');
});

 feedbackLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.add('show');
  fullname.focus();
});

 close.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.remove('show');
});
