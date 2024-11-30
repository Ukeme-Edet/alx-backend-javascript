const AppController = require('../controller/AppController');
const StudentController = require('../controller/StudentController');

const mapRoutes = (app) => {
  app.get('/', AppController.getHomePage);
  app.get('/students', StudentController.getAllStudents);
  app.get('/students/:major', StudentController.getStudentByMajor);
};
module.exports = mapRoutes;
