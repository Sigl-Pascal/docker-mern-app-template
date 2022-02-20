const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
})

const db = 'mongodb://mongo:27017';
mongoose.connect(db)
  .then(() => {console.log('MongoDB connected...')})
  .catch(err => console.log(err));

app.listen(5000)