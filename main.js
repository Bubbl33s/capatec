const prompt = require('prompt-sync')();

function getMenuOption() {
    console.log("\nMENÚ:\n");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("5. Salir\n")

    return parseInt(prompt("Ingrese una opción: "));
}

function getNumber(message) {
    return parseInt(prompt(message));
}

const terms = {
    1: ["primer sumando", "segundo sumando", '+', (a, b) => a + b],
    2: ["minuendo", "sustraendo", '-', (a, b) => a - b],
    3: ["multiplicando", "multiplicador", '*', (a, b) => a * b],
    4: ["dividendo", "divisor", '/', (a, b) => {
        if (b === 0) {
            console.log("\nERROR: Divisor 0");
            return null;
        }
        return a / b;
    }]
};

console.log("\n\tCALCULADORA BÁSICA\n");

let continuar = 'c';

do {
    const option = getMenuOption();

    if (option == 5) {
        console.log("\nFin del programa.");
        break;
    }

    if (!terms[option]) {
        console.log("Opción inválida.");
        continue;
    }

    console.log();
    let num1 = getNumber(`Ingrese el ${terms[option][0]}: `);
    let num2 = getNumber(`Ingrese el ${terms[option][1]}: `);
    let resultado = terms[option][3](num1, num2);

    if (resultado !== null) {
        console.log(`\n${num1} ${terms[option][2]} ${num2} = ${resultado}\n`);
    }

    continuar = prompt("Ingresa 'c' para continuar o cualquier otra tecla para salir: ").toLowerCase();

} while (continuar === 'c');
