var button_1 = document.querySelector('#control-1');
var button_2 = document.querySelector('#control-2');
var button_3 = document.querySelector('#control-3');
var slide_1 = document.querySelector('.advantages__item--expensive');
var slide_2 = document.querySelector('.advantages__item--math');
var slide_3 = document.querySelector('.advantages__item--night');

button_1.addEventListener('click', function(evt) {
  evt.preventDefault();
  slide_1.classList.add('advantages__item--current');
  slide_2.classList.remove('advantages__item--current');
  slide_3.classList.remove('advantages__item--current');
});

button_2.addEventListener('click', function(evt) {
  evt.preventDefault();
  slide_1.classList.remove('advantages__item--current');
  slide_2.classList.add('advantages__item--current');
  slide_3.classList.remove('advantages__item--current');
});

button_3.addEventListener('click', function(evt) {
  evt.preventDefault();
  slide_1.classList.remove('advantages__item--current');
  slide_2.classList.remove('advantages__item--current');
  slide_3.classList.add('advantages__item--current');
});
