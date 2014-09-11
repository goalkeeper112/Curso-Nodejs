var prompt = require('prompt');
prompt.start();

var rutina = function(){
	prompt.get([{
		message: "¿Como te llamas?",
		name: "nombre"
	}, {
		message: "¿Cuantos años tienes?",
		name: "edad"
	}, {
		message: "¿Donde Nacistes?",
		name: "pais"
	}], function(err, result){
		if(err){
			console.log(err);
		}
		var nombre = result.nombre,
			edad   = result.edad,
			pais   = result.pais;

		console.log("Hola "+ nombre + " tu edad es "+ edad + " y nacistes en "+ pais);
	});
};

exports.modules = rutina();