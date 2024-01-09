//Hacemos un string de JSON.
const jsonString = '{"nombre": "Sergio", "edad": 19, "ciudad": "España"}';

//Convertimos el string de JSON en un objeto de JavaScript.
const jsonObject = JSON.parse(jsonString);

//Recorremos el objeto json con un for in y lo mostramos por consola y de paso también en pantalla.
for(const elemento in jsonObject){
    console.log(`${elemento}: ${jsonObject[elemento]} <br>`);
    document.write(`${elemento}: ${jsonObject[elemento]} <br>`);
}

