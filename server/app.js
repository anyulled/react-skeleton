var express = require("express");
var app = express();

var cors = require("cors");

app.use(cors());
app.use(express.static("static"));

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.get("/users", function (req, res) {
    res.set({
        "Content-Type": "application/json"
    });
    res.sendFile(__dirname + "/static/users.json");
});

app.get("/deals", function (request, response) {
    console.log("Deals requested:" + request);
    response.set({
        "Content-Type": "application/json"
    });
    response.sendfile(__dirname + "/static/deals.json");
});

app.listen(3000, function () {
    console.log("App listening on port 3000!");
});