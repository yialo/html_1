var feedbackLink = document.querySelector('.contacts__link');
var modalForm = document.querySelector('.feedback');
var fullnameField = document.querySelector('.feedback__field--fullname');
var modalClose = document.querySelector('.feedback__close');

feedbackLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalForm.classList.add('show');
  fullnameField.focus();
});

feedbackLink.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
    modalForm.classList.add('show');
  }
});

modalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalForm.classList.remove('show');
});
