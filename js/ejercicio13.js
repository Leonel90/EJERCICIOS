const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    var num1, num2, num3;

    num1 = Number(prompt("Ingrese el 1er número"))
    num2 = Number(prompt("Ingrese el 2do número"))
    num3 = Number(prompt("Ingrese el 3er número"))

    if (num1 > num2 & num1 > num3) {
        document.getElementById('mayor').innerHTML = "El número mayor es el: " + num1
    } else {
        if (num2 > num1 & num2 > num3) {
            document.getElementById('mayor').innerHTML = "El número mayor es el: " + num2
        } else {
            if (num3 > num1 & num3 > num2) {
                document.getElementById('mayor').innerHTML = "El número mayor es el: " + num3
            } else {
                alert("No existe un número mayor");
            }
        }
    }

})