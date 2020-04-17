const basicPrice = document.querySelector('.card__basic > .card__price');
const professionalPrice = document.querySelector('.card__professional > .card__price');
const masterPrice = document.querySelector('.card__master > .card__price');

const priceSwitch = document.querySelector('.switch');

priceSwitch.addEventListener('change', e => {
  if(e.target.checked) {
    basicPrice.innerHTML = '<span class="dollar">&dollar;</span>199.99';
    professionalPrice.innerHTML = '<span class="dollar">&dollar;</span>249.99';
    masterPrice.innerHTML = '<span class="dollar">&dollar;</span>399.99';
  } else {
    basicPrice.innerHTML = '<span class="dollar">&dollar;</span>19.99';
    professionalPrice.innerHTML = '<span class="dollar">&dollar;</span>24.99';
    masterPrice.innerHTML = '<span class="dollar">&dollar;</span>39.99';
  }
})

console.log(basicPrice.innerText);
console.log(professionalPrice.innerText);
console.log(masterPrice.innerText);
