window.addEventListener('load', function() {
  let form = document.getElementById('form');
  form.addEventListener('submit', submitForm)
});

function submitForm(e) {
  e.preventDefault();
  let input = document.getElementById('input').value;
  let sol = document.getElementById('solution');
  sol.innerText = "";
  if (checkPrime(input)) {
    let primeText = document.createTextNode(input + " is a prime number.");
    sol.appendChild(primeText);
  } else {
    let notPrimeText = document.createTextNode(input + " is not prime number.");
    sol.appendChild(notPrimeText);
  }
}

function checkPrime(number) {
  //I would use this, but divided by 2 is more apparent
  //let roundedRoot = Math.ceil(Math.sqrt(number));
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}