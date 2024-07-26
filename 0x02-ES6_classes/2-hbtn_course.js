export default class HolbertonCourse {
  /**
   * Represents a Holberton course.
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course in weeks.
   * @param {Array} students - The list of students enrolled in the course.
   */
  constructor(name, length, students) {
    // Type checking in the constructor
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // ... rest of the class remains the same ...

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
   * @throws {TypeError} If the students is not an array of strings.
   */
  set students(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    } else {
      this._students = students;
    }
  }
}
