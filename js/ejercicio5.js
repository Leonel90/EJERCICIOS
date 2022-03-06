const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    var nombreEstudiante;
    var nota1,nota2,nota3,promedio;

    nombreEstudiante = String(prompt("Ingrese el nombre del estudiante"))
    nota1 = Number(prompt("Ingrese el valor de la 1ra nota"))
    nota2 = Number(prompt("Ingrese el valor de la 2da nota"))
    nota3 = Number(prompt("Ingrese el valor de la 3ra nota"))
    promedio =(nota1 + nota2 + nota3)/3;
    if (promedio < 6.95) {
        document.getElementById('nomEst').innerHTML = "Estudiante " + nombreEstudiante
        document.getElementById('promedio').innerHTML = "Su promedio es: " + promedio
        document.getElementById('estado').innerHTML = "USTED A REPROBADO"
    } else {
        document.getElementById('nomEst').innerHTML = "Estudiante " + nombreEstudiante
        document.getElementById('promedio').innerHTML = "Su promedio es: " + promedio
        document.getElementById('estado').innerHTML = "USTED A APROBADO"
    }
})