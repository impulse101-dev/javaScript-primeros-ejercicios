/*
"Todo el código JavaScript debe de estar en el mismo archivo externo."
*/

//he decidido ponerlo en una función para que quede más presentable, aunque también
//se podría haber puesto los 2 alerts sin la función y funcionan de igual manera.
window.onload = function(){
    alert("Hola Mundo!"); //al abrir la página se ejecuta este comando.
    //Paso seguido, al quitar ese mensaje, se ejecutará este otro(tal y como pide el ejercicio).
    alert("Mi primer script.");

}


//esto es a parte de la tarea para probar una cosa
var divCentral = document.getElementById("centro");

//colocar un event listener (como en java) a el div
divCentral.addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
});

//no me doxxees...