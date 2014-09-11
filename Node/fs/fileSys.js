var fs = require("fs");
var prompt = require("prompt");

prompt.start();

prompt.get([{
	message: "Contenido del README",
	name: "contenido"
}], function(err, result){
	fs.writeFile('README.md', result.contenido, function(err){
		if(err){
			throw err;
		} else{
			console.log("El archivo a sido modificado con exito");
		}
	});
});