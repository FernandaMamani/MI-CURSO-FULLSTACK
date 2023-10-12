console.log(titulo.innerHTML);


let datos1 = document.querySelectorAll("#prim-int");
console.log(datos1);

let datos2 = document.querySelectorAll("#seg-int");
console.log(datos2);

let integrante1 = [datos1[0].innerText,datos1[1].innerText,datos1[2].innerText,datos1[3].innerText];
let integrante2 = [datos2[0].innerText, datos2[1].innerText, datos2[2].innerText, datos2[3].innerText];
//let integrante1 = [datos1[0].innerHTML, datos1[1].innerHTML, datos1[2].innerHTML, datos1[3].innerHTML];
//let integrante2 = [datos2[0].innerHTML, datos2[1].innerHTML, datos2[2].innerHTML, datos2[3].innerHTML];
console.log(integrante1);
console.log(integrante2);


function nombreYApellido1() {
    let nombreInt1 = [];
    let apellidoInt1 = [];
    for (let i = 0; i < 2; i++) {
        if (integrante1[i] !== "") {
            nombreInt1.push(integrante1[i]);
            //console.log(nombreInt1);
        };


    }
    for (let i = 2; i < 4; i++) {
        if (integrante1[i] !== "") {
            apellidoInt1.push(integrante1[i].toUpperCase());
        };
    }
    return '"' + nombreInt1.join(' ') + " " + apellidoInt1.join(' ') + '"';
}

function nombreYApellido2() {
    let nombreInt2 = [];
    let apellidoInt2 = [];
    for (let i = 0; i < 2; i++) {
        if (integrante2[i] !== "") {
            nombreInt2.push(integrante2[i]);
            //console.log(nombreInt2);
        };


    }
    for (let i = 2; i < 4; i++) {
        if (integrante2[i] !== "") {
            apellidoInt2.push(integrante2[i].toUpperCase());
        };
    }
    return '"' + nombreInt2.join(' ') + " " + apellidoInt2.join(' ') + '"';
    //return [nombreInt2, apellidoInt2]
}


nombreYApellido1();
nombreYApellido2();

console.log("-----" + "\n" + "Integrante 1: " + nombreYApellido1() + "\n" + "Integrante 2: " + nombreYApellido2() + "\n" + "-----");



let promptColor;
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            if (integrante1[i]==integrante2[j]) {
                console.log("Hubo coincidencias en los nombres");
                promptColor = prompt("Hubo coincidencias. Ingresa un color para destacarlo :");
            }else if (promptColor==false){
                console.log("No hubo coincidencia en los nombres");
            }
        };
    }

//reconsole.log(promptColor);