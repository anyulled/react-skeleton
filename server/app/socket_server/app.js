var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var users = require('./initial/users.json');
if (!users) {
    users = [];
}
var nextUserId = 1;

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on("user/add", user => {
        console.log("Received new user");
        console.log(message);
//		users=[...users,user];	  
    });
    socket.on("user/load", message => {
        console.log("Getting users list");
        socket.emit("user/load", users);
    });
});


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
http.listen(3001, function () {
    console.log('socket listening on port 3001');
});