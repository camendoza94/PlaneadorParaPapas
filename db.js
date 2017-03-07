var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
//Es buena práctica que uses una variable de sistema para poder cambiarlo y adaptarlo según tus necesidades
mongoose.connect('mongodb://camendoza94:Web-20171@ds119020.mlab.com:19020/heroku_5skczfp8'); //TO_DO

module.exports = mongoose;
