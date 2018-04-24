var tables = require('../app/data/tables.js');
var wait = require('../app/data/wait.js');
console.log(tables);
console.log(wait);
var path = require('path');

module.exports = function (app) {

    app.get('/app/tables', function (req, res) {
        console.log(req.body);
        
        res.json(tables);
    })

    app.get('/app/wait', function (req, res) {
        console.log(req.body);
        res.json(wait);
    })


    app.post('/app/tables', function (req, res) {
        if(tables.length < 5){
            tables.push(req.body);
            res.json(true);
        } else {
            wait.push(req.body);
            res.json(true);
        }
        
    })

    app.post('/app/clear', function(req, res) {
        tables = [];
        wait = [];

        console.log(tables);
    })

}