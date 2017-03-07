const mongoose = require('../db');
var Schema = mongoose.Schema;

// create a schema - obtained from https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
var userSchema = new Schema({
  name: String,
  //Me parece super como usas el required y unique. Nosotros nos embolatamos más con este tema!
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
