const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create transaction Schema
const TransactionSchema = new Schema({
  userid: {
    type: String
  },
  accountid: {
    type: String
  },
  price: {
    type: Number
  },
  ticketids: {
    type: [String]
  },
  eventid: {
    type: String
  },
  transactiondate: {
    type: Date
  }
});

const Transaction = mongoose.model('transaction', TransactionSchema);

module.exports = Transaction;
