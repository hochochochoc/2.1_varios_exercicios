// Exercici 1.2 Operador ternari
    
    // Exercici 1
    let edad = 21;
    const puedeConducir = (edad) => {
        return edad > 18 ? 'Puede conducir.' : 'No puede conducir.';
    };
    console.log(`Edad: ${edad}. ${puedeConducir(edad)}`);
    puedeConducir(edad);

    // Exercici 2
    let num1 = 3;
    let num2 = 999;

    const masGrande = (num1, num2) => {
        return num1 > num2 ? "num1" : "num2";
    };
    console.log(`${masGrande(num1, num2)} es más grande.`);

    // Exercici 3
    // Parte 1
    let numero = 50;

    const resultado = (numero) => {
        return numero > 0 ? "positivo" : (numero < 0 ? "negativo" : "zero");
    };
    console.log(`El número es ${resultado(numero)}.`);
    
    // Parte 2
    const trobarMaxim = (a, b, c) => {
        return (a > b) ? (a > c ? a : c) : (b > c ? b : c);
    }
    
    let a = 10;
    let b = 15;
    let c = 12;
    
    trobarMaxim(a, b, c);
    console.log(`El valor máximo es ${trobarMaxim(a,b,c)}.`);

    // Exercici 4
    let parOImpar = (numeros) => {
        numeros.forEach ((numero) => {
            let resultado = numero % 2 === 0 ? "par" : "impar";
            console.log(`El número ${numero} es ${resultado}.`);
        });
    }
    let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    parOImpar(arrayNumeros);