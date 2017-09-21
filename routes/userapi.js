const express = require('express');
const router  = express.Router();
const User = require('../models/user')

//get list of users from db
router.get('/users', function(req, res, next){
  User.find({}).then(function(users){
    res.send(users);
  });
});

// add new users to database
router.post('/users', function(req, res, next){
  User.create(req.body).then(function(user){
    res.send(user);
  }).catch(next);
});

//update user in database
router.put('/users/:id', function(req, res, next){
  User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){

  User.findOne({_id: req.params.id}).then(function(user){

    res.send(user);

  });
  });
});

//delete user from db
router.delete('/users/:id', function(req,res, next){
  User.findByIdAndRemove({_id: req.params.id}).then(function(user){
    res.send(user);
  });
});

module.exports = router;
