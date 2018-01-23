var express = require('express');
var app = express();

    app.get('/', function(require, response) {
        response.send('Hello world!!!');
    });

    app.listen(3000, function() {
        console.log('listen port 3000');
    });