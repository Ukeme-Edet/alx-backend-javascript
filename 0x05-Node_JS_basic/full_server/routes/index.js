import AppController from '../controller/AppController';
import StudentController from '../controller/StudentController';

const mapRoutes = (app) => {
  app.get('/', AppController.getHomePage);
  app.get('/students', StudentController.getAllStudents);
  app.get('/students/:major', StudentController.getStudentByMajor);
};
export default mapRoutes;
