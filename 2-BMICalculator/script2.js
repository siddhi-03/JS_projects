const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please enter valid value of height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please enter valid value of weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let sen;
    if (bmi < 18.6) {
      sen = 'You are underweight :|';
    } else if (bmi < 24.9) {
      sen = 'You are in normal range ;)';
    } else {
      sen = 'You are overweight bro :(';
    }
    results.innerHTML = `<span>${bmi} ${sen}</span>`;
  }
});
