/**
 * Represents a Currency object.
 */
export default class Currency {
  /**
   * Creates a new Currency instance.
   * @param {string} code - The currency code.
   * @param {string} name - The currency name.
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
   * Gets the currency code.
   * @returns {string} The currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * Gets the currency name.
   * @returns {string} The currency name.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the currency code.
   * @param {string} value - The new currency code.
   * @throws {TypeError} If the value is not a string.
   */
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError("Code must be a string");
    } else {
      this._code = value;
    }
  }

  /**
   * Sets the currency name.
   * @param {string} name - The new currency name.
   * @throws {TypeError} If the name is not a string.
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError("Name must be a string");
    } else {
      this._name = name;
    }
  }
  
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

}
