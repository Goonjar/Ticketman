const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create geolocation schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

// create event Schema
const EventSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  location: {
    type: String
  },
  venueid: {
    type: String
  },

  eventdate: {
    type: Date
  },

  geometry: GeoSchema
});

const Event = mongoose.model('event', EventSchema);

module.exports = Event;
