var confs   = require('./confs/confs.js'),
    server  = require('./src/http.js'),
    Client = require('./src/db/schema.js').Client,
    db = confs.db;

//trigger
db.connection.on('open', function(){
  app();
});




var app = function() {
  console.log('[HTTP] server started');

  var cli = new Client({name: 'goncalo', age: 33});
  console.log(cli);

  cli.save(function(err, cli){
    if(err) console.log(err);
    else cli.talk('hello world');
  }) ;

};



