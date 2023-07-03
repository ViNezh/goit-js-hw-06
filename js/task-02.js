const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');
console.log(listEl);
for (let i = 0; i < ingredients.length; i += 1) {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = `${ingredients[i]}`;
  listEl.appendChild(liEl);
}

