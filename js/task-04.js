let counterValue = 0;
const value = document.querySelector('#value');
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const clickDecrement = () => {
  counterValue -= 1;
  value.textContent = `${counterValue}`;
  };
const clickIncrement = () => {
  counterValue += 1;
  value.textContent = `${counterValue}`;
};
buttonDecrement.addEventListener('click', clickDecrement);
buttonIncrement.addEventListener('click', clickIncrement);
