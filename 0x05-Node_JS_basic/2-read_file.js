const countStudents = (path) => {
    const fs = require('fs');
    if (!fs.existsSync(path)) {
        throw new Error('Cannot load the database');
    }
    if (!fs.statSync(path).isFile()) {
        throw new Error('Cannot load the database');
    }
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\r\n').slice(1);
    let numStds = 0;
    let fields = {};
    if (lines.length === 0) {
        throw new Error('Cannot load the database');
    }
    for (let line of lines) {
        const std = line.split(',');
        if (fields[std[3]]) {
            fields[std[3]].push(std[0]);
        } else {
            fields[std[3]] = [std[0]];
        }
        numStds += 1;
    }
    console.log(`Number of students: ${numStds}`);
    for (let field in fields) {
        if (field) {
            const list = fields[field];
            console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
        }
    }
};

module.exports = countStudents;