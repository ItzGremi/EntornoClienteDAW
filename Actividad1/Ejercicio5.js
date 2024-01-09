

        
for (var hora = 9; hora <= 21; hora++) {
for (var minuto = 0; minuto < 60; minuto += 30) {
    
    var esHoraEnPunto = minuto === 0;

 
    var mensaje = "Hora: " + hora + ":" + minuto;
    
    if (esHoraEnPunto) {
        mensaje += "0 en punto";
    } else {
        mensaje += " y media";
    }

    document.write(mensaje + "<br>");
}
        }
