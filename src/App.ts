import ConverterService from './services/ConverterService';

const amountInput = document.querySelector('#amount') as HTMLInputElement;
const fromSelect = document.querySelector('#from') as HTMLSelectElement;
const toSelect = document.querySelector('#to') as HTMLSelectElement;
const convertedValue = document.querySelector('#result') as HTMLSpanElement;
const convertButton = document.querySelector(
  '#convertBtn'
) as HTMLButtonElement;

let amount: string;
let fromCurrency: string;
let toCurrency: string;

convertButton?.addEventListener('click', async () => {
  amount = amountInput.value;
  fromCurrency = fromSelect.value;
  toCurrency = toSelect.value;
  const result = await ConverterService.getAmountConverted<{
    rates: { [key: string]: number };
  }>(amount, fromCurrency, toCurrency);
  convertedValue.innerText = result.rates[toCurrency].toString();
  console.log(result.rates[toCurrency]);
  console.log(amount, fromCurrency, toCurrency);
});
