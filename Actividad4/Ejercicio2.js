class telefonoMovil{
    constructor(cpu, ram, almacenamiento, ancho, alto, numCamaras){
        this.cpu = cpu;
        this.ram = ram;
        this.almacenamiento = almacenamiento;
        this.ancho = ancho;
        this.alto = alto;
        this.numCamaras = numCamaras;
    }

    toString(){
        return `<br> <br> Teléfono Móvil: <br>
      CPU: ${this.cpu} <br>
      RAM: ${this.ram} <br>
      Almacenamiento: ${this.almacenamiento} <br>
      Ancho: ${this.ancho} <br>
      Alto: ${this.alto} <br>
      Número de Cámaras: ${this.numCamaras}`;
    }
}

const telefonoUno = new telefonoMovil('Snapdragon', '6 GB', '128 GB', '5.8 pulgadas', '150 mm', 2);
const telefonoDos = new telefonoMovil('Apple', '4 GB', '256 GB', '6.1 pulgadas', '160 mm', 3);
const telefonoTres = new telefonoMovil('Samsung', '8 GB', '64 GB', '6.4 pulgadas', '165 mm', 4);
const telefonoCuatro = new telefonoMovil('MediaTek', '6 GB', '32 GB', '6.2 pulgadas', '155 mm', 2);

document.write(telefonoUno.toString());
document.write(telefonoDos.toString());
document.write(telefonoTres.toString());
document.write(telefonoCuatro.toString());