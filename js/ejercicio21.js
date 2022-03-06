const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    var num, codificador, num1;
    num = Number(prompt("Ingrese un número de 4 digitos"));
    num1 = num;
    codificador = 0;

    do {
        codificador = (codificador * 10) + (num % 10);
        num = Math.trunc(num / 10);
    } while (num > 0);
    document.getElementById('inver').innerHTML = "El número invertido es: " + codificador
    if (codificador == num1) {
        document.getElementById('siP').innerHTML = "Si es un número Palíndromo"
    } else {
        document.getElementById('noP').innerHTML = "No es un número Palíndromo"
    }
    num = Number(prompt("Ingrese un número de 5 digitos"));
    num1 = num;
    codificador = 0;
    do {
        codificador = (codificador * 10) + (num % 10);
        num = Math.trunc(num / 10);
    } while (num > 0);
    document.getElementById('inver1').innerHTML = "El número invertido es: " + codificador
    if (codificador == num1) {
        document.getElementById('siP1').innerHTML = "Si es un número Palíndromo"
    } else {
        document.getElementById('noP1').innerHTML = "No es un número Palíndromo"
    }
})