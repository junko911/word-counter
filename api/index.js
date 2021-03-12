var express = require('express');
const app = express();
const { count } = require('./count') 
const { fetchUrlContent } = require('./fetch-url-content') 
const { clean } = require('./clean')
const url = "https://www.w3.org/TR/PNG/iso_8859-1.txt"

app.get('/', async function(req, res) {
  const content = await fetchUrlContent(url)
  const cleanedContent = clean(content)
  const result = count(cleanedContent)
  res.send(result)
});

app.listen(3000);
