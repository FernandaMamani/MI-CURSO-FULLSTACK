/* let pais1= "Argentina";
let pais2 = "Chile";
let pais3= "Colombia";
let pais4 = "Uruguay"; */

//Array Unidimensional o Vector

const paises = ["Argentina", "Chile", "Colombia", "Uruguay", "Perú"]; // Es mutable

document.write("<p> País: Argentina</p>");

//document.write("<p> País: " + pais4 + "</p>");

document.write("<p> País: " + paises[3] + "</p>");

paises[4] ="USA";

// Array Bidimensional

const paisesConPoblacion = [
  ["Argentina", 47000000],
  ["Chile", 19000000],
  ["Perú", 28000000],
];

//Matriz

const matriz = [
  [21, 15],
  [77, 50],
  [20, 55],
];

console.table(matriz);

document.write("<p> Matriz: " + matriz[1][1] + "</p>");

//Recorrer un vector

let logitudDePaises = paises.length; // retorna un 5
for (let i = 0; i < logitudDePaises; i++) {
  document.write("<p> Pais Nº" + i + ":" + paises[i] + "</p>");
}
