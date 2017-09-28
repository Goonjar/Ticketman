//nodemon index, run mongodb "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"
/*
/var/www/TicketMan
npm run depoly
cd /var/www/TicketMan
npm install
nodeapp.js

*/
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ticketgo');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());


// initialize routes
app.use('/api', require('./routes/api'));
//new route
app.use('/venueapi', require('./routes/venueapi'));
app.use('/ticketapi', require('./routes/ticketapi'));
app.use('/userapi', require('./routes/userapi'));
app.use('/accountapi', require('./routes/accountapi'));
app.use('/transactionapi', require('./routes/transactionapi'));


//Error handling
app.use(function(err, req, res, next){
  //console.log(err);
  res.status(422).send({error: err.message});
});

//listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('now listening for requests');
});
