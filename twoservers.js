var http = require("http");
var PORTONE = 7000;
var PORTTWO = 7500;

function handleRequest(request, response){
	response.end("Using this server, I will always tell you something good about yourself! ")
}

var server = http.createServer(handleRequest);

server.listen(PORTONE, function(){
	console.log("Server 1 listening on: http://localhost:%s", PORTONE);
});

function handleRequest2(request, response){
	response.end("YOU SUCK BY USING THIS SERVER..." + request.url)
}

var server = http.createServer(handleRequest2);

server.listen(PORTTWO, function(){
	console.log("Server 2 is listening on: http://localhost:%s", PORTTWO)
});