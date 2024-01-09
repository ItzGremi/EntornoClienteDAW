const mayorCadena = (cadenaUno, cadenaDos) => {
cadenaUnoSeparada = cadenaUno.split('');
cadenaDosSeparada = cadenaDos.split('');
var contUno = 0;
var contDos = 0;

cadenaUnoSeparada.map( letra => {
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" ||
     letra === "u"){
        contUno+=1;
     }
});

cadenaDosSeparada.map( letra => {
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" ||
     letra === "u"){
        contDos+=1;
     }
});

document.write(`La palabra número uno tiene ${contUno} vocales. <br>
La palabra número dos tiene ${contDos} vocales. <br>
La palabra con más vocales es ${cadenaDos}`);

}

mayorCadena("hola","aerolinea");