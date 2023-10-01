let puntaje = Number(window.prompt("Indica tu puntaje actual :"));
//let puntaje = 500;
let nivelActual = "";

if (puntaje <= 1000) {
  nivelActual = "Estás en el nivel 1";
} else if (puntaje <= 2000) {
  nivelActual = "Estás en el nivel 2";
} else if (puntaje <= 3000) {
  nivelActual = "Estás en el nivel 3";
} else {
  nivelActual = "Estás en el último nivel";
}

window.document.write(nivelActual);

window.document.write(
  "<p>Tipo de datos de puntaje : " + typeof puntaje + " </p>"
);
