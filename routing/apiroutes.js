var tables = require('../app/data/tables.js');
var wait = require('../app/data/wait.js');

var path = require('path');

module.exports = function (app) {

    app.get('/app/tables', function (req, res) {
        console.log(req.body);
        tables.push(req.body);
        res.end();
    })

    app.get('/app/wait', function (req, res) {
        console.log(req.body);
        wait.push(req.body);
        res.end();
    })

    app.post('/app/wait', function (req, res) {

    })

    app.post('/app/tables', function (req, res) {

    })

    app.post('/app/clear', function(req, res) {

    })

}