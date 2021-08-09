var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
	console.log('get '+__dirname+' - send '+__dirname + '/index.html');
	res.sendFile(__dirname + '/index.html');
});

app.get('/jquery.js', function(req, res) {
	console.log('get '+'/jquery.js' +' - send '+__dirname + '/jquery-1.11.1.js');
	res.sendFile(__dirname + '/jquery-1.11.1.js');
});

app.get('/socket.js', function(req, res) {
	console.log('get '+'/socket.js '+' - send '+__dirname + '/socket.io.js');
	res.sendFile(__dirname + '/socket.io.js');
});
app.get('/json.js', function(req, res) {
	console.log('get '+'/json.js '+' - send '+__dirname + '/json.js');
	res.sendFile(__dirname + '/json.js');
});

io.on('connection', function(socket){
	console.log('a user connected');
	socket.broadcast.emit('hi');
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
	socket.on('chat message', function(msg){
		console.log(msg);
		io.emit('chat message', msg);
	});	
	socket.on('broadcast message', function(msg){
		console.log(msg);
		io.emit('broadcast message', msg);
	});	
	socket.on('notify message', function(msg){
		console.log(msg);
		io.emit('notify message', msg);
	});	
});

http.listen(9000, function(){
  console.log('listening on *:9000');
});
