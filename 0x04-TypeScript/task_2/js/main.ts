interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot have a break';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }

}

function createEmployee(salary: number | string) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

function isDirector(employee: any) {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher) {
  if (employee instanceof Director) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// The following code defines a type alias called "Subjects" which can only have two possible values: "Math" or "History".
type Subjects = 'Math' | 'History';

// The function "teachClass" takes a parameter called "todayClass" which is of type "Subjects".
// It checks the value of "todayClass" and if it is equal to "Math", it logs the message "Teaching Math" to the console.
// Otherwise, it logs the message "Teaching History" to the console.
function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') {
    console.log('Teaching Math');
  } else {
    console.log('Teaching History');
  }
}

