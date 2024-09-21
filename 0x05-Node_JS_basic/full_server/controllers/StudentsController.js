import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(_req, res) {
    const path = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(path)
      .then((studentGroups) => {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200;
        let responseText = 'This is the list of our students\n';
        for (const [field, list] of Object.entries(studentGroups)) {
          responseText += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
        }
        res.setHeader('Content-Length', responseText.length);
        res.send(responseText);
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const path = process.argv.length > 2 ? process.argv[2] : '';
    if (req.params) {
      const { major } = req.params;
      if (!['CS', 'SWE'].includes(major)) {
        res.status(500).send('Major parameter must be CS or SWE');
      } else {
        readDatabase(path)
          .then((studentGroups) => {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 200;
            const responseText = `List : ${studentGroups[major].join(', ')}`;
            res.setHeader('Content-Length', responseText.length);
            res.send(responseText);
          })
          .cath((_error) => {
            res.status(500).send('Cannot load the database');
          });
      }
    }
  }
}

export default StudentsController;
module.exports = StudentsController;
