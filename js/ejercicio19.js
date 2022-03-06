const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    
    var a, i, j, k, n, p, caja, numDim;
    numDim = Number(prompt("Ingrese el numero de datos a ordenar"))
    var a = new Array(30);
    p = 1;

    for (p = 1; p <= numDim; p++) {
        a[p] = Number(prompt("Ingrese el numero " + p));
    }
    for (k = 1; k <= numDim; k++) {
        for (j = 1; j <= numDim - 1; j++) {
            if ((a[j] > a[j + 1])) {
                caja = a[j];
                a[j] = a[j + 1];
                a[j + 1] = caja;
            }
        }
    }
    document.getElementById("orAsc").innerHTML = "Los números en orden Ascendente son: "
    for (i = 1; i <= numDim; i++) {
        document.write(a[i]);
        document.getElementById("orden1").innerHTML = a[i]
    }
    for (k = 1; k <= numDim; k++) {
        for (j = 1; j <= numDim - 1; j++) {
            if ((a[j] < a[j + 1])) {
                caja = a[j];
                a[j] = a[j + 1];
                a[j + 1] = caja;
            }
        }
    }
    document.getElementById("orDes").innerHTML = "Los números en orden Descendente son: "
    for (i = 1; i <= numDim; i++) {
        document.write(a[i]);
        document.getElementById("orden2").innerHTML = a[i]
    }
})