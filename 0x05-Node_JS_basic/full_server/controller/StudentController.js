import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((students) => {
        res.write('This is the list of our students\n');
        for (const [field, names] of Object.entries(students).sort(
          (a, b) => a[0].localeCompare(b[0]),
        )) {
          res.write(
            `Number of students in ${field}: ${
              names.length
            }. List: ${names.join(', ')}\n`,
          );
        }
        res.end();
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static async getStudentByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) res.status(500).send('Major parameter must be CS or SWE');
    readDatabase(process.argv[2])
      .then((students) => {
        res.write(`List: ${students[major].join(', ')}\n`);
        res.end();
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}
export default StudentsController;
