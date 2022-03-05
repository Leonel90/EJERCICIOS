const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    var nombre;
    var costo,horas,sueldo;
     
    nombre = String(prompt("Ingrese el nombre del empleado"))
    horas = Number(prompt("Ingrese las horas de trabajo"))
    costo = Number(prompt("Ingrese el costo de cada hora de trabajo"))
    sueldo = horas * costo;
    document.getElementById('nombreEmpleado').innerHTML = "El empleado " + nombre
    document.getElementById('sueldoTotal').innerHTML = "recibe el sueldo de $ " + sueldo + " dolares"
})