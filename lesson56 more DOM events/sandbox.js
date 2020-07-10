const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
  console.log('bruh');
})

const box = document.querySelector('.box');

box.addEventListener('mousemove', (e) => {
  console.log(box);
  box.textContent = `X: ${e.offsetX} Y: ${e.offsetY}`;
  if (e.offsetX < 50) {
    box.style.color = "green";
  }
  else {
    box.style.color = "black";
  }

});

document.addEventListener('wheel', (r) => {
  console.log(r.pageY);
})