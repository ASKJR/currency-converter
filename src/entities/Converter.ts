import {
  ConverterService,
  exchangerateHostResponse,
} from '../services/ConverterService';
import { Locale } from '../util/Const';

export default class Converter {
  private amount;

  private fromCurrency;

  private toCurrency;

  public constructor(amount: number, fromCurrency: string, toCurrency: string) {
    this.amount = amount;
    this.fromCurrency = fromCurrency;
    this.toCurrency = toCurrency;
  }

  public async exchange(): Promise<string> {
    const response =
      await ConverterService.getExchangeRates<exchangerateHostResponse>(
        this.amount.toString(),
        this.fromCurrency,
        this.toCurrency
      );
    this.amount = response.rates[this.toCurrency];
    return this.formatedCurrency();
  }

  private formatedCurrency() {
    return new Intl.NumberFormat(
      Locale[this.toCurrency as keyof typeof Locale],
      {
        style: 'currency',
        currency: this.toCurrency,
      }
    ).format(this.amount);
  }
}
