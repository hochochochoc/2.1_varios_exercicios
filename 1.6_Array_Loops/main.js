
// Exercici 1.6 Array loops

    // Exercici 1
    let noms = ['Anna', 'Bernat', 'Clara'];

    noms.forEach((n) => {
        console.log(n);
    });


    // Exercici 2
    let noms2 = ['Anna', 'Bernat', 'Clara'];

    for (let m of noms2) {
        console.log(m);
    }

    // Exercici 3                                           
    let numeros = [1, 2, 3, 4, 5, 6];

    const resultat = numeros.filter(function(value){
        return value % 2 === 0;
    });
    
    console.log(`Filter números pares: ${resultat}`);

    // Exercici 4
    let objecte = {nom: 'Ona', edat: 25, ciutat: 'Barcelona' };

    for (let clau in objecte) {
        console.log(`${clau}: ${objecte[clau]}`);
    }

    // Exercici 5
    
    for (let numero of numeros) {
      if (numero === 5) {
        console.log(numero);
        break;
      }
      console.log(numero);
    }

    // Exercici 6
    let noms3 = ['Anna', 'Bernat', 'Clara'];

    for (let [index, nom] of noms3.entries()) {
      console.log(`Nombre: ${nom}; index: ${index}`);
    }
