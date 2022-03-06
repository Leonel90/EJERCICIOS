const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
var radio,area,perimetro;

radio = Number(prompt("Ingrese el valor del radio del círculo"))
area = Math.PI * (radio * radio);
perimetro = 2 * Math.PI * radio;

document.getElementById('area').innerHTML = "El radio de la círculo es: " + area
document.getElementById('perimetro').innerHTML = "El perímetro del círculo es: " + perimetro
})