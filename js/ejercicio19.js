const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    var num,numMayor,i;
    numMayor = 0;

    for (i = 1; i <= 10; i++) {
        num = Number(prompt("Ingrese el dato # " + i));
        if (numMayor < num) {
            numMayor = num;
        }
    }
    document.getElementById("numMay").innerHTML = "El número mayor es: " + numMayor
})