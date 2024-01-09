let mapa = new Map();

//Introduzco elementos del map

mapa.set("clave1", "Manzana");
mapa.set("clave2", "Banana");
mapa.set("clave3", "Naranja");
mapa.set("clave4", "Pera");
mapa.set("clave5", "Uva");

//Ordeno únicamente los valores del map sin tener en cuenta las claves
let mapaOrdenado = Array.from(mapa.values()).sort();

//Lo escribo en pantalla
document.write(mapaOrdenado);