import Converter from './entities/Converter';

export default class App {
  private amountInput;

  private fromSelect;

  private toSelect;

  private resultSpan;

  private convertButton;

  public constructor() {
    this.amountInput = document.querySelector('#amount') as HTMLInputElement;
    this.fromSelect = document.querySelector('#from') as HTMLSelectElement;
    this.toSelect = document.querySelector('#to') as HTMLSelectElement;
    this.resultSpan = document.querySelector('#result') as HTMLSpanElement;
    this.convertButton = document.querySelector(
      '#convertBtn'
    ) as HTMLButtonElement;
  }

  public start(): void {
    this.convertButton?.addEventListener('click', async () => this.convert());
  }

  private async convert() {
    const converter = new Converter(
      +this.amountInput.value,
      this.fromSelect.value,
      this.toSelect.value
    );

    this.resultSpan.innerText = await converter.exchange();
  }
}
