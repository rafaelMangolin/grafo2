function Heap(){
	this.valores = [];
	this.index = 0;


	this.add = function(valor){
		this.valores[this.index++] = valor;
		corrigirSubindo(this.valores,this.index-1);
	}

	this.remover = function(){

		if(this.valores.length == 0){
			return null;
		}
		var a = this.valores.shift()
		,b=this.valores.pop();
		this.index--;
		this.valores.splice(0,0,b);
		corrigirDescendo(this.valores,0)
		return a;
	}


	function corrigirSubindo(arr, indice){
		if(arr[(indice-1)/2] != null && arr[indice].peso<arr[(indice-1)/2].peso){
			var a = arr[indice];
			arr[indice] = arr[(indice-1)/2];
			arr[(indice-1)/2] = a;
			corrigirSubindo(arr,(indice-1)/2);
		}
	}

	function corrigirDescendo(arr, indice){
		var menorIndice;
		if(arr[(indice*2) + 1] == null && arr[(indice*2) + 2] == null){
			return null;
		}else if(arr[(indice*2) + 1] == null){
			menorIndice =  (indice*2) + 1;
		}else if(arr[(indice*2) + 2] == null){
			menorIndice =  (indice*2) + 2;
		}else{
			menorIndice = (arr[(indice*2) + 1].peso < arr[(indice*2) + 2].peso)?(indice*2) + 1:(indice*2) + 2;
		}
		if(arr[indice].peso > arr[menorIndice].peso){
			var a = arr[indice];
			arr[indice] = arr[menorIndice];
			arr[menorIndice] = a;
			corrigirDescendo(arr,menorIndice);
		}
	}
}

module.exports = Heap