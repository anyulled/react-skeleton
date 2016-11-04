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
    var query = url.parse(req.url,true).query;
    console.log("Args: " + JSON.stringify(query));
    var page = req.param('pageNumber');
    console.log("page: " + page);
    //it paginates only to the 10 existing user files
    page = (page != null && page > 0 && page < 10) ? page : "";
    res.sendFile(__dirname + resourcePath + "users"+ page +".json")
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

app.get("/userButtonsInfo", function (req, res) {
    console.log("Getting user buttons info");
    
    var button = req.param('button');
    console.log("Button info to retrieve: " + button);
    
    res.set({
        "Content-Type": "application/json"
    });
    
    if (button == 'addUser' || button == 'editUser'){
        console.log("Sending button file");
        res.sendFile(__dirname + resourcePath + button.concat("Button.json"));
    } else {
        console.log("Error: The file doesn`t exist");
        // Error response
        //var error = '{"error":"' + button.concat(" button not exist") + '"}';
    } // else
}); // app.get("/userButtonInfo", function (req, res)

app.listen(3000, function () {
    console.log("App listening on port 3000!");
});
