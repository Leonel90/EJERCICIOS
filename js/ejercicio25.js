const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    var n1 = new Number();
    var n2 = new Number();
    var n3 = new Number();

    n1 = Number(prompt("Ingrese primer número"));
    n2 = Number(prompt("Ingrese sgundo número"));
    n3 = Number(prompt("Ingrese tercer número"));
    if ((n1 != n2 && n1 != n3 && n2 != n3)) {
        if ((n1 > n2 && n1 < n3 || n1 > n3 && n1 < n2)) {
            document.getElementById("mitad").innerHTML = "En la mitad esta el número: " + n1
        } else {
            if ((n2 > n1 && n2 < n3 || n2 > n1 && n2 < n3)) {
                document.getElementById("mitad").innerHTML = "En la mitad esta el número: " + n2
            } else {
                document.getElementById("mitad").innerHTML = "En la mitad esta el número: " + n3
            }
        }
    } else {
        alert("Inserte n�meros que sean diferentes");
    }
})