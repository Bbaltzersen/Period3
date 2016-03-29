/**
 * Created by bbalt on 29/03/2016.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/restapiDemDB');

var api = require('./app/models/api');
var port = process.env.PORT || 8080;

var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    next();
});


router.get('/', function (req, res) {
});

//Is what's going to happen when anything get into the /emplyee path.
router.post('/employee', function (req, res, next) {
    
}

router.route('/employee')
    .post(function (req, res) {
        var employee = new api();
        employee.name = req.body.name;

        employee.save(function (err) {
            if (err)
                res.send(err);
        });
    })
    .get(function (req, res) {
        api.find(function (err, employee) {
            if (err)
                res.send(err);

            res.json(employee);
        });
    });


app.use('/api', router);
app.listen(port);