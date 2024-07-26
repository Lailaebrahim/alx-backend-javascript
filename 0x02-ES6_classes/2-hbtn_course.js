class HolbertonCourse {
  /**
   * Represents a Holberton course.
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course in weeks.
   * @param {Array} students - The list of students enrolled in the course.
   */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Get the name of the course.
   * @returns {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Get the length of the course.
   * @returns {number} The length of the course in weeks.
   */
  get length() {
    return this._length;
  }

  /**
   * Get the list of students enrolled in the course.
   * @returns {Array} The list of students.
   */
  get students() {
    return this._students;
  }

  /**
   * Set the name of the course.
   * @param {string} name - The name of the course.
   * @throws {TypeError} If the name is not a string.
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }
  }

  /**
   * Set the length of the course.
   * @param {number} length - The length of the course in weeks.
   * @throws {TypeError} If the length is not a number.
   */
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }
  }

  /**
   * Set the list of students enrolled in the course.
   * @param {Array} students - The list of students.
   * @throws {TypeError} If the students is not an array.
   */
  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    } else {
      this._students = students;
    }
  }
}
