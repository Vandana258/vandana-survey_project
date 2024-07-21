const controller = require('../controllers/section.controller');

module.exports = app => {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get('/sections', controller.findAll);
    app.get('/section', controller.findOne);
    app.post('/section', controller.create);
    app.put('/section/:id', controller.update);
    app.delete('/section/:id', controller.remove);
}