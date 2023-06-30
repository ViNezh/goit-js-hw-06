// Task 1.1
const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.length}`);

// Task 1.2
categoriesEl.forEach(item => {
  const title = item.querySelector('h2');
  console.log(`Category: ${title.textContent}`);
  const quantityEl = item.querySelectorAll('li');
  console.log(`Elements: ${quantityEl.length}`);
});
