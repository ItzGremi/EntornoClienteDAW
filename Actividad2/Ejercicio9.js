let diccionario = {
    "casa": {
      "inglés": "house",
      "francés": "maison",
      "alemán": "Haus"
    },
    "perro": {
      "inglés": "dog",
      "francés": "chien",
      "alemán": "Hund"
    },
    "coche": {
      "inglés": "car",
      "francés": "voiture",
      "alemán": "Auto"
    },
    "manzana": {
      "inglés": "apple",
      "francés": "pomme",
      "alemán": "Apfel"
    },
    "amarillo": {
      "inglés": "yellow",
      "francés": "jaune",
      "alemán": "gelb"
    }
  };
  
  //Hago una función para que introduzcas la palabra e idioma a traducir.
  function palabraTraducir(palabra, idioma) {
    if (diccionario[palabra] && diccionario[palabra][idioma]) {
      document.write(`Palabra: ${palabra} <br> Traducción: ${diccionario[palabra][idioma]}`);
    } else {
      document.write(`No se encontró traducción para la palabra ${palabra} en ${idioma}`);
    }
  }
  
  //Utilizo la función.
  palabraTraducir("manzana", "alemán");