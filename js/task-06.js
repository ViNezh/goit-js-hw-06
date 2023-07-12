const inputValidation = document.getElementById('validation-input');
const checkOfValid = inputValidation.addEventListener('blur', onWindowInput);
// Отримання значення необхідної кількості символів
const DATA_LENGTH = inputValidation.getAttribute('data-length');
// Функція перевірки введеного вмісту
function onWindowInput(event) {
  if (event.currentTarget.value.length < DATA_LENGTH) {
    inputValidation.className = 'invalid';
  } else {
    inputValidation.className = 'valid';
  }
}
