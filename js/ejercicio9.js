const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    var numero,contador,suma;

    numero = Number(prompt("Ingrese un número"))
    contador = 0;
    suma = 0;
    while (contador < numero) {
        contador = contador + 1;
        suma = suma + contador;
    }
    document.getElementById('sumaNat').innerHTML = "La suma de los números naturales es: " + suma
})