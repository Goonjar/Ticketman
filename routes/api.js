const express = require('express');
const router  = express.Router();
const Event = require('../models/event')

//get list of events from db
router.get('/events', function(req, res, next){
  /*Event.find({}).then(function(events){
    res.send(events);
  }); finds all events*/
  Event.geoNear(
    {type: 'Point', coordinates:[parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    {maxDistance: 100000, spherical: true}
  ).then(function(events){
    res.send(events);
  });
});

// add new event to database
router.post('/events', function(req, res, next){
  Event.create(req.body).then(function(event){
    res.send(event);
  }).catch(next);
});

//update event in database
router.put('/events/:id', function(req, res, next){
  Event.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){

  Event.findOne({_id: req.params.id}).then(function(event){

    res.send(event);

  });
  });
});

//delete even from db
router.delete('/events/:id', function(req,res, next){
  Event.findByIdAndRemove({_id: req.params.id}).then(function(event){
    res.send(event);
  });
});

module.exports = router;
