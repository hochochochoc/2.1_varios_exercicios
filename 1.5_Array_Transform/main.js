
// Exercici 1.5 Array transformations

    // Exercici 1   Map
    arrayMap = [1, 2, 3, 4];

    const squares = arrayMap.map(square);

    function square(element){
        return Math.pow(element, 2)
    }

    console.log(`Squares: ${squares}`);


    // Exercici 2   Filter
    arrayFilter = [1, 2, 3, 4];

    const filtered = arrayFilter.filter(function(value){
        return value % 2 === 0;
    });
    
    console.log(`Filtered: ${filtered}`);


    // Exercici 3   Find
    arrayFind = [1, 10, 8, 11];

    const res = arrayFind.find(findOnce)

    function findOnce (num) {
        return num > 10;
    }
    console.log(`Find: ${res}`);


    // Exercici 4   Reduce
    let arrayReduce = [1, 10, 8, 11];

    let sum4 = arrayReduce.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );

    console.log(`Reduce: ${sum4}`);

    // Exercici 5
    let arrayLargo = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9];

    let linea = arrayLargo.filter(elemento => elemento >= 10).map(elemento => elemento * 2).reduce((acc, elemento) => acc + elemento, 0);
    console.log(`Función en una sola línea: ${linea}`);


    // Exerici 6
    someArray = [11, 12, 13,14];

    let resultado = someArray.some(greaterThanTen)

    function greaterThanTen(item) {
        return item > 10;
    }
    console.log(`Some greater than 10?, ${resultado}.`);