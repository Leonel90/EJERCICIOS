const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    var nombre;
    var valorUnitario, cantidad, subTotal, descuento, total;

    nombre = String(prompt("Ingrese el nombre del articulo"))
    valorUnitario = Number(prompt("Ingrese el valor del artículo"))
    cantidad = Number(prompt("Ingrese la cantidad de articulos comprados"))
    subTotal = valorUnitario * cantidad;
    if (cantidad > 6) {
        descuento = subTotal * 0.1
    } else {
        descuento = 0;
    }
    total = subTotal - descuento;
    document.getElementById('subTotal').innerHTML = "Valor Subtotal: $ " + subTotal + " dolares"
    document.getElementById('descuento').innerHTML = "Descuento: $ " + descuento + " dolares"
    document.getElementById('total').innerHTML = "Valor Total: $ " + total + " dolares"
})