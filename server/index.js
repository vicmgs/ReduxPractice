var express = require('express');
var router = require('express').Router();

var server = express();

server.use(express.static(__dirname + '/../client'));
server.use(router);

server.listen(3000, function () {
  console.log('Server listening');
});

router.get('/', function(req, res) {
  res.sendFile('../client/index.html');
});
