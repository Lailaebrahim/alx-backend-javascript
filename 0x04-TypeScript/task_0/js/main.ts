interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const std1: Student = { firstName: 'John', lastName: 'Doe', age: 21, location: 'USA' };
const std2: Student = { firstName: 'Jane', lastName: 'Doe', age: 20, location: 'UK' };

const studentsList: Array<Student> = [std1, std2];

const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);
const headrow = document.createElement('tr');
thead.appendChild(headrow);

const td1 = document.createElement('td');
td1.textContent = 'First Name';
headrow.appendChild(td1);

const td2 = document.createElement('td');
td2.textContent = 'Location';
headrow.appendChild(td2);

const tbody = document.createElement('tbody');
table.appendChild(tbody);

for (const std of studentsList) {
  const tr = document.createElement('tr');
  tbody.appendChild(tr);
  tr.innerHTML = `<td>${std.firstName}</td><td>${std.location}</td>`;
}
