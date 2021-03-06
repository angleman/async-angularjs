/**
 * Module dependencies.
 */

var express = require('express')
    , http = require('http')
    , path = require('path');

var app = express();

app.configure(function () {

    app.use(express.static(path.join(__dirname, 'public')));
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
