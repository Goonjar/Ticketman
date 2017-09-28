const express = require('express');
const router  = express.Router();
const Account = require('../models/account')

//get list of accounts from db
router.get('/accounts', function(req, res, next){
  Account.find({}).then(function(accounts){
    res.send(accounts);
  });

});

// add new accounts to database
router.post('/accounts', function(req, res, next){
  Account.create(req.body).then(function(account){
    res.send(account);
  }).catch(next);
});

//update account in database
router.put('/accounts/:id', function(req, res, next){
  Account.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){

  Account.findOne({_id: req.params.id}).then(function(account){

    res.send(account);

  });
  });
});

//delete account from db
router.delete('/accounts/:id', function(req,res, next){
  Account.findByIdAndRemove({_id: req.params.id}).then(function(account){
    res.send(account);
  });
});

module.exports = router;
