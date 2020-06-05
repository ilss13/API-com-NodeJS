module.exports = app => {
    const controller = require('../controllers/customers')();

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/customers', function (req, res, next) {
        controller.listCustomers(req,res);
    });



}
