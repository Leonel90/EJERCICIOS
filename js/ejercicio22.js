var num1 = new Number();
	var num2 = new Number();
	var num3 = new Number();
	var i = new Number();
	num1 = 0;
	num2 = 1;
	document.write("=======================================================",'<BR/>');
	document.write("SERIE FIBONACCI DE NÚMEROS MENORES DE 200",'<BR/>');
	document.write("=======================================================",'<BR/>');
	for (i=1;i<=13;i++) {
		document.write("--> ",num1,'<BR/>');
		num3 = num1+num2;
		num1 = num2;
		num2 = num3;
	}