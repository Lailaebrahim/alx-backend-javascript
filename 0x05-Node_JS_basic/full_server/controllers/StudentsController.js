const readDatabase = require('./utils');

class StudentsController {
    static getAllStudents(req, res) {
        const path = process.argv.length > 2 ? process.argv[2] : '';
        readDatabase(path)
            .then((studentGroups) => {
                res.setHeader('Content-Type', 'text/plain');
                res.setHeader('Content-Length', responseText.length);
                res.statusCode = 200;
                let responseText = 'This is the list of our students\n';
                for (field in studentGroups) {
                    responseText += `Number of students in ${field}: ${studentGroups[field].length}. List: ${studentGroups[field].join(', ')}\n`;
                }
                res.send(responseText);
            })
            .catch((err) => {
                res.status(500).send('Cannot load the database')
            })
    };

    static getAllStudentsByMajor(req, res) {
        const path = process.argv.length > 2 ? process.argv[2] : '';
        if (req.params) {
            const major = req.params.major;
            if (!['CS', 'SWE'].includes(major)) {
                res.status(500).send('Major parameter must be CS or SWE');
            }
            else {
                readDatabase(path)
                    .then((studentGroups) => {
                        res.setHeader('Content-Type', 'text/plain');
                        res.setHeader('Content-Length', responseText.length);
                        res.statusCode = 200;
                        let responseText = `List : ${studentGroups[major].join(', ')}`;
                        res.send(responseText);
                    })
                    .cath((error) => {
                        res.status(500).send('Cannot load the database');
                    })
            }
        }
    };
};

export default StudentsController;
module.exports = StudentsController;