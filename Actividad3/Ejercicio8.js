function contieneTildes(cadena) {
    //Separamos la cadena en carácteres separados
    cadenaSeparada = cadena.split('');

    /*Recorremos la cadena de carácteres y comprobamos si tienen o no tildes. En caso de que tenga
    devuelve true, si ya ha sido recorrida por completo y no contiene devuelve false.*/
    for (let i = 0; i < cadenaSeparada.length; i++) {
        if(cadenaSeparada[i] === 'á' || cadenaSeparada[i] === 'é' || cadenaSeparada[i] === 'í'
        || cadenaSeparada[i] === 'ó' || cadenaSeparada[i] === 'ú' || cadenaSeparada[i] === 'Á'
        || cadenaSeparada[i] === 'É' || cadenaSeparada[i] === 'Í' || cadenaSeparada[i] === 'Ó'
        || cadenaSeparada[i] === 'Ú'){
            return true;
        } else if(i === cadenaSeparada.length -1){
            return false;
        }
        
    }
  }
  
  function filtrarSinTildes(...array){
    //Filtramos todas las palabras que no contengan tildes.
    var arrayFiltrado = array.filter((elemento) => !contieneTildes(elemento));
    document.write(arrayFiltrado);
  }
  
  filtrarSinTildes("habló","habla","conejo","estándar","Éste","caja");
  
  