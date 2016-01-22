var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http)

//app.get('/', function(req,res)
//{
//	res.send('<h1>hello mofo</h1>');
//}
//);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
	console.log('listening on port 3000');
});

/*io.on('connection', function(socket){
	console.log('connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
});
*/

io.on('connection', function(socket){
	//console.log('connected');
  socket.on('chat message', function(msg){
	  io.emit('chat message', msg);
    console.log('message: ' + msg);
  });

  socket.on('coords', function(msg){
    io.emit('coords', msg);
    console.log('message: ' + msg);
  });
});
