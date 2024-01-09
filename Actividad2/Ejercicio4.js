let array = [];

// Hacemos un array de 10 números aleatorios múltiplos de 5
for (let i = 0; i < 10; i++) {
    let random;
    do {
        random = Math.floor(Math.random() * 26) * 5;
    } while (random === 0);
    array.push(random);
}

// Si el primer elemento es menor de 50, lo reemplazamos por otro mayor o igual a 50
if (array[0] < 50) {
    do {
        random = Math.floor(Math.random() * 26) * 5;
    } while (random === 0 || random < 50);
    array.splice(0, 1, random);
}

// Si el último elemento es mayor de 50, lo reemplazamos por otro menor o igual a 50
if (array[9] > 50) {
    do {
        random = Math.floor(Math.random() * 26) * 5;
    } while (random === 0 || random > 50);
    array.splice(9, 1, random);
}

// Ponemos el array en pantalla
for (const numero of array) {
    document.write(numero + `<br>`);
}


