const inputValidation = document.getElementById('validation-input');
const checkOfValid = inputValidation.addEventListener('blur', onWindowInput);
// Отримання значення необхідної кількості символів
const DATA_LENGTH = Number(inputValidation.getAttribute('data-length'));
// console.log(`Numbers: ${DATA_LENGTH}`);
// Функція перевірки введеного вмісту
function onWindowInput(event) {
  if (Number(event.currentTarget.value.length) === DATA_LENGTH) {
    inputValidation.classList.add('valid');
    inputValidation.classList.remove('invalid');
  } else {
    inputValidation.classList.add('invalid');
    inputValidation.classList.remove('valid');
  }
  // console.log(Number(event.currentTarget.value.length));
}
