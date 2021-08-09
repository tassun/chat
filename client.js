var socket = require('socket.io-client')('http://127.0.0.1:9000');
  
socket.on('connect', function(){});
socket.on('event', function(data){});
socket.on('disconnect', function(){});
socket.on('chat message', function(msg){
	console.log(msg);
});
