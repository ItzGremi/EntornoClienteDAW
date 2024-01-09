var usuario = {
    user: "Sergio",
    password: "1234",

    autenticar: function(){
        var userMetido = prompt("Introduce tu usuario");
        if(userMetido === usuario.user){
            var passMetida = prompt("Introduce tu contraseña");
            if(passMetida === usuario.password){
                document.write(`¡Bienvenido ${usuario.user} mi rey!`);
            } else{
                document.write(`Has introducido mal la contraseña, escríbelo bien :)`);
            }
        } else {
            document.write(`El usuario introducido no existe, escríbelo bien :)`);
        }
    }
}

usuario.autenticar();