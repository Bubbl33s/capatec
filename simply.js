const prompt = require('prompt-sync')();

let done = false;
let num1, num2, resultado;

console.log("\tCALCULADORA BÁSICA\n");

while (!done)
{
    console.log("\nMENÚ:\n");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("5. Salir\n")

    opcion = parseInt(prompt("Ingrese una opción: "));

    console.log();

    switch (opcion)
    {
        case 1:
            num1 = parseInt(prompt("Ingrese el primer sumando: "));
            num2 = parseInt(prompt("Ingrese el segundo sumando: "));
            resultado = num1 + num2;
            console.log(`\n${num1} + ${num2} = ${resultado}`);
            break;

        case 2:
            num1 = parseInt(prompt("Ingrese el minuendo: "));
            num2 = parseInt(prompt("Ingrese el sustraendo: "));
            resultado = num1 - num2;
            console.log(`\n${num1} - ${num2} = ${resultado}`);
            break;

        case 3:
            num1 = parseInt(prompt("Ingrese el multiplicando: "));
            num2 = parseInt(prompt("Ingrese el multiplicador: "));
            resultado = num1 * num2;
            console.log(`\n${num1} * ${num2} = ${resultado}`);
            break;

        case 4:
            num1 = parseInt(prompt("Ingrese el dividendo: "));
            num2 = parseInt(prompt("Ingrese el divisor: "));
            
            if (num2 == 0)
            {
                console.log("ERROR: Divisor 0");
                continue;
            }
            else
            {
                resultado = num1 / num2;
                console.log(`\n${num1} / ${num2} = ${resultado}`);
            }
            break;

        case 5:
            done = true;
            break;

        default:
            console.log("Opción inválida.");
            continue;
    }

    let continuar = prompt("\nIngresa 'c' para continuar o cualquier otra tecla para salir: ").toLowerCase();

    if (continuar != 'c') {
        break;
    }
}

console.log("\nFin del programa.\n");
