const express = require('express');
const fs = require('fs');

const app = express();
const Port = 1245;
const dbPath = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (Path) => new Promise((resolve, reject) => {
  if (!Path) {
    reject(new Error('Cannot load the database'));
  }
  if (Path) {
    fs.readFile(Path, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const rePortParts = [];
        const lines = data.toString('utf-8').trim().split('\n');
        const fieldStds = {};
        const fields = lines[0].split(',');
        const studentPropNames = fields.slice(
          0,
          fields.length - 1,
        );

        for (const line of lines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord.slice(
            0,
            studentRecord.length - 1,
          );
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(fieldStds).includes(field)) {
            fieldStds[field] = [];
          }
          const studentEntries = studentPropNames.map((propName, idx) => [
            propName,
            studentPropValues[idx],
          ]);
          fieldStds[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(fieldStds).reduce(
          (pre, cur) => (pre || []).length + cur.length,
        );
        rePortParts.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(fieldStds)) {
          rePortParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(rePortParts.join('\n'));
      }
    });
  }
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];

  countStudents(dbPath)
    .then((rePort) => {
      responseParts.push(rePort);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    })
    .catch((err) => {
      responseParts.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
});

app.listen(Port, () => {
  console.log(`Server listening on Port ${Port}`);
});

module.exPorts = app;