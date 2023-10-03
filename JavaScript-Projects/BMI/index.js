const form = document.querySelector('form');
// this will give us empty values
// const height =  parseInt(document.querySelector('height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // display the result
    if (bmi <= 18.6) {
      results.innerHTML = `<span> ${bmi} you are under weight</span>`;
    } else if (bmi > 24.9) {
      results.innerHTML = `<span> ${bmi} you are over weight</span>`;
    } else {
      results.innerHTML = `<span> ${bmi} you are normal weight</span>`;
    }
  }
});
