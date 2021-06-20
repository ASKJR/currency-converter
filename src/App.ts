const amountInput = document.querySelector('#amount') as HTMLInputElement;
const fromSelect = document.querySelector('#from') as HTMLSelectElement;
const toSelect = document.querySelector('#to') as HTMLSelectElement;
const convertButton = document.querySelector(
  '#convertBtn'
) as HTMLButtonElement;

let amount: number;
let fromCurrency: string;
let toCurrency: string;

convertButton?.addEventListener('click', () => {
  amount = +amountInput.value;
  fromCurrency = fromSelect.value;
  toCurrency = toSelect.value;

  console.log(amount, fromCurrency, toCurrency);
});
