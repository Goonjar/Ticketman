const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create event Schema
const VenueSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  address: {
    type: String
  }

});

const Venue = mongoose.model('venue', VenueSchema);

module.exports = Venue;
