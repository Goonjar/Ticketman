const express = require('express');
const router  = express.Router();
const Venue = require('../models/venue')

//get list of venues from db
router.get('/venue', function(req, res, next){
  Venue.find({}).then(function(venues){
    res.send(venues);
  });

});

// add new venues to database
router.post('/venues', function(req, res, next){
  Venue.create(req.body).then(function(venue){
    res.send(venue);
  }).catch(next);
});

//update venue in database
router.put('/venues/:id', function(req, res, next){
  Venue.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){

  Venue.findOne({_id: req.params.id}).then(function(venue){

    res.send(venue);

  });
  });
});

//delete venue from db
router.delete('/venues/:id', function(req,res, next){
  Venue.findByIdAndRemove({_id: req.params.id}).then(function(venue){
    res.send(venue);
  });
});

module.exports = router;
