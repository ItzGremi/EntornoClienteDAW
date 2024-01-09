function adivina(palabra, ...letras){
const palabraSeparada = palabra.split('');

const conjuntoLetras = palabraSeparada.map(letra =>{
    if(letras.includes(letra)){
        return letra;
    } else {
        return '-';
    }
});

document.write(conjuntoLetras.join(' '));

}
  
  // Ejemplo
  adivina("sargento", "a", "e", "i", "o", "u", "d", "n");
