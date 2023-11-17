//Variables de Scope Global
let a= 1;
let b= "1";
let c; // undefined
let d = null;
let saludo = "Hola";
const despedida = "Chau";

function probar() {
    let e = 10; // Variable de Scope Local

    e += a
    e += b
    console.log(e);

    saludo += " Mundo";
    console.log(saludo);

    /* if (saludo=="Hola") {
        console.log("si es igual");
    } */
    if (a===b) {
       console.log(a + " es igua a " + b) ;
    } else {
        console.log(a + " no es exactamente igua a ");
    }
}