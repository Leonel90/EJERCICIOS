var n = new Number();
	var n1 = new Number();
	var count = new Number();
	var final = new Number();
	var suma = new Number();
	
	n = Number(prompt("Ingresa un numero"));
	suma = 0;
	count = 0;
	n1 = 10;
	// secuencia dependiendo el numero  
	if ((n%2==0)) {
		for (count=0;count<=n1-1;count+=2) {
			final = n+1+count;
			document.write(final," + ");
		}
	} else {
		for (count=0;count<=n1-1;count+=2) {
			final = n+1+count;
			document.write(final," + ");
		}
	}
	count = 0;
	// suma la secuencia1
	while ((count<5)) {
		if (n%2==0) {
			suma = n+suma;
			count = count+1;
		}
		n = n+1;
	}
	document.write("Resultado de la suma es: ",suma,'<BR/>');