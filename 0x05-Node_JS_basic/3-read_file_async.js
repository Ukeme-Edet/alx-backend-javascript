const fs = require('fs').promises;

async function countStudents(pth) {
  return fs
    .readFile(pth, 'utf8')
    .then((data) => {
      const students = data
        .trim()
        .split('\n')
        .slice(1)
        .map((line) => line.split(','))
        .filter((student) => student.length === 4);
      console.log(`Number of students: ${students.length}`);
      const fields = students.reduce((acc, student) => {
        const field = student[3];
        if (!acc[field]) acc[field] = [];
        acc[field].push(student[0]);
        return acc;
      }, {});
      for (const [field, names] of Object.entries(fields)) {
        console.log(
          `Number of students in ${field}: ${
            names.length
          }. List: ${names.join(', ')}`,
        );
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}
module.exports = countStudents;
