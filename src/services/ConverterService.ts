import axios from 'axios';
import { BASE_URL as baseUrl } from '../util/Const';

export interface exchangerateHostResponse {
  rates: { [key: string]: number };
}

export class ConverterService {
  static async getExchangeRates<T>(
    amount: string,
    fromCurrency: string,
    toCurrency: string
  ): Promise<T> {
    try {
      const url = `${baseUrl}?amount=${amount}&base=${fromCurrency}&symbols=${toCurrency}`;
      const response = await axios.get<T>(url);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
