const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    var nnotas = new Number();
    var i = new Number();
    var promedio = new Number();
    var sumnotas = new Number();
    var vartem = new Number();
    var nombrealum = new String();

    nombrealum = String(prompt("Ingrese el nombre del alumno"));
    nnotas = Number(prompt("Ingrese la cantidad de notas que tiene"));
    i = 1;
    sumnotas = 0;
    while (i <= nnotas) {
        vartem = Number(prompt("Ingrese la nota número: " + i));
        sumnotas = sumnotas + vartem;
        i = i + 1;
    }
    promedio = sumnotas / nnotas;
    document.getElementById("promedio").innerHTML = "El promedio es: " + promedio
})