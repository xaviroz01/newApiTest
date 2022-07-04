const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.route('/').get( (req, res) => {
  res.send('Hello from Node.js RESTful API');
});

app.route('/hoho').get( (req, res) => {
    res.send('Hoho!');
  });
  

app.listen(port, () => {
  console.log('server is running on port: ', port);
});