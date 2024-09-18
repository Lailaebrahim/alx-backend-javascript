function countStudents(path) {
    try {
        const fs = require('fs');
        const data = fs.readFileSync(path, 'utf-8');
        const lines = data.trim().split('\r\n').slice(1);
        if (lines.length === 0) {
            throw new Error('Cannot load the database');
        }
        let numStds = 0;
        let fields = {};
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
    }
    catch (error) {
        throw new Error('Cannot load the database');
    }
};


module.exports = countStudents;
