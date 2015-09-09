function returnGraph(){
	var fs = require('fs')
	, 	endOfLine = require('os').EOL;
	return function(filename){
		var rawFileContent = fs.readFileSync(filename, {encoding: 'utf-8'})
		,	fileContent = rawFileContent.split(endOfLine)
		,	arrayContent = fileContent.slice('\\n')
		,	Vertice = require('../models/vertice.js')
		,	arrGrafo = []

		var index = 1;
		for(var i = 0;i< parseInt(arrayContent[0]);i++){
			var count = parseInt(arrayContent[index])
			, grafo={vertices:[]}
			, k=0;
			for(var j = index+1;j<count+index+1;j++){
				var s = arrayContent[j].split(' ')
				grafo.vertices.push(new Vertice(parseFloat(s[0]),parseFloat(s[1]),k++));
			}
			arrGrafo.push(grafo)
			index += count+1;
		}
		return arrGrafo;	
	}
}
module.exports = returnGraph;