const formEl = document.querySelector('.login-form');
// Прослуховування подій в формі при її відправці
formEl.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  // Скидання базових дій браузера
  event.preventDefault();
  // Отримання введених значень в поля форми
  const elementsForm = event.currentTarget.elements;
  const email = elementsForm.email.value;
  const password = elementsForm.password.value;
  // Створення об'єкта із введеними значеннями
  if (email !== '' || password !== '') {
    const dataForm = { email, password };
    console.log(dataForm);
    event.currentTarget.reset();
  } else {
    alert('All fields must be filled');
  }
}
