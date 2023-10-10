/* Creamos un botón que agrega a una sección de HTML, un título, un párrafo y una imagen desde JS. 
También creamos una clase desde JS, para agregarle estilos a la imagen desde CSS*/

let seccion1 = document.querySelector("#id-section1");  // Seleccionamos la sección donde vamos a trabajar, agregar cosas.
let button1 = document.querySelector("#id-button");  // seleccionamos el botón que agregamos en el HTML

let button2 = document.querySelector("#id-button2");


// Creamos elementos : título, parráfo  e imagen
function crearTitulo() {
  let titulo = document.createElement("h3");  // creamos el elemento h3 y lo guardamos en la variable título
  titulo.innerText = "Título de la sección";  // le asignamos el texto que contendrá el ekemnto título.
  seccion1.appendChild(titulo);  // agregamos el elemento creado a la sección que seleccionamos anteriormente.
}

function crearParrafo() {
  let parrafo = document.createElement("p");
  parrafo.innerText = "Párrafo de la sección";
  seccion1.appendChild(parrafo);
}

function crearImagen() {
  let imagen = document.createElement("img");
  imagen.setAttribute("src", "./images/auto.jpg");
  imagen.setAttribute("alt", "Foto de auto rojo"); // el atributo Alt , que era la descripción de la imagen, y la descripción.
  //imagen.style.width = "100%"; Podría agregar estilos de esta forma pero ensuciaría mi archivo JS, por eso es mejor crear una clase.
  imagen.setAttribute("class", "imagen"); //Creo la clase para darle estilo a la foto en CSS.
  console.dir(imagen);
  seccion1.appendChild(imagen);

}

function agregar() {
    crearTitulo();
    crearParrafo();
    crearImagen();
}

button1.onclick = agregar;


function crearImagen(path) {
    let imagen = document.createElement("img");
    imagen.setAttribute("src", path);   // le colocamos el atributo source, porque es donde se va a colocar la ubicación de la imagen y el path que s la dirección de la carpeta.
    imagen.setAttribute("alt", "Foto de auto rojo"); // el atributo Alt , que era la descripción de la imagen, y la descripción.
    imagen.setAttribute("class", "imagen"); //Creo la clase para darle estilo a la foto en CSS.
    console.dir(imagen);
    seccion1.appendChild(imagen);

}


// Acá agregamos pasando los datos a agregar por parámetro
function agregar2() {
    const datos = [
        ["Título de la sección", "Párrafo de la sección", "./images/auto.jpg"]
    ];
    crearTitulo(datos[0][0]);
    crearParrafo(datos[0][1]);
    crearImagen(datos[0][2]);
}

button1.onclick = agregar;
button2.onclick = agregar2;