/*
"Todo el código JavaScript debe de estar en el mismo archivo externo."
*/


//ejercicio 1 capitulo 3 (si, lo estoy haciendo sobre la misma página en la que he probado antes cosas.)
let mensaje = alert("Hola Mundo! \n Que facil es incluir \'comillas simples\' \n y \"comillas dobles\"");


//ejercicio 2 capitulo 3
let meses = ["Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio", "Julio", 
    "Agosto", "Septiembre", "Octubre", 
    "Noviembre", "Diciembre"
];

//creo que esto es lo que pide el ejercicio
for (let i = 0; i < meses.length; i++){
    alert(meses[i]);
}


let valores = [true, 5, false, "hola", "adios", 2];

//ejercicio 3 capitulo 3
function compararLongitudesTexto([]){

//filtro para recoger los valores de tipo "string" .......
let cadenasDeTexto = [];        
for(let i = 0; i < valores.length; i++){
    if(typeof valores[i] == "string"){
        cadenasDeTexto.push(valores[i]);
    }
}

//ahora estoy comparando la longitud de las cadenas de texto (lo iba a hacer como si fuesen nodos que se vayan cambiando unos con otros, que es lo que debería en caso de haber 1000...)
if(cadenasDeTexto[0].length > cadenasDeTexto[1].length){
    return cadenasDeTexto[0];
}else{
    return cadenasDeTexto[1];
}

}

alert("El valor es " +compararLongitudesTexto([true, 5, false, "hola", "adios", 2])  + "\nHay console logs en el código!!!");

function numero1Mayor(numero1, numero2){
    if(numero1 > numero2){
        return true;
    }else{
        return false;
    }
}

alert(numero1Mayor(32, 17));  //tampoco quiero que salgan un millon de alertas, además el ejercicio no deja claro si debe salir como error, como console.log...



//aqui he hecho lo de las operaciones matemáticas
let num1 = valores[1];
let num2 = valores[5];

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
let modulo = num1%num2;


alert("Suma: " + suma);
alert("Resta: "+resta);
alert("Multiplicación: "+ multiplicacion);
alert("División: " + division);
alert("Módulo: " + modulo);






//ejercicio 4 capitulo 3:
let numero1 = 5;
let numero2 = 8;
if(numero1 < numero2) {
alert("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
alert("numero2 es positivo");
}
if(numero1 < 0 || numero1 != 0) {
alert("numero1 es negativo o distinto de cero");
}
if(numero1 + 1 <= numero2) {        //????
alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}



//ejercicio 5 capitulo 3:
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F',
'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L',
'C', 'K', 'E', 'T'];

function ejercicio5(){
    let numeroDni = prompt("Ponga aquí su número del dni");
    let letraDni = prompt("Y ahora ponga aquí su letra del dni");
    //lo que hace el isNaN es indicar si es un número o no (si pones el ratón encima te lo dice)
    if(isNaN(numeroDni) || numeroDni < 0 || numeroDni > 99999999 || numeroDni != parseInt(numeroDni)){
        alert("número proporcionado no es válido y el programa no muestra más mensajes");
    }else{
        //calcular la letra correspondiente:
        let resto = numeroDni % 23;
        let letraCalculada = letras[resto];

        //Comparar la letra calculada con la letra proporcionada por el usuario:
        if(letraCalculada != letraDni){
            alert("La letra que ha indicado no es correcta");
        }else{
            alert("Su dni es correcto!");
        }
    }

}

ejercicio5();



//Ejercicio 6 capitulo 3:

function ejercicio6(){
    let facto = prompt("Introduzca un número y aparecerá el resultado del factorial:");
    if(facto < 0){
        alert("El número no puede ser negativo");
    }else{
        let resultado = 1;
        for(let i = 2; i <= facto; i++){
            resultado = resultado * i;
        }
        alert("El resultado del factorial de " + facto + " es: " + resultado);
    }
}

ejercicio6();



//esto es a parte de la tarea para probar una cosa
let divCentral = document.getElementById("centro");

//colocar un event listener (como en java) a el div
divCentral.addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
});

//no me doxxees...