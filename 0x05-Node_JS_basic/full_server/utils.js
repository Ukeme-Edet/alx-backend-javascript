const fs = require('fs').promises;

const readDatabase = async (path) => fs
  .readFile(path, 'utf-8')
  .then((data) => {
    const students = data
      .trim()
      .split('\n')
      .slice(1)
      .map((line) => line.split(','))
      .filter((student) => student.length === 4);
    const fields = students.reduce((acc, student) => {
      const field = student[3];
      if (!acc[field]) acc[field] = [];
      acc[field].push(student[0]);
      return acc;
    }, {});
    return fields;
  })
  .catch(() => {
    throw new Error('Cannot load the database');
  });
export default readDatabase;
