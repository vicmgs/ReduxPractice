var express = require('express');
var router = require('express').Router();
var path = require('path');

var server = express();

server.use(express.static(__dirname + '/../client'));
server.use(router);

server.listen(3000, function () {
  console.log('Server listening');
});

router.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/index.html'));
});
