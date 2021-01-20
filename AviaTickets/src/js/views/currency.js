class CurrencyUI {
  constructor() {
    this.currency = document.getElementById("currency");
  }

  get currencyVal() {
    return this.currency.value;
  }
}

const currencyUI = new CurrencyUI();

export default currencyUI;
