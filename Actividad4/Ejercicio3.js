class Telefono {
    constructor(marca){
        this.marca = marca;
    }

    llamar(persona) {
        return `Llamando a ${persona} <br>`;
    }
}

class TelefonoFijo extends Telefono{
    constructor(marca, modelo){
        super(marca);
        this.modelo = modelo;
    }

    //Honestamente no sabía que método ponerle 
    descolgarFijo(){
        return `Descolgando supongo jajajaj <br>`;
    }
}

class TelefonoMovil extends Telefono{
    constructor(marca, ram, espacio){
        super(marca);
        this.ram = ram;
        this.espacio = espacio;
    }

    enviarMensaje(mensaje){
        return `Enviando '${mensaje}' <br>`;
    }
}

//Me estoy dando cuenta de que no se nada de teléfonos fijos 
var TelefonoFijoUno = new TelefonoFijo("marcaFijo", "modeloFijo");
var TelefonoMovilUno = new TelefonoMovil("Samsung","8GB","128GB");

document.write(TelefonoMovilUno.enviarMensaje("Hola Enrique"));
document.write(TelefonoMovilUno.llamar("Enrique"));
document.write(TelefonoFijoUno.descolgarFijo());
document.write(TelefonoFijoUno.llamar("Enrique"));