var express = require("express");
var app = express();

var cors = require("cors");

var resourcePath="/resources/";

app.use(cors());
app.use(express.static("static"));

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.get("/users", function (req, res) {
	console.log("Getting users");
    res.set({
        "Content-Type": "application/json"
    });
    url = require('url');
    var query = url.parse(req.url, true).query;
    console.log("Args: " + JSON.stringify(query));
    var pageNumber = req.param('pageNumber');
    var pageSize = req.param('pageSize');
    pageNumber = (pageNumber != null ) ? pageNumber : 1;
    pageSize = (pageSize != null) ? pageSize : 13;
    //it paginates only to the 10 existing user files for page size 13
    //or the 6 existing user files for page size 20
    if (pageSize == 13) {
        pageNumber = Math.min(pageNumber, 10);
    } else if (pageSize == 20) {
        pageNumber = Math.min(pageNumber, 7);
    }
    const fileName = "users" + pageNumber + "_" + pageSize + ".json";
    res.sendFile(__dirname + resourcePath + fileName);
});

app.get("/users/filters", function (req, res) {
	console.log("Getting users filters");
    res.set({
        "Content-Type": "application/json"
    });
    res.sendFile(__dirname + resourcePath + "users_filters.json");
});

app.get("/content", function (req, res) {
	console.log("Getting content list");
	res.set({
        "Content-Type": "application/json"
    });
    res.sendFile(__dirname + resourcePath + "content.json");
});

app.get("/content/1", function (req, res) {
	console.log("Getting content 1");
	res.set({
        "Content-Type": "application/json"
    });
    res.sendFile(__dirname + resourcePath + "content_1.json");
});

app.get("/content/2", function (req, res) {
	console.log("Getting content 2");
	res.set({
        "Content-Type": "application/json"
    });
    res.sendFile(__dirname + resourcePath + "content_2.json");
});

app.get("/content/3", function (req, res) {
	console.log("Getting content 3");
	res.set({
        "Content-Type": "application/json"
    });
    res.sendFile(__dirname + resourcePath + "content_3.json");
});

app.listen(3000, function () {
    console.log("App listening on port 3000!");
});
