import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const Constructor = Object.getPrototypeOf(this).constructor[Symbol.species] || this.constructor;
    return new Constructor();
  }

  static get [Symbol.species]() {
    return Car;
  }
}
