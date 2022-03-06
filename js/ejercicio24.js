var num = new Number();
	document.write("numeros  multiplos de dos y tres",'<BR/>');
	for (num=1;num<=100;num++) {
		if (num%2==0 || num%3==0) {
			document.write(num,'<BR/>');
		}
	}