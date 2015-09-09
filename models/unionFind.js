function UnionFind(){
	this.conjuntos = {};
	this.find = function(a){
		return a.conjunto;
	}
	this.union = function(a,b){
		var aConjNome = this.find(a)
		,bConjNome = this.find(b)
		,aConj = this.conjuntos[aConjNome]
		,bConj = this.conjuntos[bConjNome]

		if(aConjNome == bConjNome) return false;

		if (aConj.count < bConj.count){
			aConj.vertices.map(function(data){
				data.conjunto = bConjNome;
				return data;
			})	        
			bConj.vertices = bConj.vertices.concat(aConj.vertices)
			bConj.count += aConj.count;
			delete this.conjuntos[aConjNome];
		}else{
			bConj.vertices.map(function(data){
				data.conjunto = aConjNome;
				return data;
			})	        
			aConj.vertices = aConj.vertices.concat(bConj.vertices)
			aConj.count += bConj.count;
			delete this.conjuntos[bConjNome];	        
		}
		return true;
	}
	this.makeSet = function(a){
		this.conjuntos[a.chave] = {
			vertices:[a]
			,count:1
		}
		a.conjunto = a.chave;
	}
}

module.exports = UnionFind