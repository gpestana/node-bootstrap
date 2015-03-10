var server = require('./../confs/confs.js').server;

server.get('/', function(req, res){
  res.sendfile('public/index.html')
});



