/* let seccion1 = document.querySelector("#id-section1");
//console.log(seccion1);
let pDeSeccion1 = document.querySelector("#id-section1 p");
seccion1.style.margin = "2em";
//seccion1.style.padding = "1em";

console.dir(seccion1); */

/* let pDeSeccion2 = document.querySelector("#id-section2 p");
let smallDeSeccion1 = document.querySelector("#id-section1 small");
//let inputTextDeSeccion2 = document.querySelector("#id-section2 input[type = 'text]");
let inpuCheckboxtDeSeccion2 = document.querySelector("#id-chequeo");

pDeSeccion2.innerHTML = "Esto lo escribí desde <b>JS</b>";
smallDeSeccion2.innerHTML = "Esto lo escribí desde <b>JS</b>";
inputTextDeSeccion2.value = "Juan";

*/
let pDeSeccion3 = document.querySelector("#id-section3 p");
//pDeSeccion3.setAttribute('id','id-parrafo);
pDeSeccion3.hasAttribute("id");
pDeSeccion3.removeAttribute("style");
console.log(pDeSeccion3.getAttribute("id"));

//Manipulacion de Eventos

let pDeSeccion4 = document.querySelector("#id-section4 p");
let buttonDeLaSeccion4 = document.querySelector("#id-section4 button");

function cambiarColor() {
  if (pDeSeccion4.style.color === "red") {
    pDeSeccion4.style.color === "green";
  } else {
    pDeSeccion4.style.color = "red";
  }
}

buttonDeLaSeccion4.onclick = cambiarColor;
p;
