const http = require('http');
const os = require('os');

console.log("Kubia server starting...");

var handler = function(request, response){
    console.log("Recieves request from "+request.connection.remoteAddress);
    response.writeHead(200);
    response.end("You've hit "+os.hostname()+"\n");
};

var ww = http.createServer(handler);
ww.listen(8080);
