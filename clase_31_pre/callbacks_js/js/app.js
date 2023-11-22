


const resultA = document.getElementById("id-resultado-a");
const resultB = document.getElementById("id-resultado-b");
const personas = ['Pablo', 'Lorena', 'Paola'];

const saludarPersona = (nombre) => {
    console.log("Hola " + nombre);
}

const saludarPersonas = (personas, callback) => {
    for (let i = 0; i < personas.length; i++) {
        const p = document.createElement("p");
        p.innerText = callback(personas[i]);
        resultA.appendChild(p);

    }
}

saludarPersonas(personas, saludarPersona);