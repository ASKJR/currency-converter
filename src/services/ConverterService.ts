import baseUrl from '../util/Const';

export default class ConverterService {
  static async getAmountConverted<T>(
    amount: string,
    fromCurrency: string,
    toCurrency: string
  ): Promise<T> {
    try {
      const url = `${baseUrl}?amount=${amount}&base=${fromCurrency}&symbols=${toCurrency}`;
      const response = await fetch(url);
      return response.json() as Promise<T>;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
