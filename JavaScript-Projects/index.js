const buttons = document.querySelectorAll('.btn');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target == yellow) {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target == green) {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target == red) {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target == black) {
      body.style.backgroundColor = e.target.id;
    }
  });
});
