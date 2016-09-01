var express = require("express");
var app = express();

var cors = require("cors");

app.use(cors());
app.use(express.static("static"));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/users', function (req, res) {
	res.set({
	  'Content-Type': 'application/json'
	});
  res.sendFile(__dirname + '/static/users.json');
});

app.listen(3000, function () {
  console.log("App listening on port 3000!");
});