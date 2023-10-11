const tituloDeArticulo1 = document.querySelector("#id-article h3");
const parrafoDeArticulo1 = document.querySelector("#id-article p");
const botonDeArticulo1Agregar = document.querySelector("#id-article button:first-of-type");
const botonDeArticulo1Quitar = document.querySelector("#id-article button:nth-of-type(2)");

function agregarEstilos() {
    /* let estilos= parrafoDeArticulo1.getAttribute("style");
    parrafoDeArticulo1.setAttribute("style", estilos + "background-color:red;") */
    //let textoActual= parrafoDeArticulo1.innerText;
    //parrafoDeArticulo1.innerText = textoActual + "Hola";
    //parrafoDeArticulo1.insertAdjacentHTML=textoActual.toUpperCase() + "Hola";
/* let p = document.createElement('p');
let textoActual = parrafoDeArticulo1.innerText; */
parrafoDeArticulo1.computedStyleMap.setProperty("back")
}

function quitarEstilos(params) {
    parrafoDeArticulo1.innerText = "chau";
}




botonDeArticulo1Agregar.onclick = agregarEstilos;
botonDeArticulo1Quitar.onclick = quitarEstilos;