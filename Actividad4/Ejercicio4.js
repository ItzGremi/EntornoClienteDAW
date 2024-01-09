class Aula{
    constructor(edificio, numero){
        this.edificio = edificio;
        this.numero = numero;
    }

    //Método polimórfico
    abrirAula(){
        return `Se está abriendo un aula.`;
    }
}

class Musica extends Aula{
    constructor(edificio, numero, instrumento){
        super(edificio, numero);
        this.instrumentos = instrumento;
    }

    //Método polimórfico
    abrirAula(){
        return`La clase que toca es Música`;
    }
}

class Tecnologia extends Aula{
    constructor(edificio, numero, ordenador){
        super(edificio, numero);
        this.ordenador = ordenador;
    }

    //Método polimórfico
    abrirAula(){
        return `La clase que toca es Tecnología`;
    }
}

//Que mal se me da poner parámetros originales, pero bueno el código está bien.
var ClaseUno = new Tecnologia("Uno","Dos","Intel");
document.write(ClaseUno.abrirAula());