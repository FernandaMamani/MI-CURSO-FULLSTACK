const inputNumeroA = document.getElementById("numero-a");
const inputNumeroB = document.getElementById("numero-b");
const inputResultado = document.getElementById("resultado");
const tipoDeOperacion = document.getElementById("tipo-operación");
const btncalcular = document.getElementById("btn-calcular");

btncalcular.onclick = () => {
const operaciones = {
    "+": sumar,
    "-": restar,
    "*": multiplicar,
    "/": dividir,
};

const numeroA = Number(inputNumeroA.value);
const numeroB = Number(inputNumeroB.value);
inputResultado.value = operaciones[tipoDeOperacion.value](numeroA, numeroB)

    /* switch (tipoDeOperacion.value) {
        case "+":
            inputResultado.value = sumar(Number(inputNumeroA.value),Number(inputNumeroB.value));
            break;

            case "-":
                inputResultado.value = restar(Number(inputNumeroA.value),Number(inputNumeroB.value));
                break;
                case "+":
                    inputResultado.value = multiplicar(Number(inputNumeroA.value),Number(inputNumeroB.value));
                    break;
                    case "+":
                        inputResultado.value = dividir(Number(inputNumeroA.value),Number(inputNumeroB.value));
                        break;
    
        default:
            console.log()
            break;
    } */
}


function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if(b === 0){
        return "Error";
    }
    return a / b;
}