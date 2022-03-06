const boton1 = document.getElementById("boton1");
boton1.addEventListener('click', () => {
    var letra;

    letra = String(prompt("Ingrese una letra"))
    switch (letra) {
        case 'a':
            case'A':
            document.getElementById('letra').innerHTML = "La letra ingresada (" + letra + ") es vocal"
            break;
        case 'e':
            case'E':
            document.getElementById('letra').innerHTML = "La letra ingresada (" + letra + ") es vocal"
            break;
        case 'i':
            case'I':
            document.getElementById('letra').innerHTML = "La letra ingresada (" + letra + ") es vocal"
            break;
        case 'o':
            case'O':
            document.getElementById('letra').innerHTML = "La letra ingresada (" + letra + ") es vocal"
            break;
        case 'u':
            case'U':
            document.getElementById('letra').innerHTML = "La letra ingresada (" + letra + ") es vocal"
            break;
        default:
            document.getElementById('letra').innerHTML = "La letra ingresada (" + letra + ") es consonante"
            break;
    }
})