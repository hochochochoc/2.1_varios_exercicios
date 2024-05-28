// Exercici 1.4 Rest & Spread operators
    
    // Exercici 1
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];

    let array3 = [...array1, ...array2];

    console.log(`Array3: ${array3}`);
    
    // Exercici 2
    let sum = (...rest) => {
        let sumaDeTodo = 0;
        for (let num of rest) {
            sumaDeTodo += num;
        }
        return sumaDeTodo;
    }

    console.log(`Suma: ${sum(1, 2, 4, 7)}`);


    // Exercici 3
    let objecte1 = {
        nombre: 'Coelacanth',
        periodo: 'Devónico',
        clase: 'Actinistia'
    };

    let objecte2 = {...objecte1};
    objecte2.periodo = 'Cenozoico';

    console.log('Objecte 1:', objecte1);
    console.log('Objecte 2:', objecte2);


    // Exercici 4
    const arr = ['🍜', '🌭', '🍕', '🍛'];
    const [ramen, hotDog, ...rest] = arr;
    const resto = rest.join();
    
    console.log(`Ramen: ${ramen}\nHot Dog: ${hotDog}\nRest: ${resto}`);
    

    // Exercici 5
    let spreadFunction = (arg1, arg2, arg3) => {
        console.log(`Spread array with function: ${arg1} + ${arg2} + ${arg3}.`);
    }

    let array = [1, 2, 3];                                                

    spreadFunction(...array);

    // Exercici 6
    let objeto1 = {
        propiedad1: 'x',
        propiedad2: 'qwer',
        propiedad3: '12'
    };

    let objeto2 = {
        propiedad4: 'gr',
        propiedad5: 'Tanezrouft',
        propiedad6: 'hdgj'
    };

    let objeto3 = {...objeto1, ...objeto2};
    console.log('Objeto3:', objeto3);

