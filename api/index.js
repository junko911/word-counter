var express = require('express');
const app = express();
const { count } = require('./count') 

app.get('/', function(req, res) {
  const result = count("hello world")
  res.send(result)
});

app.listen(3000);
