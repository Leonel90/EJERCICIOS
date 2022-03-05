const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    var area,base,altura;

    base = Number(prompt("Ingrese el valor de la base del rectángulo"))
    altura = Number(prompt("Ingrese el valor de la altura del rectángulo"))
    area = base * altura;
    document.getElementById('area').innerHTML = "El area del rectángulo es " + area
})