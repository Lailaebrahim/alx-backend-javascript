const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileContent = fs.readFileSync(path, 'utf-8');
  const lines = fileContent.trim().split('\n');

  if (lines.length <= 1) {
    throw new Error('Cannot load the database');
  }

  const headerFields = lines[0].split(',');
  const fieldIndex = headerFields.length - 1;
  const nameIndex = headerFields.findIndex(field => field.toLowerCase() === 'firstname');

  const studentGroups = {};

  for (const line of lines.slice(1)) {
    const student = line.split(',');
    const field = student[fieldIndex].trim();
    const name = student[nameIndex].trim();

    if (!studentGroups[field]) {
      studentGroups[field] = [];
    }
    studentGroups[field].push(name);
  }

  const totalStudents = Object.values(studentGroups).reduce((sum, group) => sum + group.length, 0);
  console.log(`Number of students: ${totalStudents}`);

  for (const [field, students] of Object.entries(studentGroups)) {
    console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
  }
};

module.exports = countStudents;