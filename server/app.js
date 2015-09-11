var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var localStrategy = require('passport-local');

var index = require('./routes/index');

app.use('/', index);

app.set('port',(process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Node working ヽ༼ຈل͜ຈ༽ﾉ on port', app.get('port'));
});

module.exports = app;