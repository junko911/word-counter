const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const { count } = require("./count")
const { fetchUrlContent } = require("./fetch-url-content")
const { clean } = require("./clean")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.post("/", async function (req, res) {
  const url = req.body.url
  const content = await fetchUrlContent(url)
  const cleanedContent = clean(content)
  const result = count(cleanedContent)
  res.send(result)
})

module.exports = app