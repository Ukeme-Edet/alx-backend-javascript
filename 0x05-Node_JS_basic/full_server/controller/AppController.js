class AppController {
  static async getHomePage(req, res) {
    res.send('Hello Holberton School!');
  }
}
module.exports = AppController;
