//Esto es el SCOPE o alcance de las variables
 let resultado = 0;
let esCorrecto = true;

if (esCorrecto) {
  let numeroA = 5;
  resultado += 10;

  if (1 == 1) {
    const numeroB = 3;
  }
  // La variable numeroB no tiene alcance (descomentar para probar)
  //document.write("<p>" + numeroB + "</p>");
}

//La variable numeroA no tiene alcance (descomentar para probar)
//document.write("<p>" + numeroA + "</p>"); 

document.write("<p>Resultado del IF : " + resultado + "</p>");

// FUNCIONES SIN RETORNO

function sumar() {
  resultado = 10 + 5;
}

sumar();

document.write("<p>Resultado de la función: " + resultado + "</p>");


const IVA210 = 21;
function calcularPrecio(costo) {
  resultado = (costo * (1 + (IVA210 / 100))) * 1.3;
  document.write("<p>Resultado de la función: " + resultado + "</p>");
}
calcularPrecio(100);

document.write("<p>Resultado de la función: " + resultado + "</p>");
