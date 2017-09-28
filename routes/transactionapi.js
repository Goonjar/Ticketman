const express = require('express');
const router  = express.Router();
const Transaction = require('../models/transaction')

//get list of transactions from db
router.get('/transactions', function(req, res, next){
  Transaction.find({}).then(function(transactions){
    res.send(transactions);
  });

});

// add new transactions to database
router.post('/transactions', function(req, res, next){
  Transaction.create(req.body).then(function(transaction){
    res.send(transaction);
  }).catch(next);
});

//update transaction in database
router.put('/transactions/:id', function(req, res, next){
  Transaction.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){

  Transaction.findOne({_id: req.params.id}).then(function(transaction){

    res.send(transaction);

  });
  });
});

//delete transaction from db
router.delete('/transactions/:id', function(req,res, next){
  Transaction.findByIdAndRemove({_id: req.params.id}).then(function(transaction){
    res.send(transaction);
  });
});

module.exports = router;
