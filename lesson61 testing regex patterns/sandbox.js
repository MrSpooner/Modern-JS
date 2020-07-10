const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
  e.preventDefault();
  // console.log(username.value);
  console.log(form.username.value);
})

const username = 'shaundfg';
const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);


// // if (result) {
// //   console.log('epic!');
// // }
// // else {
// //   console.log('bruh');
// // }

let result = username.search(pattern);
console.log(result);