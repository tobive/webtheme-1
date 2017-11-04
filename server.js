var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 8000;

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(PORT, function() {
  console.log("Express listening on port ", PORT);
});
