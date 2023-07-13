const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');
// Створення фрагмента для зберігання списку li
const fragment = document.createDocumentFragment();

//Цикл із створення нових елементів li
for (const ingredient of ingredients) {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  fragment.appendChild(liEl);
 }
// Додавання створеного списку за один раз
listEl.appendChild(fragment);
