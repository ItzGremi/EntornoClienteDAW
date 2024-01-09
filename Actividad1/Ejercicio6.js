for (var hora = 9; hora <= 21; hora++) {

    for (var minuto = 0; minuto < 60; minuto += 5) {

        var mensaje = "Hora: " + hora + ":" + minuto;

    if(minuto<10){

        var mensaje = "Hora: " + hora + ":0" + minuto;
        document.write(mensaje + "<br>");

    } else {

        document.write(mensaje + "<br>");
        
    }
        
    }
            }