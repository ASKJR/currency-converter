import Converter from './entities/Converter';

const amountInput = document.querySelector('#amount') as HTMLInputElement;
const fromSelect = document.querySelector('#from') as HTMLSelectElement;
const toSelect = document.querySelector('#to') as HTMLSelectElement;
const resultSpan = document.querySelector('#result') as HTMLSpanElement;
const convertButton = document.querySelector(
  '#convertBtn'
) as HTMLButtonElement;

convertButton?.addEventListener('click', async () => {
  const amount = +amountInput.value;
  const fromCurrency = fromSelect.value;
  const toCurrency = toSelect.value;
  const converter = new Converter(amount, fromCurrency, toCurrency);

  resultSpan.innerText = await converter.exchange();
});
