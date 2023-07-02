const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', onWindowTextChange);

function onWindowTextChange(event) {
  textOutput.textContent = event.currentTarget.value;
  if (textInput.value === '') {
    textOutput.textContent = 'Anonymous';
  }
}
