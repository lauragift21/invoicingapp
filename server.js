const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get("/", function(req, res) {
    res.send("Welcome to invoicing App");
})

app.listen(PORT, function() {
  console.log(`App is running on localhost:${PORT}`);
})

