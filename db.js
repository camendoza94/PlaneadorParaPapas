"use strict";
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI);

module.exports = mongoose;