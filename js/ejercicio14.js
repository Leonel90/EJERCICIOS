const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    var nombreT, categoria;
    var sueldo, bonificacion, sueldoT;

    nombreT = String(prompt("Ingrese su nombre y apellido"))
    categoria = String(prompt("Escoja la categoria de trabajador a la que pertenece"))
    sueldo = Number(prompt("Ingrese la cantidad de sueldo que persive"))

    switch (categoria) {
        case 'a': case 'A':
            bonificacion = sueldo * 0.10;
            sueldoT = sueldo + bonificacion;
            document.getElementById('nombre').innerHTML = nombreT + " usted pertenece a la categoría (" + categoria + ")-> Empleado"
            document.getElementById('sueldo').innerHTML = "Su sueldo es: $ " + sueldo + " dolares"
            document.getElementById('bonificacion').innerHTML = "Su bonificación del 10% es: $ " + bonificacion + " dolares"
            document.getElementById('sueldoT').innerHTML = "Su sueldo a recivir más bonificación es: $ " + sueldoT + " dolares"
            break;
        case 'b': case 'B':
            bonificacion = sueldo * 0.20;
            sueldoT = sueldo + bonificacion;
            document.getElementById('nombre').innerHTML = nombreT + " usted pertenece a la categoría (" + categoria + ")-> Socio Empleado"
            document.getElementById('sueldo').innerHTML = "Su sueldo es: $ " + sueldo + " dolares"
            document.getElementById('bonificacion').innerHTML = "Su bonificación del 20% es: $ " + bonificacion + " dolares"
            document.getElementById('sueldoT').innerHTML = "Su sueldo a recivir más bonificación es: $ " + sueldoT + " dolares"
            break;
        case 'c': case 'C':
            bonificacion = sueldo * 0.30;
            sueldoT = sueldo + bonificacion;
            document.getElementById('nombre').innerHTML = nombreT + " usted pertenece a la categoría (" + categoria + ")-> Jefe de Personal"
            document.getElementById('sueldo').innerHTML = "Su sueldo es: $ " + sueldo + " dolares"
            document.getElementById('bonificacion').innerHTML = "Su bonificación del 30% es: $ " + bonificacion + " dolares"
            document.getElementById('sueldoT').innerHTML = "Su sueldo a recivir más bonificación es: $ " + sueldoT + " dolares"
            break;
        case 'd': case 'D':
            bonificacion = sueldo * 0.50;
            sueldoT = sueldo + bonificacion;
            document.getElementById('nombre').innerHTML = nombreT + " usted pertenece a la categoría (" + categoria + ")-> Gerente"
            document.getElementById('sueldo').innerHTML = "Su sueldo es: $ " + sueldo + " dolares"
            document.getElementById('bonificacion').innerHTML = "Su bonificación del 50% es: $ " + bonificacion + " dolares"
            document.getElementById('sueldoT').innerHTML = "Su sueldo a recivir más bonificación es: $ " + sueldoT + " dolares"
            break;
        default:
            alert("No pertenece a ninguna categoria de trabajador");
            break;
    }

})