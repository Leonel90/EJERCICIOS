const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    
    var num,d1,r1,d2,d3;
    num = Number(prompt("Ingrese un número de 3 sifras"))
    d1 = (num-(num % 100))/100;
    r1 = num % 100;
    d2 = (r1-(r1 % 10))/10;
    d3 = r1 % 10;

    if (num == ((d3 * 100)+(d2 * 10)+d1)) {
        document.getElementById('si').innerHTML = "El número ingresado es Palíndromo"
    } else {
        document.getElementById('no').innerHTML = "El número ingresado no es Palíndromo"
    }
})