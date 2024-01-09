var respuesta = prompt("Pon el apellido del primer presidente de la democracia");

while(respuesta !=="Suarez"){
    alert("¡Incorrecto!");
    var respuesta = prompt("Pon el apellido del primer presidente de la democracia");
}

if(respuesta == "Suarez"){
    alert("¡Buen trabajo!");
}