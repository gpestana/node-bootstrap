var mongoose    = require('mongoose'),
    express     = require('express'),
    http        = require('http'),
    bodyParser  = require('body-parser');

var dbURI = 'mongodb://admin:admin@ds061548.mongolab.com:61548/logisthica-mvp';


//DB
mongoose.connection.on('connecting', function(){
  console.log("[DB] DB connecting...");
});
mongoose.connection.on('open', function(){
  console.log("[DB] DB ready");
});
mongoose.connection.on('error', function(){
  console.log("[DB] error");
});

var db = mongoose.connect(dbURI);


//http server
server = express();
server.listen(process.env.PORT || 3030);
server.use(bodyParser.json());
server.use(express.static(__dirname + './../public'))

//various
var safeExit = function() {
  db.close(function(){
    console.log("[DB] closed safely");
  });
};

//safe exit method
process.on('SIGNT', safeExit).on('SIGTERM', safeExit);


exports.mongoose = mongoose;
exports.db = db;
exports.server = server;

