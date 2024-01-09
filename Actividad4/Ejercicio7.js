var fechas = {
    difFechas: function(fechaUno, fechaDos){
        //Si restas las fechas te da la diferencia en Milisegundos y hay que cambiarlo.
        var diferenciaMilisegundos = new Date(fechaUno) - new Date(fechaDos);
        var diferenciaDias = Math.abs(diferenciaMilisegundos / (1000 *60 *60 *24));
        return ` Entre ${fechaUno} y ${fechaDos} hay ${diferenciaDias} días de diferencia. <br>`;
    },

    maxFechas: function(fechaUno, fechaDos){
        //Esto significa que si la fecha uno es mayor devuelve esa, sino devuelve fecha dos.
        return `La mayor fecha es ${fechaUno > fechaDos ? fechaUno : fechaDos} <br>`;
    },

    testFecha: function(fecha){
        /*Date.parse analiza la fecha, si es correcta te da milisegundos, si no lo es te da NaN. Por tanto 
        si no es NaN lo devuelve ya que es correcta la fecha*/
        if(!isNaN(Date.parse(fecha))){
            return `¡La fecha ${fecha} existe! <br>`;
        } else {
            return `¡La fecha ${fecha} no existe! <br>`
        }
    },

    mañanaFecha: function(fecha){
        var mañana = new Date(fecha);
        mañana.setDate(mañana.getDate() + 1);
        return `Mañana es ${mañana} <br>`;
    },

    ayerFecha: function(fecha){
        var ayer = new Date(fecha);
        ayer.setDate(ayer.getDate() - 1);
        return `Ayer fue ${ayer} <br>`;
    }
}

document.write(fechas.difFechas('2023-07-12', '2023-06-05'));
document.write(fechas.maxFechas('2023-07-12', '2023-06-05'));
document.write(fechas.testFecha('2023-07-12'));
document.write(fechas.mañanaFecha('2023-07-12'));
document.write(fechas.ayerFecha('2023-07-12'));
