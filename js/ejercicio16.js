const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    var sumPares,sumImpares,num,i;
    num = Number(prompt("Ingrese el número de datos a sumar"))
    sumPares = 0;
    sumImpares = 0;
    i = 0;

    while (i <= num) {
		if (i % 2 == 0) {
			sumPares = sumPares + i;
		} else {
			sumImpares = sumImpares + i;
		}
        i = i + 1;
	}
   document.getElementById("sumpar").innerHTML = "La suma de números pares es: " + sumPares
   document.getElementById("sumimpar").innerHTML = "La suma de números impares es: " + sumImpares
})