class Etiqueta{
    constructor(nombre,ref){
        this.nombre=nombre;
        this.ref=ref;
    }
    /* Hago la función para mostrar el artículo. Suelo mostrarlo en pantalla en vez de en consola porque 
    me parece más bonito. */
    mostrarArticulo(){
        document.write(`Nombre: ${this.nombre} <br>`);
        document.write(`Código de referencia: ${this.ref} <br>`);
    }

    /* Validamos la etiqueta. */
    validarEtiqueta(){
        /* Explicación de la constante regular: ^ para indicar que tiene que comenzar por algo y a continuación
        \d{4} que indica que son 4 numeros que pueden ser incluso decimales. Un - y [a-zA-Z]{5} indica que 5 letras 
        ya sean minúsculas o mayúsculas \/ representa una barra \d{2} dos números una _ y \d$ que finaliza por otro 
        número. */
        const regular = /^\d{4}-[a-zA-Z]{5}\/\d{2}_\d$/;
        var validacion = regular.test(this.ref);
        document.write(`La etiqueta ${validacion ? 'sí' : 'no'} es válida.`);
    }
}

//Creo el artículo uno.
articuloUno = new Etiqueta("Camiseta","2022-abCDe/25_9");

//Utilizo el artículo junto a sus métodos.
articuloUno.mostrarArticulo();
articuloUno.validarEtiqueta();
  