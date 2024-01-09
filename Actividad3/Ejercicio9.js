function filtroEspañol(palabras){
    //Hago una constante con todos los carácteres españoles.
    const carEsp = /[a-zA-ZáéíóúñÁÉÍÓÚÜÑ]/;
   function filtroPalabra(palabra){
    //Separo la palabra y cojo solo los carácteres que son españoles de ella.
    var palabraSeparada = palabra.split('').filter(car=>carEsp.test(car));
    //Uno la palabra de nuevo.
    var palabraFiltrada = palabraSeparada.join('');
    return palabraFiltrada;
   }
   //Hago un array con las palabras ya filtradas
   var listaPalabras = palabras.map(filtroPalabra);
   return listaPalabras;
}
  
  const arrayPalabras = ["Enri^que", "Pon$me", "Di&ez", "Je^j$e"];
  const palabrasFiltradas = filtroEspañol(arrayPalabras);
  
  document.write(`Palabras originales: ${arrayPalabras} <br>`);
  document.write(`Palabras filtradas: ${palabrasFiltradas} <br>`);
  