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
