const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create user Schema
const UserSchema = new Schema({
  firstname: {
    type: String,
    required: [true, 'section is required']
  },
  lastname: {
    type: String
  },
  username: {
    type: String
  },
  email: {
    type: String
  },
  birthday: {
    type: Date
  }

});

const User = mongoose.model('user', UserSchema);

module.exports = User;
