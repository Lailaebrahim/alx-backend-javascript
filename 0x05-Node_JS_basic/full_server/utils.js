import fs from 'fs';

const readDatabase = function (path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
    } else {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          reject(new Error(err));
        } else if (!data) {
          reject(new Error('Cannot load the database'));
        } else {
          const fileLines = data.trim().split('\n');
          const studentGroups = {};
          for (const [index, line] of Object.entries(fileLines.slice(1))) {
            if (Object.prototype.hasOwnProperty.call(fileLines, index)) {
              const [stdName, , field] = line.split(',');
              if (!Object.keys(studentGroups).includes(field)) {
                studentGroups[field] = [];
              }
              studentGroups[field].push(stdName);
            }
          }
          resolve(studentGroups);
        }
      });
    }
  });
};

module.exports = readDatabase;
