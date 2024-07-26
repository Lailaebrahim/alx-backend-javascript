import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }
  get amount() {
    return this._amount;
  }
  get currency() {
    return this._currency;
  }
  set amount(amount ) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    else {
      this._amount = amount;
    }
  }
  set currency(currency) {
    if (typeof currency !== 'string') {
      throw new TypeError('Currency must be a string');
    }
    else {
      this._currency = currency;
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}