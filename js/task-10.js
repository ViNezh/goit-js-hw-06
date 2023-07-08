function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  controlEl: document.querySelector('#controls>input'),
  boxesEl: document.querySelector('#boxes'),
  createEl: document.querySelector('[data-create]'),
  destroyEl: document.querySelector('[data-destroy]'),
};
let amount = 0;
let size = 20;
console.log(refs);
refs.controlEl.addEventListener('blur', onAmount);
refs.createEl.addEventListener('click', createBoxes);
refs.destroyEl.addEventListener('click', destroyBoxes);

function onAmount() {
  amount = refs.controlEl.value;
}

function createBoxes() {
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    let sizeEl = size + 'px';
    const divEl = document.createElement('div');
    divEl.classList.add('js-add');
    const colorEl = getRandomHexColor();
    divEl.style.backgroundColor = colorEl;
    divEl.style.width = sizeEl;
    divEl.style.height = sizeEl;

    refs.boxesEl.appendChild(divEl);
  }
}
function destroyBoxes() {
  const allAdded = document.querySelectorAll('.js-add');
  allAdded.forEach(div => div.remove());
  document.location.reload();
}
