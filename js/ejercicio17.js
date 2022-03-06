const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    var nNotas, i;
    var promedio, sumNotas, varTem;
    var nomAlumno;
    nomAlumno = Number(prompt("Ingrese el nombre del alumno"))
    nNotas = Number(prompt("Ingrese la cantidad de notas que tiene"))
    sumNotas = 0;
    i = 1;

    for (i = 1; i <= nNotas; i++) {
        varTem = Number(prompt("Ingrese la nota # " + i));
        sumNotas = sumNotas + varTem;
    }
    promedio = sumNotas / nNotas;
    document.getElementById("promedio").innerHTML = "El promedio es: " + promedio
})