let parrafo1 = document.querySelector("p");
console.log(parrafo1.innerHTML);
parrafo1.innerHTML = "Hola Mundo parrafo 1";

let parrafoMultiple = document.querySelectorAll("p");
console.log(parrafoMultiple[4].innerHTML);
parrafoMultiple[4].innerHTML = "Hola Mundo Múltiple";

let elementoConClase = document.querySelector(".resaltado");
console.log(elementoConClase.innerHTML);
elementoConClase.innerHTML = "Cambió el texto";

let elementoPorId = document.querySelector("#parrafo");
console.log(elementoPorId.innerHTML);
elementoPorId.innerHTML = "Chau";
