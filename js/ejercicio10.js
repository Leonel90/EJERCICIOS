const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    var fecha = new String();
    var dia = new Number();
    var mes = new Number();
    var ano = new Number();
    var bisiesto = new Number();

    fecha = Number(prompt("Ingrese la fecha q desea consultar usar este formato: DD/MM/AAAA"))
    dia = 0;
    mes = 0;
    ano = 0;

    if (fecha.length > 11) {
        prompt('msj1').innerHTML = "Fecha en el formato incorrecto ingrese los datos de nuevo"
    } else {
        //dia = Number.parseString(fecha, 0, 2);
       // mes = Number.parseString(fecha, 3, 5);
        //ano = Number.parseString(fecha, 6, 10);
        //document.getElementById('dd').innerHTML = "Día = " + dia
        //document.getElementById('mm').innerHTML = "Mes = " + mes
       // document.getElementById('aa').innerHTML = "Año = " + ano

        if ((1582 <= ano && ano < 3000) && (mes > 0) && (mes < 13) && (dia < 32) && (dia > 0)) {
            if (((ano % 4) == 0) && (ano % 100) != 0 || (ano % 400) == 0) {
                document.getElementById('msj1').innerHTML = "Es un año bisiesto"
                bisiesto = 0;
            }
        } else {
            document.getElementById('msj1').innerHTML = "No es un año bisiesto"

        }
        if (bisiesto == 0) {
            switch (mes) {
                case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                    if (dia <= 31 & dia >= 1) {
                        document.getElementById('msj2').innerHTML = "Fecha correcta"
                    } else {
                        document.getElementById('msj2').innerHTML = "Fecha incorrecta"
                    }
                    break;

                case 2:
                    if (dia <= 28 & dia >= 1) {
                        document.getElementById('msj2').innerHTML = "Fecha correcta"
                    } else {
                        document.getElementById('msj2').innerHTML = "Fecha incorrecta"
                    }
                    break;

                case 3: case 6: case 9: case 11:
                    if (dia <= 30 & dia >= 1) {
                        document.getElementById('msj2').innerHTML = "Fecha correcta"
                    } else {
                        document.getElementById('msj2').innerHTML = "Fecha incorrecta"
                    }
                    break;

                default:
                    break;
            }
        } else {
            prompt('msj1').innerHTML = "Fecha incorrecta no existe"
        }
    }
})