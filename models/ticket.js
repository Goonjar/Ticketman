const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create ticket Schema
const TicketSchema = new Schema({
  section: {
    type: String,
    required: [true, 'section is required']
  },
  seat: {
    type: String
  }

});

const Ticket = mongoose.model('ticket', TicketSchema);

module.exports = Ticket;
