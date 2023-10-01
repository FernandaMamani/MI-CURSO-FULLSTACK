let tituloDeLaSeccion = document.querySelector("#titulo");

tituloDeLaSeccion.innerHTML = "Repaso de Selectores";

function saludar() {
  let resultado = 5 + 4;
  window.alert(resultado);
}


let edad = 18;
let resultadoPorHtml = document.querySelector("#resultado");

switch (edad) {
  case 18:
  case 19:
  case 20:
  case 21:
    resultadoPorHtml.innerHTML = "Podés subir con un acompañante";
    break;
  case 22:
  case 23:
      resultadoPorHtml.innerHTML = "Poder subir solo";
    break;
  default:
    resultadoPorHtml.innerHTML = "Podés subir con certificado de buena salud";
}

console.log(resultadoPorHtml);