// Exercici 1.7 Promises & Async/Await

    // Exercici 1
    // Maker
    let getGreeted = () => {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                resolve('Hola món');
            }, 2000);
        }); 
    }

    // Exercici 2
    // Receiver
    const promise = getGreeted();
    promise.then(function(data){
        console.log(data);
    });
  
    // Exercici 3
    // Example with reject:
    let input = 'Hola';
    let greet = () => {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                if (input === 'Hola') {
                    resolve ('Ex. 3: Promesa resolta');
                } else {
                    reject('Ex. 3: Promesa rebutjada');
                }
            }, 2000);
        }); 
    }
            
    const response = greet();
    response.then(
        function(mensResolve){
            console.log(mensResolve);
        },
        function(mensReject){
            console.log(mensReject);
        }
    );

    // Exercici 4
    // Async/Await for ex1, printing result
    async function start() {
        const result = await getGreeted();
        console.log(`Ex. 4: ${result}`);
    }
    start();

    // Exercici 5
    // Modification of ex. 4 using try/catch
    async function start2() {
        try {
            const result = await getGreeted();
            console.log(`Ex. 5: ${result}`);
        } catch (error) {
            console.log(`ERROR: ${error}`);
        }
    }
    start2();

    // Exercici 6
    let promiseOne = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Promesa 1 resolta.');
            }, 2000);
        });
    }
    
    let promiseTwo = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Promesa 2 resolta.');
            }, 3000);
        });
    }
    
    Promise.all([promiseOne(), promiseTwo()])
        .then(() => {
            console.log('Ex. 6: Ambdues promeses resoltas.');
            
        })
        .catch((error) => {
            console.error('Error:', error);
        });