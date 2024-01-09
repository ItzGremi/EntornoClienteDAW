var respuesta = prompt("Pon el nombre y apellido del primer presidente de la democracia");

while(respuesta !=="Adolfo Suarez"){
    if(respuesta == "Adolfo"){
        alert("Te falta el apellido");
        var respuesta = prompt("Pon el nombre apellido del primer presidente de la democracia");

    } else if(respuesta == "Suarez"){
        alert("Te falta el nombre");
        var respuesta = prompt("Pon el nombre apellido del primer presidente de la democracia");
    } else{
        alert("ERROR. Inténtelo de nuevo.");
    var respuesta = prompt("Pon el nombre apellido del primer presidente de la democracia");

    }
    
}

if(respuesta == "Adolfo Suarez"){
    alert("¡Buen trabajo!");
} 