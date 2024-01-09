var respuesta = prompt("Introduce tu edad");

switch(true){
    case (respuesta >= 0 && respuesta < 12): 
        alert("Eres un niño.");
        break;
    case (respuesta >= 13 && respuesta < 26):
        alert("Eres joven.");
        break;
    case (respuesta >= 27 && respuesta < 60):
        alert("Eres un adulto.");
        break;
    case (respuesta >60):
        alert("Eres un jubilado.");
        break;
    default:
        alert("Tu edad no puede ser negativa.");
        break;

}

