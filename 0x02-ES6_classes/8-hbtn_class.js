export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    this._size = size;
  }

  get location() {
    return this._location;
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }
    this._location = location;
  }

  /* This defines a method using the Symbol.toPrimitive symbol.
   This method will be called when an object needs to be converted to a primitive value. */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this._size;
    if (hint === 'string') return this._location;
    return null;
  }
}
