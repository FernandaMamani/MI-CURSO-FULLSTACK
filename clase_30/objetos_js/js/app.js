//Declaración del objeto persona
const persona = {
    //propiedades
    nombre: "Juan",
    edad: 21,
    //Métodos
    saludar: function () {
        return "Hola Mundo";
    }
};

console.log(persona);

//Acceder a la propiedad nombr. Se hace por medi de la notación dot(.)
console.log("Accseso a la propiedad: " , persona.nombre);

//reasignar un valor a la propiedad nombre
const probarA = () => {
    persona.nombre = "Carlos";
    console.log(persona.nombre);
};

//Invocar al método saludar()
const probarB = () => {
    persona.nombre = "Carlos";
    console.log(persona.saludar());
};

// ************** ARRAY DE OBJETOS **************** //

const jugador1 = {
    nombre:"Juan",
    nueroDeLaCamiseta: 2,
    posicion: "arquero",
    patear : function (){
        console.log("Pateando");
    },
}

const jugador2 = {
    nombre: "Pablo",
    nueroDeLaCamiseta: 5,
    posicion: "defensor",
    patear: function () {
        console.log("Pateando");
    },
}

const jugador3 = {
    nombre: "Pedro",
    nueroDeLaCamiseta: 10,
    posicion: "delantero",
    patear: function () {
        console.log("Pateando");
    },
    correr: function () {
        console.log("Corriendo");
    },
}

// El equipo sería un array de objetos
const equipo=[jugador1,jugador2,jugador3];
console.log(equipo);

//
console.log(jugador3.nueroDeLaCamiseta);
jugador3.correr()

//
