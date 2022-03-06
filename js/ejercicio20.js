const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    var num, codificador, num1;
    num = Number(prompt("Ingrese un número de 3 dijitos"));
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
        document.getElementById('siP').innerHTML = "No es un número Palíndromo"
    }
})