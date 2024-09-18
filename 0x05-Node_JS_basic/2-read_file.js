function countStudents(path) {
    try {
        const fs = require('fs');
        const data = fs.readFileSync(path, 'utf-8');
        data = data.split('\n');
        console.log(data)
    }
    catch (error) {
        throw new Error('Cannot load the database');
    }
};


module.exports = countStudents;
