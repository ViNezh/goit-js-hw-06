const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');
const DEFAULT_NAME = 'Anonymous';
textInput.addEventListener('input', onWindowTextChange);

function onWindowTextChange(event) {
  textOutput.textContent = event.currentTarget.value;
  if (textInput.value === '') {
    textOutput.textContent = DEFAULT_NAME;
  }
}
