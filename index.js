var arr = require('./import/import.js')()('aug.tgf');
arr.forEach(function(data){
	var grafo = require('./quedaLivre/criarAresta.js')(data)
	console.log(require('./quedaLivre/quedaLivre.js')(grafo))
})

