import { assert, expect } from 'chai';
import jsdom from 'jsdom';
import path from 'path';
import {
  ConverterService,
  exchangerateHostResponse,
} from '../services/ConverterService';

import Converter from '../entities/Converter';

const { JSDOM } = jsdom;

const amount = 5000;
const fromCurrency = 'USD';
const toCurrency = 'BRL';

describe('Services test', () => {
  it('Should return an object with rates property from exchange rate api', async () => {
    const response =
      await ConverterService.getExchangeRates<exchangerateHostResponse>(
        amount.toString(),
        fromCurrency,
        toCurrency
      );
    expect(response).to.be.an('object').to.have.property('rates');
  });
});

describe('Entities test', () => {
  it('Should return a string', async () => {
    const converter = new Converter(amount, fromCurrency, toCurrency);
    const response = await converter.exchange();
    expect(response).to.be.an('string').that.is.not.equal('');
  });
});

describe('DOM element test', () => {
  it('Should verify if DOM elements exist in index.html file', async () => {
    const dom = await JSDOM.fromFile(
      path.resolve(__dirname, '..', '..', 'index.html')
    );
    const { document } = dom.window;
    assert.isNotNull(
      document.querySelector('input#amount'),
      'input element for amount is missing'
    );

    assert.isNotNull(
      document.querySelector('select#from'),
      'select element to pick from currency is missing.'
    );
    assert.isNotNull(
      document.querySelector('select#to'),
      'select element to pick to currency is missing.'
    );
    assert.isNotNull(
      document.querySelector('button#convertBtn'),
      'button element to trigger conversion is missing.'
    );
    assert.isNotNull(
      document.querySelector('h2#result'),
      'h2 element to display result is missing.'
    );
  });
});
