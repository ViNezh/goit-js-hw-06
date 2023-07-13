const rangeControlEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');
// Задання розміру шрифта відповідно до початкового положення повзуна
textEl.style.fontSize = rangeControlEl.value + 'px';
// Прослуховування подій та отримання значення положення повзуна
const valueOfControl = rangeControlEl.addEventListener('input', onWindowChange);
// Функція зміни розміру шрифта відповідно до положення повзуна
function onWindowChange(event) {
  const valueEl = event.currentTarget.value + 'px';
  // console.log('Font size= ${valueEl}');
  textEl.style.fontSize = valueEl;
}
