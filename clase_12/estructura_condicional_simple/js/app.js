let numA = 10;
let numB = 5;
let valorBooleano = false;

if (valorBooleano == true) {
  window.document.write("<p>Hola Mundooo</p>");
}
if (numA > numB) {
  window.document.write("<p>Hola Mundo</p>");
}

window.document.write("<p>  ùltima estrucción</p>");

// Comparación estricta de igualdad
if (numA === "10") {
  window.document.write("<p>El valor y el tipo de datos son iguales</p>");
}

// Comparación estricta de desigualdad
if (numA !== "10") {
  window.document.write(
    "<p>El valor es igual pero el tipo d datos es diferente</p>"
  );
}

if (numA === "10") {
  window.document.write(
    "<p>El valor es igual pero el tipo d datos es diferente</p>"
  );
}