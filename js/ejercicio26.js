const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    var totalLlamada, tiemLamada, claveZona;

    claveZona = Number(prompt("Escoja la clave de la zona a realizar la llamada"))
    switch (claveZona) {
        case 0:
            tiemLamada = Number(prompt("Ingrese el tiempo q duro la llamada"))
            totalLlamada = 0.25 * tiemLamada
            document.getElementById('tiemLlamada').innerHTML = "Tiempo de la llamada fue " + tiemLamada + " minutos"
            document.getElementById('costo').innerHTML = "El costo por Minuto es 0.25 ctvs"
            document.getElementById('zona').innerHTML = "Usted llamo a Dubai" 
            document.getElementById('tLlamad').innerHTML = "El costo total de la llamada es: $ " + totalLlamada + " dolares"
            break;
        case 1:
            tiemLamada = Number(prompt("Ingrese el tiempo q duro la llamada"))
            totalLlamada = 0.15 * tiemLamada
            document.getElementById('tiemLlamada').innerHTML = "Tiempo de la llamada fue " + tiemLamada + " minutos"
            document.getElementById('costo').innerHTML = "El costo por Minuto es 0.15 ctvs"
            document.getElementById('zona').innerHTML = "Usted llamo a Francia" 
            document.getElementById('tLlamad').innerHTML = "El costo total de la llamada es: $ " + totalLlamada + " dolares"
            break;
        case 2:
            tiemLamada = Number(prompt("Ingrese el tiempo q duro la llamada"))
            totalLlamada = 0.10 * tiemLamada
            document.getElementById('tiemLlamada').innerHTML = "Tiempo de la llamada fue " + tiemLamada + " minutos"
            document.getElementById('costo').innerHTML = "El costo por Minuto es 0.10 ctvs"
            document.getElementById('zona').innerHTML = "Usted llamo a Rusia" 
            document.getElementById('tLlamad').innerHTML = "El costo total de la llamada es: $ " + totalLlamada + " dolares"
            break;
        case 3:
            tiemLamada = Number(prompt("Ingrese el tiempo q duro la llamada"))
            totalLlamada = 0.09 * tiemLamada
            document.getElementById('tiemLlamada').innerHTML = "Tiempo de la llamada fue " + tiemLamada + " minutos"
            document.getElementById('costo').innerHTML = "El costo por Minuto es 0.09 ctvs"
            document.getElementById('zona').innerHTML = "Usted llamo a Canadá" 
            document.getElementById('tLlamad').innerHTML = "El costo total de la llamada es: $ " + totalLlamada + " dolares"
            break;
        case 4:
            tiemLamada = Number(prompt("Ingrese el tiempo q duro la llamada"))
            totalLlamada = 0.17 * tiemLamada
            document.getElementById('tiemLlamada').innerHTML = "Tiempo de la llamada fue " + tiemLamada + " minutos"
            document.getElementById('costo').innerHTML = "El costo por Minuto es 0.17 ctvs"
            document.getElementById('zona').innerHTML = "Usted llamo a India" 
            document.getElementById('tLlamad').innerHTML = "El costo total de la llamada es: $ " + totalLlamada + " dolares"
            break;
        case 5:
            tiemLamada = Number(prompt("Ingrese el tiempo q duro la llamada"))
            totalLlamada = 0.55 * tiemLamada
            document.getElementById('tiemLlamada').innerHTML = "Tiempo de la llamada fue " + tiemLamada + " minutos"
            document.getElementById('costo').innerHTML = "El costo por Minuto es 0.55 ctvs"
            document.getElementById('zona').innerHTML = "Usted llamo a Israel" 
            document.getElementById('tLlamad').innerHTML = "El costo total de la llamada es: $ " + totalLlamada + " dolares"
            break;
        case 6:
            tiemLamada = Number(prompt("Ingrese el tiempo q duro la llamada"))
            totalLlamada = 0.35 * tiemLamada
            document.getElementById('tiemLlamada').innerHTML = "Tiempo de la llamada fue " + tiemLamada + " minutos"
            document.getElementById('costo').innerHTML = "El costo por Minuto es 0.35 ctvs"
            document.getElementById('zona').innerHTML = "Usted llamo a Estados Unidos" 
            document.getElementById('tLlamad').innerHTML = "El costo total de la llamada es: $ " + totalLlamada + " dolares"
            break;
        case 7:
            tiemLamada = Number(prompt("Ingrese el tiempo q duro la llamada"))
            totalLlamada = 0.10 * tiemLamada
            document.getElementById('tiemLlamada').innerHTML = "Tiempo de la llamada fue " + tiemLamada + " minutos"
            document.getElementById('costo').innerHTML = "El costo por Minuto es 0.10 ctvs"
            document.getElementById('zona').innerHTML = "Usted llamo a Colombia" 
            document.getElementById('tLlamad').innerHTML = "El costo total de la llamada es: $ " + totalLlamada + " dolares"
            break;
        case 8:
            tiemLamada = Number(prompt("Ingrese el tiempo q duro la llamada"))
            totalLlamada = 0.13 * tiemLamada
            document.getElementById('tiemLlamada').innerHTML = "Tiempo de la llamada fue " + tiemLamada + " minutos"
            document.getElementById('costo').innerHTML = "El costo por Minuto es 0.13 ctvs"
            document.getElementById('zona').innerHTML = "Usted llamo a Portugal" 
            document.getElementById('tLlamad').innerHTML = "El costo total de la llamada es: $ " + totalLlamada + " dolares"
            break;
        case 9:
            tiemLamada = Number(prompt("Ingrese el tiempo q duro la llamada"))
            totalLlamada = 0.20 * tiemLamada
            document.getElementById('tiemLlamada').innerHTML = "Tiempo de la llamada fue " + tiemLamada + " minutos"
            document.getElementById('costo').innerHTML = "El costo por Minuto es 0.20 ctvs"
            document.getElementById('zona').innerHTML = "Usted llamo a Panamá" 
            document.getElementById('tLlamad').innerHTML = "El costo total de la llamada es: $ " + totalLlamada + " dolares"
            break;
    }
})