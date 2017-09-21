const express = require('express');
const router  = express.Router();
const Ticket = require('../models/ticket')

//get list of tickets from db
router.get('/tickets', function(req, res, next){
  Ticket.find({}).then(function(tickets){
    res.send(tickets);
  });
});

// add new tickets to database
router.post('/tickets', function(req, res, next){
  Ticket.create(req.body).then(function(ticket){
    res.send(ticket);
  }).catch(next);
});

//update ticket in database
router.put('/tickets/:id', function(req, res, next){
  Ticket.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){

  Ticket.findOne({_id: req.params.id}).then(function(ticket){

    res.send(ticket);

  });
  });
});

//delete ticket from db
router.delete('/tickets/:id', function(req,res, next){
  Ticket.findByIdAndRemove({_id: req.params.id}).then(function(ticket){
    res.send(ticket);
  });
});

module.exports = router;
