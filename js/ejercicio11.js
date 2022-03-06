const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
var alumnosA,alumonosR,totalAlum;
var porcentajeA,porcentajeR;

alumnosA = Number(prompt("Ingrese el número de alumnos APROBADOS"))
alumonosR = Number(prompt("Ingrese el número de alumnos REPROBADOS"))
totalAlum = alumnosA + alumonosR
porcentajeA = (alumnosA * 100)/totalAlum
porcentajeR = (alumonosR * 100)/totalAlum
document.getElementById('A').innerHTML = "El porcentaje de Alumnos APROBADOS es del: " + porcentajeA + " %"
document.getElementById('R').innerHTML = "El porcentaje de Alumnos REPROBADOS es del: " + porcentajeR + " %"
})