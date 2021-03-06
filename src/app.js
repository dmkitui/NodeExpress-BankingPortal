const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res){
  res.render('index', {title: 'Index'});
})

app.listen(3000, function() {
  console.log("PS Project Running on port 3000!");
})