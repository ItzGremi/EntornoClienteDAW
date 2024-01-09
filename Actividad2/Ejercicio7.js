let mapa = new Map();
mapa.set("12345678A", "Juan");
mapa.set("98765432B", "María");
mapa.set("56789012C", "Pedro");
mapa.set("34567890D", "Ana");
mapa.set("23456789E", "Luis");
mapa.set("87654321F", "Laura");
mapa.set("65432123G", "Carlos");
mapa.set("43212345H", "Elena");
mapa.set("78901234I", "Sergio");
mapa.set("56781234J", "Marta");

document.write(`Sin modificar: <br><br>`);

mapa.forEach((valor,clave)=> 
document.write(`Nombre: ${valor} Clave: ${clave} <br>`));

//Modifico el primero
mapa.set("12345678A", "Pedro");

document.write(`<br>Ya modificado: <br><br>`);

mapa.forEach((valor,clave)=> 
document.write(`Nombre: ${valor} Clave: ${clave} <br>`));