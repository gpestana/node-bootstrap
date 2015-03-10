var mongoose  = require('../../confs/confs.js').mongoose;
    db        = require('../../confs/confs.js').db;

//client
var clientSchema = mongoose.Schema({
  id:   mongoose.Schema.Types.ObjectId,
  name: String,
  age:  { type: Number, min: 18, max: 85 }
});

clientSchema.methods.talk = function(w) {
  console.log(w);
};


var Client = mongoose.model('Client', clientSchema);

exports.Client = Client;
