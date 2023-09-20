const mongoose = require('mongoose');

//user schema
//firstName
//email
//username
//password

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [
      /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})$/, //regex expression check the format of the email. Makes sures that it has an @ and .com or .org
      'Please fill a valid email address',
    ],
    trim: true, //remove any white spaces
    lowercase: true, //convert to lower case
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
