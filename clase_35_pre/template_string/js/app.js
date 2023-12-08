const demoMultiline = document.getElementById("demo_multiline");
const demoConcatenation = document.getElementById("demo-concatenation");

let textMultiline = `soy un texto
                     de múltiples lineas`;
demoMultiline.innerText = textMultiline;

let firstname="Juan";

function getAge() {
    let age = 25;
    return age + 1;
}
let age = 25;
let textConcatenation = `Hola Mundo. Mi nombre es + ${firstname} y tengo ${age+1} años`;
demoConcatenation.innerText = textConcatenation