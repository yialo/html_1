var feedbackLink = document.querySelector('.contacts__link');
var modalForm = document.querySelector('.feedback');
var fullnameField = document.querySelector('.feedback__field--fullname');
var emailField = document.querySelector('.feedback__field--email');
var messageField = document.querySelector('.feedback__field--textarea');
var modalClose = document.querySelector('.feedback__close');

feedbackLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalForm.classList.add('show');
  fullnameField.focus();
});

modalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalForm.classList.remove('show');
  modalForm.classList.remove('error');
});

feedbackLink.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
    modalForm.classList.add('show');
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (modalForm.classList.contains('show')) {
      evt.preventDefault();
      modalForm.classList.remove('show');
    }
  }
});

modalForm.addEventListener('submit', function(evt) {
  if (!fullnameField.value || !emailField.value || !messageField.value) {
    evt.preventDefault();
    modalForm.classList.remove('error');
    modalForm.offsetWidth = modalForm.offsetWidth;
    modalForm.classList.add('error');
  }
});

function initMap() {
  var target = {lat: 59.938760, lng: 30.323036};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: target,
    mapTypeControl: false,
    streetViewControl: false
  });
  var marker = new google.maps.Marker({position: target, map: map});
}
