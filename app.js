var express = require('express')
var app = express()
const port = 5000;

app.use(express.json());
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })