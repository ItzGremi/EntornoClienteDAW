function cadenaInvertida(palabra){
    palabraSeparada = palabra.split('');

    for(let i=palabraSeparada.length-1;i>=0;i--){
        document.write(palabraSeparada[i]);
    }

}

cadenaInvertida("hola");