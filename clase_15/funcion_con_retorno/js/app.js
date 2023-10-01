let resultado =  3+4;
document.write("<p>Resultado Global : " + resultado + "</p>");

//Funciones con Retorno y Sin Parámetros
function sumarA() {
  let resultado = 10 + 5;
  return resultado;
}

document.write("<p>Resultado de la función A: " + sumarA() + "</p>");


// Funciones con Retorno y Con un Parámetro
function sumarB(numero) {
  let resultado = 10 + 5 + numero;
  return resultado;
}

document.write("<p>Resultado de la función B: " + sumarB(3) + "</p>");