const mongoose = require('mongoose');

//user schema
//firstName
//email
//username
//password

const logSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  anxietyLevel: {
    type: String,
    required: true,
  },
  log: {
    type: String,
  },
});

const logModel = mongoose.model('log', logSchema);
module.exports = logModel;
