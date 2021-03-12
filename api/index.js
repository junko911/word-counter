var express = require('express');
const app = express();
const { count } = require('./count') 
const { fetchUrlContent } = require('./fetch-url-content') 
const url = "https://www.w3.org/TR/PNG/iso_8859-1.txt"

app.get('/', async function(req, res) {
  const content = await fetchUrlContent(url)
  const result = count(content)
  res.send(result)
});

app.listen(3000);
