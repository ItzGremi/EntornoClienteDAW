var respuesta = prompt("Introduce tu edad");

if(respuesta >= 0 && respuesta < 12){
    alert("Eres un niño.");
} else if(respuesta >= 13 && respuesta < 26){
    alert("Eres joven.");
} else if(respuesta >= 27 && respuesta < 60){
    alert("Eres un adulto.");
} else if(respuesta >= 60){
    alert("Eres un jubilado.");
}