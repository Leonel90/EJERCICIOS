const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    var num,i,numPar,numImpar;
    numPar = 0;
    numImpar = 0;

    for (i = 1;i <= 10;i ++) {
		num = Number(prompt("Ingrese el dato # " + i));
		if (num % 2 == 0) {
			numPar = numPar + 1;
		} else {
			numImpar = numImpar + 1;
		}
	}
   document.getElementById("par").innerHTML = "la cantidad de números pares es: " + numPar
   document.getElementById("impar").innerHTML = "la cantidad de números impares es: " + numImpar

})