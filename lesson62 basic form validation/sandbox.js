const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
  e.preventDefault();
  const username = form.username.value;
  const pattern = /^[a-zA-Z]{6,12}$/
  if (pattern.test(username)) {
    feedback.textContent = 'Имя принято!';
  } else {
    feedback.textContent = 'Имя должно иметь только символы от a до z и всего от 6 до 12 символов';
  }
})

