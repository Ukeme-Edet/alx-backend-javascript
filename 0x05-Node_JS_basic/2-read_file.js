const fs = require('fs');

const countStudents = (pth) => {
  try {
    const data = fs.readFileSync(pth, 'utf8');
    const students = data
      .trim()
      .split('\n')
      .slice(1)
      .map((line) => line.split(','));
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
