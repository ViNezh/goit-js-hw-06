let counterValue = 0;
const value = document.querySelector('#value');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
// Функція обробки кліка по кнопці -1
const clickDecrement = () => {
  counterValue -= 1;
  value.textContent = `${counterValue}`;
};
//Функція обробки кліка по кнопці +1
const clickIncrement = () => {
  counterValue += 1;
  value.textContent = `${counterValue}`;
};
// Прослуховування подій на кнопках
buttonDecrement.addEventListener('click', clickDecrement);
buttonIncrement.addEventListener('click', clickIncrement);
