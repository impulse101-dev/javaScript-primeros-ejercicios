/*
Ejercicio 1
Escribir el código de una función a la que se pasa como parámetro
un número entero y devuelve como resultado una cadena de texto
que indica si el número es par o impar. Mostrar por pantalla el
resultado devuelto por la función.
*/

//no sabía que js también tenía javaScript :o

/**
 * Si el resto del número en una division entre 2 es 0, el número es par.
 * @param {*} numero Numero a comprobar si es par o impar.
 * @returns true si es par. false si no lo es.
 * @author Adrián Salazar Escoriza
 */
function parOImpar(numero){
    return numero % 2 == 0;
}

function ejercicio1(numeroEntero){
    let texto = "El número " + numeroEntero + " es: ";

    if(isNaN(numeroEntero)){
        alert("pero tu eres tonto? (que pongas un número por dios...)");
    }else{
        if(parOImpar(numeroEntero)){    //si el numero es par...
            alert(texto + "PAR");
        }else{
            alert(texto + "IMPAR")
        }
    }
}

let numeroParaEjer1 = prompt("Introduzca un número válido aquí, por favor");

ejercicio1(numeroParaEjer1);




/*
Ejercicio 2
Definir una función que muestre información sobre una cadena de
texto que se le pasa como argumento. A partir de la cadena que se le
pasa, la función determina si esa cadena está formada sólo por
mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/

function esCadena(texto){
    return typeof texto == "string";
}

function mayus(texto){
    return texto == texto.toUpperCase();
}

function minus(texto){
    return texto == texto.toLowerCase();
}
/*
function mezclaMayusMinus(texto){
    return texto != texto.toUpperCase() && texto != texto.toLowerCase();
}
*/

function ejercicio2(cadenaTexto){
    if(!esCadena(cadenaTexto)){   //si no se pone una cadena de texto...
        alert("pero tu eres tonto? (que pongas una cadena de texto por dios...)");
    }else{
        if(mayus(cadenaTexto)){
            alert("La cadena de texto está en mayus!!!");
        }else if(minus(cadenaTexto)){
            alert("La cadena de texto está en minusculas!!!");
        }else{
            alert("La cadena de texto tiene ambas mayus y minus!!!");
        }
    }
}

let cadenaEjer2 = prompt("Introduzca una cadena de texto válida aquí, por favor");

ejercicio2(cadenaEjer2);




/*
Ejercicio 3
Realizar un programa en el que se introduzca por teclado el
número de mes y nos muestre un mensaje si dicho mes tiene 28, 30
ó 31 días. Debemos solucionar el ejercicio usando la estructura más
eficiente.
*/

function diasDelMes(numeroMes) {
    switch (numeroMes) {
        case 1: // Enero
        case 3: // Marzo
        case 5: // Mayo
        case 7: // Julio
        case 8: // Agosto
        case 10: // Octubre
        case 12: // Diciembre
            alert("El mes tiene 31 días.");
            break;
        case 4: // Abril
        case 6: // Junio
        case 9: // Septiembre
        case 11: // Noviembre
            alert("El mes tiene 30 días.");
            break;
        case 2: // Febrero
            alert("El mes tiene 28 días.");
            break;
        default:
            alert("Número de mes inválido. Debe ser un valor entre 1 y 12.");
    }
}

let numeroMes = parseInt(prompt("Introduce un número del 1 al 12 el cual indicará el mes"));
diasDelMes(numeroMes);








//esto es a parte de la tarea para probar una cosa
var divCentral = document.getElementById("centro");

//colocar un event listener (como en java) a el div
divCentral.addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
});

//no me doxxees...