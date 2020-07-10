// const button = document.querySelector('button');
// button.addEventListener('click', () => {console.log('you clicked me')})
// ul.remove();
const ul = document.querySelector('ul');
const button = document.querySelector('button')
button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'smth new to do'
  ul.append(li);
})

const items = document.querySelectorAll('li')
items.forEach(item => {
  item.addEventListener('click', e => {
    // console.log(e.target)
    // console.log(item)
    // e.target.style.textDecoration = 'line-through';
    e.target.remove();
  })
})