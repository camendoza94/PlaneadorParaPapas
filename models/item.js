"use strict";
const mongoose = require('../db');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  name: {type: String, required: true},
  dueDay: {type: Date, required: true},
  category: String,
  type: String,
  reminderDate: Date,
  amount: Number,
  creator: { type: ObjectID, ref: 'User' }
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;