//HTTP part
var server = require('http').createServer(function(req, res){
  res.writeHead(200,{ 'Content-Type': 'text/html' });
  res.end('<h1>Try the same on socket!</h1>');
});
server.listen(80);
/*
//some servers may require port 8080
var server = require('ws').createServer({port:8080});
server.on('connection', function(conn) {
  //when server is connected, show OK
  conn.send('Ok. Websocket connected');
  conn.on('message', function(message) {
    console.log('received: %s', message);
    //echo message
    conn.send(results);
  });
});
*/
