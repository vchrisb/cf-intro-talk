var express = require('express');
var morgan = require('morgan');
var serveStatic = require('serve-static');
var app = express();
var port = process.env.PORT || 3000;

app.use(morgan('combined'));
app.use('/', serveStatic(__dirname));
app.listen(port, function() {
  console.log('Server started on ' + port);
});