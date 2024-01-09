let array = [true,false,true,true,false,false,true,true,false,true];
  
//Dices que no utilicemos el bucle for, pero supongo que si podemos con forEach.

  array.forEach((element, index) => {
    if (element === true) {
      document.write(`La posición ${index} contiene 'true' <br>`);
    }
  });
  


