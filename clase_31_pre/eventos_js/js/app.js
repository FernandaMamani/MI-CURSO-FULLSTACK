
const inputA = document.getElementById('id-contador-a');

function incrementarA() {
    inputA.value = parseInt(inputA.value) + 1;
}

const inputB = document.getElementById('id-contador-b');
const buttonB = document.getElementById('id-btn-incrementar-b');

function incrementarB() {
    inputB.value = parseInt(inputB.value) + 1;
}

buttonB.onclick= incrementarB;

const inputC = document.getElementById('id-contador-c');
const buttonC = document.getElementById('id-btn-decrementar-c');

function decrementarC() {
    inputC.value = parseInt(inputC.value) - 1;
}

cuadradoA.addEventListener('click' , () => {
    const p = document.createElement('p');
    p.innerText = "DIV ROJO"
    cuadradoA.appendChild(p);
});