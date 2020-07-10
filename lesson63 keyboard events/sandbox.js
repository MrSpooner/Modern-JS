const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const pattern = /^[a-zA-Z]{6,12}$/
form.addEventListener('submit', e => {
  e.preventDefault();
  const username = form.username.value;
  if (pattern.test(username)) {
    feedback.textContent = 'Имя принято!';
  } else {
    feedback.textContent = 'Имя должно иметь только символы от a до z и всего от 6 до 12 символов';
  }
})

form.username.addEventListener('keyup', e => {
  if (pattern.test(e.target.value)) {
    form.username.setAttribute('class', 'success')
  } else {
    form.username.setAttribute('class', 'error')
  }
})