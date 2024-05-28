// Exercici 1.3 Callbacks

    // Exercici 1
    let processar = (nombre, callback) => {
        let numero = nombre;
        callback(numero);
    }
    
    let nombre = 30;
    let resultado = (number) => {
        console.log(`Nombre callback: ${number}.`);
    }
    processar(nombre, resultado);
    

    // Exercici 2
    let calculadora = (primero, segundo, callback) => {
        return callback(primero, segundo);
    }

    let sum2 = (a, b)=> {
        return a + b;
    }
    let num1 = 1;
    let num2 = 2;
    let resultado2 = calculadora(num1, num2, sum2);
    console.log(`La suma de ${num1} y ${num2} es ${resultado2}.`);


    // Exercici 3
    let esperarISaludar = (nom, callback) => {
        setTimeout (() => {
            callback(nom);
        }, 2000);
    }

    let saludar = (nombre) => {
        console.log(`Ex. 3: Hola, ${nombre}.`)
    }

    esperarISaludar ('Nombre Generico', saludar);

    // Exercici 4
    processarElements = (unArray, callback) => {
        unArray.forEach((element) => {
            callback(element);
        });
    }

    let multiplicar = (element) => {
        console.log(`Dos ${element}s.`);
    }

    arrayRandom = ['restaurante', 'hermana', 'libro'];
    processarElements(arrayRandom, multiplicar)


    // Exercici 5 // Not correct yet
    let processarCadena = (cadena, callback) => {
        cadena = cadena.toUpperCase();
        callback(cadena);
    }

    let imprimirCadena = (cadena) => {
        console.log(cadena);
    }
    processarCadena('ca-de-na', imprimirCadena);