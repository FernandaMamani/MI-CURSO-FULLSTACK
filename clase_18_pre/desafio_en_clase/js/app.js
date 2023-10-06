let seccion1 = document.querySelector("#id-section");
let button1 = document.querySelector("#id-button");

function crearTitulo() {
  let titulo = document.createElement("h3");
  titulo.innerText = "Título de la sección";
  seccion1.appendChild(titulo);
}

function crearParrafo() {
  let parrafo = document.createElement("p");
  parrafo.innerText = "Título de la sección";
  seccion1.appendChild(parrafo);
}

function crearImagen(path) {
  let imagen = document.createElement("img");
  imagen.setAtribute("src", path);
  imagen.setAtribute("alt", "Foto de auto rojo");
  imagen.setAttribute("class", "imagen");
  console.dir(image);
  seccion1.appendChild(imagen);

  seccion1.appendChild(imagen);
}
