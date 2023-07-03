const rangeControlEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');
textEl.style.fontSize = rangeControlEl.value + 'px';
const valueOfControl = rangeControlEl.addEventListener('input', onWindowChange);
function onWindowChange(event) {
  const valueEl = event.currentTarget.value + 'px';
  console.log(valueEl);
  textEl.style.fontSize = valueEl;
}
