const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    var nomEstudiante;
    var nota;

    nomEstudiante = String(prompt("Ingrese el nombre del estudiante"))
    nota = Number(prompt("Ingrese la nota del estudiante"))
    if (nota >= 0 & nota <= 2) {
        document.getElementById('nota').innerHTML = "Su nata es: " + nota
        document.getElementById('mjs').innerHTML = "El estudiante " + nomEstudiante + " NECESITA REFORZAMIENTO"
    } else {
        if (nota >= 3 & nota <= 4) {
            document.getElementById('nota').innerHTML = "Su nata es: " + nota
            document.getElementById('mjs').innerHTML = "El estudiante " + nomEstudiante + " A DESAPROBADO"
        } else {
            if (nota >= 5 & nota <= 7) {
                document.getElementById('nota').innerHTML = "Su nata es: " + nota
                document.getElementById('mjs').innerHTML = "El estudiante " + nomEstudiante + " A APROBADO"
            } else {
                if (nota >= 8 & nota <= 9) {
                    document.getElementById('nota').innerHTML = "Su nata es: " + nota
                    document.getElementById('mjs').innerHTML = "El estudiante " + nomEstudiante + " EXELENTE"
                } else {
                    if (nota >= 10) {
                        document.getElementById('nota').innerHTML = "Su nata es: " + nota
                        document.getElementById('mjs').innerHTML = "El estudiante " + nomEstudiante + " BECADO"
                    } else {
                        alert("INGRESE UN VALOR DE NOTA QUE VAYA DEL 1 AL 10");
                    }
                }
            }
        }
    }
})