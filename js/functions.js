/*Pantalla de carga*/
window.addEventListener("load", function () {
    document.getElementById("loader").classList.toggle("loader2")
})

/*Boton volver arriba*/
document.getElementById("boton-arriba").addEventListener("click", desplazamientoArriba);

function desplazamientoArriba(){
    var desplazamientoActual = document.documentElement.scrollTop;
    if (desplazamientoActual > 0) {
        window.scrollTo (0, 0);
    }
}
