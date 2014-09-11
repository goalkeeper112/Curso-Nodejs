var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-type':'text'});
	res.end("Hola mundo");
}).listen(8080);
console.log("El servidor corre en el puerto 8080");