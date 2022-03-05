const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    var num1,num2,suma;
     
    num1 = Number(prompt("Ingrese el primer numero"));
    num2 = Number(prompt("Ingrese el segundo numero"));
    suma = num1 + num2;
    document.getElementById('num1').innerHTML = "Nro " + num1
    document.getElementById('num2').innerHTML = "Nro " + num2
    document.getElementById('suma').innerHTML = "La suma es " + suma
})