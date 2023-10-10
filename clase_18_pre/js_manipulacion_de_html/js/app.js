/* MANIPULACIÓN DE ESTILOS */
let seccion1 = document.querySelector("#id-section1");    // Forma de seleccionar
//console.log(seccion1);

let pDeSeccion1 = document.querySelector("#id-section1 p");
//console.dir(pDeSeccion1);

seccion1.style.margin = "2em";
seccion1.style.padding = "1em";                 // Forma de asignar un estilo
pDeSeccion1.style.color = "red";
pDeSeccion1.style.textDecoration = "underlina";

console.log("MANIPULACIÓN DE ESTILOS");
console.log(seccion1.style.margin);          // Forma de leer un atributo asignado.
console.log(pDeSeccion1.style.color);

/* MANIPULACIÓN DE CONTENIDOS */

let pDeSeccion2 = document.querySelector("#id-section2 p");
let smallDeSeccion2 = document.querySelector("#id-section2 small");

let inputTextDeSeccion2 = document.querySelector("#id-section2 input[type = 'text']");
let inpuCheckboxtDeSeccion2 = document.querySelector("#id-chequeo");
let inputRadioDeSeccion2 = document.querySelectorAll("#id-section2 input[type = 'radio']");
let selectDeSeccion2 = document.querySelector("#id-section2 select");

// Diferencia entre innerHTML e innerText :
pDeSeccion2.innerHTML = "Esto lo escribí desde <b>JS</b>";
smallDeSeccion2.innerText = "Esto lo escribí desde <b>JS</b>";

inputTextDeSeccion2.value = "Juan";
inpuCheckboxtDeSeccion2.checked = true;
inputRadioDeSeccion2[1].checked = true;
selectDeSeccion2.value = 3;

console.log("\nMANIPULACIÓN DE CONTENIDOS");  // la \n agrega un espacio arriba en  la impresion de la consola.
console.log(pDeSeccion2.innerHTML);
console.log(smallDeSeccion2.innerText);
console.log(inputTextDeSeccion2.value);
console.log(inpuCheckboxtDeSeccion2.checked);
console.log(inputRadioDeSeccion2);
console.log(inputRadioDeSeccion2[1].checked);
console.log(selectDeSeccion2.value);
//console.log(selectDeSeccion2.innerHTML);  // descomentar para ver en consola.
//console.log(selectDeSeccion2.innerText);


/* MANIPULACIÓN DE ATRIBUTOS */

let pDeSeccion3 = document.querySelector("#id-section3 p");
let inputNumberDeSeccion3 = document.querySelector("#id-edad");
pDeSeccion3.setAttribute('id','id-parrafo');

console.log("\nMANIPULACIÓN DE ATRIBUTOS");
console.log(pDeSeccion3.hasAttribute("id"));
console.log(pDeSeccion3.getAttribute("id"));

//pDeSeccion3.removeAttribute("id"); // elimina el atributo creado o que existía.
//console.log(pDeSeccion3.getAttribute("id")); // nos devuelve null porque ya no está, fué eliminado.

inputNumberDeSeccion3.setAttribute('max', '10');
inputNumberDeSeccion3.removeAttribute('placeholder');

pDeSeccion3.setAttribute('class','color-rojo');

/* MANIPULACIÓN DE EVENTOS */

let pDeSeccion4 = document.querySelector("#id-section4 p");
let buttonDeLaSeccion4 = document.querySelector("#id-section4 button");

console.log("\nMANIPULACIÓN DE ELEMENTOS");

function cambiarColor() {
   //alert('Holaa!!');
  // pDeSeccion4.style.color = "red";
   if (pDeSeccion4.style.color === "red") {
    pDeSeccion4.style.color = "green";
  } else {
    pDeSeccion4.style.color = "red";
  }
}

buttonDeLaSeccion4.onclick = cambiarColor; // Nunca poner paréntesis
pDeSeccion4.ondblclick = cambiarColor; // doble click en el texto y cambia de color


/* MANIPULACIÓN DE ELEMENTOS */



let divDeSeccion5 = document.querySelector("#id-section5 div");
let buttonDeLaSeccion5Agregar = document.querySelector("#id-agregar");
let buttonDeLaSeccion5Modificar = document.querySelector("#id-modificar");
let buttonDeLaSeccion5Eliminar = document.querySelector("#id-eliminar");
let buttonDeLaSeccion5EliminarTodo = document.querySelector("#id-eliminar-todo");

function agregar() {
    let parrafo = document.createElement('p');   //creamos un elemento "p" desde JS.
    parrafo.innerText = "Texto agregado desde JS";
    divDeSeccion5.appendChild(parrafo);  // agrgrgamos un DIV con .appendChild() al párrafo.
}

function modificar() {
    divDeSeccion5.innerText = "texto modificado";  // modificamos  texto
}

function eliminarPrimerNodo() {
    let nodos = divDeSeccion5.childNodes;   // es un objeto que me muestra todos los nodos y los hijos

    console.dir(nodos);    // nos muestra  una lista de nodos
    console.dir(nodos[0]);   // nodo específico

    if (nodos.length > 0) {
        divDeSeccion5.removeChild(nodos[0])  //llamamos al elemento Padre y le decimos que hijo vamos a borrar. En este caso el primero de la lista.
    }
}


function eliminarTodo() {
    divDeSeccion5.remove();  // Borra todo
}

buttonDeLaSeccion5Agregar.onclick = agregar;
buttonDeLaSeccion5Modificar.onclick = modificar;
buttonDeLaSeccion5Eliminar.onclick = eliminarPrimerNodo;
buttonDeLaSeccion5EliminarTodo.onclick = eliminarTodo;
