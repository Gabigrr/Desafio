	  
      function somar (valor){
	  	let multTres = 0;
	  	let multCinco = 0;

	for (i = 0; i < valor; i++){
		    if (i % 3 === 0)
		    multTres += i;
		    if (i % 5 === 0)
    	    multCinco += i;
    
  }

console.log (multTres + multCinco);
document.getElementById('resultado').innerHTML = multTres + multCinco;
}
