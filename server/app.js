'use strict';
const express = require('express'),
      path    = require('path'),
      app     = express(),
      PORT    = 3000,
      IP      = '127.0.0.1';

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log('SERVER HAS STARTED!');
});