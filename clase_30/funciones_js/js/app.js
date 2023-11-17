//Esto es una función delarada
function probarA() {
    console.log("Soy la función A");
}

//Esto es una función expresada
const probarB = function probarB() {
    console.log("Soy la función B");
}

//Esto es una función expresada + función anónima
const probarC = function() {
    console.log("Soy la función C");
}

//Esto es una función expresada + función de fecha (arrow function)
const probarD = () => {
    console.log("Soy la función D");
}

//Esto es una función expresada + función de fecha de una sola linea
const probarE = () => console.log("Soy la función E");
