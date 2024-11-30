const http = require('http');
const fs = require('fs').promises;

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    fs.readFile(process.argv[2], 'utf8')
      .then((data) => {
        const students = data
          .trim()
          .split('\n')
          .slice(1)
          .map((line) => line.split(','))
          .filter((student) => student.length === 4);
        res.write(`Number of students: ${students.length}\n`);
        const fields = students.reduce((acc, student) => {
          const field = student[3];
          if (!acc[field]) acc[field] = [];
          acc[field].push(student[0]);
          return acc;
        }, {});
        for (const [field, names] of Object.entries(fields)) {
          res.write(
            `Number of students in ${field}: ${
              names.length
            }. List: ${names.join(', ')}\n`,
          );
        }
      })
      .then(() => {
        res.end();
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});
app.listen(1245);
module.exports = app;
