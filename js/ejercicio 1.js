let nota1, nota3, nota2, promedio;

nota1 = Number(prompt("Ingrese la nota1"));
nota1 = Number(prompt("Ingrese la nota1"));
nota1 = Number(prompt("Ingrese la nota1"));

promedio = (nota1+nota2+nota3)/3;

document.getElementById("nota1").innerHTML = "nota1";
document.getElementById("nota2").innerHTML = "nota2";
document.getElementById("nota3").innerHTML = "nota3";
document.getElementById("promedio").innerHTML = "promedio";

if (promedio >= 9.65) {
    document.getElementById("salida").innerHTML = "APROBADO";
}