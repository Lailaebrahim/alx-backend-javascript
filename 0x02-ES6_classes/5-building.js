export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    /*This conditional statement checks if the current instance is not of 
    the Building class (i.e., it is an instance of a subclass)
    and if the subclass does not have an evacuationWarningMessage property or method
    it throws an error, enforcing that any subclass of Building must override 
    the evacuationWarningMessage property or method.
     */
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
  get sqft() {
    return this._sqft;
  }
  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = this.sqft;
  }
}
