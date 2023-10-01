const ARGENTINA = "ARGENTINA";
const CHILE = "CHILE";

let edad = 10;
let nacionalidad = ARGENTINA;

if (edad >= 18) {
  window.document.write("<p>Es mayor de edad</p>");

  if (edad >= 65) {
    window.document.write("<p>Es jubilado</p>");
  }
} else {
  window.document.write("<p>Es menor de edad</p>");

  if (nacionalidad === ARGENTINA) {
    window.document.write("<p> Tiene nacionalisda Argentina</p>");
  }
}
