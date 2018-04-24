var tables = require('../app/data/tables.js');
var wait = require('../app/data/wait.js');

var path = require('path');

module.exports = function (app) {

    app.get('/app/tables', function (req, res) {
        console.log(tables);
    })

    app.get('/app/wait', function (req, res) {
        console.log(wait);
    })

    app.post('/app/wait', function (req, res) {

    })

    app.post('/app/tables', function (req, res) {

    })

    app.post('/app/clear', function(req, res) {

    })

}