"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import isNumeric from './isNumeric';

var app = (0, _express2.default)();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    var result = 'ok';
    /*    if (!isNumeric(req.query.a) && !isNumeric(req.query.b)) {
            result = '0';
        } else if (isNumeric(req.query.a) && !isNumeric(req.query.b)) {
            result = req.query.a;
        } else if (!isNumeric(req.query.a) && isNumeric(req.query.b)) {
            result = req.query.b;
        } else if (isNumeric(req.query.a) && isNumeric(req.query.b)) {
            result = String(parseFloat(req.query.a) + parseFloat(req.query.b));
        }
        res.send(`${req.query.a ? req.query.a : 0} + ${req.query.b ? req.query.b : 0} = ${result}`);
    */
    res.send("Test: " + result);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});