function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Створення колекції посилань
const refs = {
  controlEl: document.querySelector('#controls>input'),
  boxesEl: document.querySelector('#boxes'),
  createEl: document.querySelector('[data-create]'),
  destroyEl: document.querySelector('[data-destroy]'),
};
// Початкові значення
let amount = 0;
let size = 20;
// Створення фрагмента для зберігання колекції
const fragment = document.createDocumentFragment();

// Прослуховування подій в полі вводу та на кнопках
refs.controlEl.addEventListener('blur', onAmount);
refs.createEl.addEventListener('click', createBoxes);
refs.destroyEl.addEventListener('click', destroyBoxes);
// Функція отримання введеної кількості
function onAmount(event) {
  // Перевірка введеного значення
  if (
    Number(event.currentTarget.value) < 0 ||
    Number(event.currentTarget.value) > 100
  ) {
    alert('Entered value must be from 0 to 100');
  } else {
    amount = Number(event.currentTarget.value);
    return amount;
  }
}
// Функція створення елементів
function createBoxes() {
  console.log(`Entered value: ${amount}`);
  // цикл для створення заданої кількості елементів
  for (let i = 0; i < amount; i += 1) {
    // Збільшення розміру квадрата на кожній ітерації
    size += 10;
    let sizeEl = size + 'px';
    const divEl = document.createElement('div');
    divEl.classList.add('js-add');
    const colorEl = getRandomHexColor();
    divEl.style.backgroundColor = colorEl;
    divEl.style.width = sizeEl;
    divEl.style.height = sizeEl;
    fragment.appendChild(divEl);
  }
  // Перенесення колекції в деревоза один раз
  refs.boxesEl.appendChild(fragment);
}
// Функція видалення всіх створених елементів
function destroyBoxes() {
  const allAdded = document.querySelectorAll('.js-add');
  allAdded.forEach(div => div.remove());
  document.location.reload();
}
