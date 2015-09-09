function QuedaLivre(grafo){
	var Union = require('../models/unionFind.js')
	, Q = new Union()
	, sum = 0;
	grafo.adjacencia.vertices.forEach(function(data){
		Q.makeSet(data);
	})

	while(Object.keys(Q.conjuntos).length>1 && grafo.arestas.length > 0){
		var a = grafo.arestas.shift();
		if(Q.union(a.origem,a.destino)) {
			sum+=a.peso;
		}
	}
	return (sum/100).toFixed(2);
}
module.exports = QuedaLivre