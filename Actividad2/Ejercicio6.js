// Crear un conjunto vacío
const conjunto = new Set();

// Arrays con elementos
const array1 = [12, 12, 12, 14];
const array2 = [11, 11, 13, 15];
const array3 = ["i", "j", "k", "l"];

// Agregar elementos de los arrays al conjunto

array1.forEach((elemento) => conjunto.add(elemento));
array2.forEach((elemento) => conjunto.add(elemento));
array3.forEach((elemento) => conjunto.add(elemento));

// Calcular cuántos elementos contiene el conjunto

let tamaño = conjunto.size;

// Mostrar la cantidad de elementos

document.write(`Este conjunto contiene ${tamaño} elementos. <br>`);

// Recorrer el conjunto y mostrar sus elementos

conjunto.forEach((elemento)=> document.write(`Elemento 1: ${elemento} <br>`));

/* Aparecen en ese orden porque es el orden que he escogido para ir agregándolos y no hay números repetidos porque en 
los conjuntos no se permite. */
