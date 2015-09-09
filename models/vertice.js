function Vertice(x,y,chave){
	this.x = x;
	this.y= y;
	this.chave = chave;
	this.adjacentes = [];
	this.pred = null;
	this.conjunto = null;
	this.addAdjacent = function(adjacent){
		if(adjacent){
			this.adjacentes.push(adjacent);
			return true;
		}
		return false;
	}
}

module.exports = Vertice;