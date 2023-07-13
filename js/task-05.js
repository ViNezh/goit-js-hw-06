const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');
const DEFAULT_NAME = 'Anonymous';
// Прослуховування подій на полі вводу
textInput.addEventListener('input', onWindowTextChange);
// Функція обробки введеного вмісту в полі вводу
// function onWindowTextChange(event) {
//   textOutput.textContent = event.currentTarget.value;
//   // Повернення ім'я за замовчуванням при пустому полі вводу
//   if (textInput.value === '') {
//     textOutput.textContent = DEFAULT_NAME;
//   }
// }
function onWindowTextChange(event) {
  textOutput.textContent = event.currentTarget.value || DEFAULT_NAME;
}
