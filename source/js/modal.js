var feedbackLink = document.querySelector('.contacts__link');
var modalForm = document.querySelector('.feedback');
var fullnameField = document.querySelector('.feedback__field--fullname');
var modalClose = document.querySelector('.feedback__close');

feedbackLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalForm.classList.add('show');
  fullnameField.focus();
});

modalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalForm.classList.remove('show');
});
