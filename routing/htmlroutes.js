var path = require('path');

module.exports = function (app) {

    app.get('/make', function (req, res) {
        //This will be display the survey page
        res.sendFile(path.join(__dirname + './../public/make.html'));
    })

    app.get('/view', function (req, res) {
        //This will be display the survey page
        res.sendFile(path.join(__dirname + './../public/view.html'));
    })

    app.use(function (req, res) {
        //This will be display the survey page
        res.sendFile(path.join(__dirname + './../public/home.html'));
    })

}