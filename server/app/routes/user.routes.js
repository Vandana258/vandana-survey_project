const controller = require('../controllers/user.controller');

module.exports = app => {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get('/getUserData/:userId', controller.getUserData);
    app.post('/login', controller.login);
}