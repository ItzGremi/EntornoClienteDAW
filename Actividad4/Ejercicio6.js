class Pelicula {
    /* Introducimos en el parámetro del constructor la cadena JSON*/
    constructor(jsonCadena) {
    /* Convertimos la cadena JSON en un objeto JavaScript*/
      const data = JSON.parse(jsonCadena);
  
        /* Ponemos el this. atributo igualado al objeto. nombre del atributo */
      this.nombre = data.nombre;
      this.añoEstreno = data.añoEstreno;
      this.duracion = data.duracion;
      this.genero = data.genero;
      this.actoresPrincipales = data.actoresPrincipales;
      this.cartelPromocionalURL = data.cartelPromocionalURL;
      this.director = data.director;
    }
  /* Realizamos el método para mostrar toda la información de la película. */
    mostrarInformacion() {
      document.write(`Información de la película: <br>`);
      document.write(`Nombre: ${this.nombre} <br>`);
      document.write(`Año de estreno: ${this.añoEstreno} <br>`);
      document.write(`Duración: ${this.duracion} minutos <br>`);
      document.write(`Género: ${this.genero} <br>`);
      document.write('Actores principales: <br>');
      this.actoresPrincipales.forEach((actor, index) => {
        document.write(`${index + 1}. ${actor} <br>`);
      });
      document.write(`Director: ${this.director} <br>`);
      document.write(`URL del cartel promocional: ${this.cartelPromocionalURL} <br>`);
    }
  }
  
  //Rellenamos una variable con la cadena JSON
  const jsonCadena = `
  {
    "nombre": "Misión Imposible",
    "añoEstreno": 1996,
    "duracion": 110,
    "genero": "Acción/Suspense",
    "actoresPrincipales": ["Tom Cruise", "Emmanuelle Beart", "Ving Rhames"],
    "cartelPromocionalURL": "AquíElCartel",
    "director": "Brian de Palma"
  }
  `;
  
  const MisionImposible = new Pelicula(jsonCadena);
  MisionImposible.mostrarInformacion();
  