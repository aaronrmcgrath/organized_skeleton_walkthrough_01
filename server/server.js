// SERVER: pulls in express, database, body-parser, and index.js (router)

var express = require('express');
var app = express();
var index = require('./modules/index.js');
var db = require('./modules/db.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', (process.env.PORT || 5000));

app.use('/', index);

app.listen(app.get('port'), function(){
    console.log('Listening on port: ', app.get('port'));
});

module.exports = app;
