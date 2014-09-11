var http = require("http");

http.createServer(function(req, res){
	res.writeHead(200, {'Content-type':'text/html'});
	res.write("<!DOCTYPE html>");
		res.write("<html>");
			res.write("<head>");
				res.write("<title>Servidor Nodejs</title>");
					res.write("<link rel='stylesheet' href='//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css'>");
			res.write("</head>");
		res.write("<body><div class='container'><div class='jumbotron'><div class='page-header'><h1>Hola Soy un DevOPS</h1></div><p>Este es mi primer server creado desde cero con nodejs espero que te guste</p></div></div></body>");
	res.end("</html>");
}).listen(8080);

console.log("Nuestro server corre en el puerto 8080");