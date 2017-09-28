const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create account Schema
const AccountSchema = new Schema({
  userid: {
    type: String
  },
  privilege: {
    type: String
  }
});

const Account = mongoose.model('account', AccountSchema);

module.exports = Account;
