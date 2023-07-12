function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const currentColor = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');
// Прослуховування подій натискання кнопки
buttonEl.addEventListener('click', onChangeColor);
// Функція зміни кольору фону
function onChangeColor() {
  const getColor = getRandomHexColor();
  currentColor.textContent = getColor;
  document.body.style.backgroundColor = getColor;
}
