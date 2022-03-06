var numeroinical = new Number();
	var n = new Number();
	var serie = new Number();
	var c = new Number();
	var f = new Number();
	numeroinical = Number(prompt("Ingresa un numero del 2 al 10: "));
	n = numeroinical+1;
	for (f=1;f<=numeroinical;f++) {
		serie = 0;
		for (c=1;c<=n-f;c++) {
			serie = (serie*10)+c;
		}
		document.write(serie," ",'<BR/>');
	}