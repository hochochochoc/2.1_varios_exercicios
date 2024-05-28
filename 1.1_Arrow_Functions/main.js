// Exercici 1.1 Arrow functions

    // Exercici 1
    const sum = (a, b) => {
        return a + b;
    }
    console.log(`Sum: ${sum(1, 2)}`); 

    // Exercici 2
    const randomNumber = () => {
        return Math.round (Math.random() * (100 - 0) + 0);
    }
    console.log(`randomNumber: ${randomNumber()}`);

    // Exercici 3
    class Person {
        constructor(name){
            this.name = name;
        }
    }

    const persons = [
        new Name ("Jannik"),
        new Name ("Jonnik"),
        new Name ("Jinnik"),
        new Name ("Junnik")
    ]
    const greet = persons.map(person => {
        console.log(`Hola, ${person.name}!`)
    });
   
    // Exercici 4
    let arrayNumeros = [1, 2, 3, 4];

    arrayNumeros.forEach(numero => {
        console.log(numero);
    });
    
    // Exercici 5
    function timeout() {
        setTimeout(() => {
            console.log('Hola, mundo!');
        }, 3000);
    }
    timeout();
