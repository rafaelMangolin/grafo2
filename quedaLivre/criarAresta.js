function CriarArestas(arr){
	var Heap = require('../models/heap.js')
	, array = [];
	arr.vertices.forEach(function(data){
		arr.vertices.forEach(function(obj){
			if(obj.chave != data.chave){
				var a=obj.x - data.x
				,b= obj.y-data.y 
				,dist = Math.sqrt((a*a)+(b*b))
				array.push({origem:data,peso:dist,destino:obj});
			}
		})
	})
	array.sort(function(a,b){
		return a.peso - b.peso;
	})

	return {arestas:array,adjacencia:arr}
}

module.exports = CriarArestas