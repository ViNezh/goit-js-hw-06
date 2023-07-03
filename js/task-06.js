const inputValidation = document.getElementById('validation-input');
const DATA_LENGTH = inputValidation.getAttribute('data-length');
const checkOfValid = inputValidation.addEventListener('blur', onWindowInput);

function onWindowInput(event) {
  if (event.currentTarget.value.length < DATA_LENGTH) {
    inputValidation.className = 'invalid';
  } else {
    inputValidation.className = 'valid';
  }
}
