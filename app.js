const express = require('express');
const socket = require('socket.io');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = socket(server);
const fs = require('fs');


app.use('/css', express.static('./static/css'))

app.use('/js', express.static('./static/js'))


app.get('/', function(request, response) {
    fs.readFile('./static/index.html', function(err, data) {
      if(err) {
        response.send('에러')
      } else {
        response.writeHead(200, {'Content-Type':'text/html'})
        response.write(data)
        response.end()
      }
    })
  })

server.listen(8080, function(){
    console.log('서버실행중');
});