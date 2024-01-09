function esPalindroma(palabra) {
    // Quitamos los espacios en blanco y ponemos todo en minúsculas
    palabra = palabra.replace(' ', '').toLowerCase();
    palabra = palabra.replace('á','a');
    palabra = palabra.replace('é','e');
    palabra = palabra.replace('í','i');
    palabra = palabra.replace('ó','o');
    palabra = palabra.replace('ú','u');
    
    if (palabra.length <= 1) {
      return true;
    } else if (palabra[0] === palabra[palabra.length - 1]) {
      return esPalindroma(palabra.slice(1, -1));
    } else {
      return false;
    }
  }
  
  function verificarPalindroma(palabra) {
    if (esPalindroma(palabra)) {
      document.write(`La palabra ${palabra} es palíndroma. <br>`);
    } else {
      document.write(`La palabra ${palabra} no es palíndroma. <br>`);
    }
  }
  
  verificarPalindroma("aviva");
  verificarPalindroma("sagas");
  verificarPalindroma("amó la paloma");
  
  
  
  
  