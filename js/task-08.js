const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const elementsForm = event.currentTarget.elements;
  const email = elementsForm.email.value;
  const password = elementsForm.password.value;
  if (email !== '' || password !== '') {
    const dataForm = { email, password };
    console.log(dataForm);
    event.currentTarget.reset();
  } else {
    alert('All fields must be filled');
  }
}
