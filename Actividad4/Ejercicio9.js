
/* Creo la expresión regular. Toda expresión va encerrada entre dos '/'. Después ponemos el '^' y significa que 
la expresión debe empezar con ello. Posteriormente para poner barras hay que poner delante una barra invertida. 
A continuación ponemos '[^]' que significa que lo que haya dentro no debe estar y después un + para que la condición se mire más de una vez.
Para poner el punto hay que poner también una barra invertida y después con lo que tiene que finalizar hay que poner dólar al final. La i 
del final ignora mayúsculas y minúsculas. */

const regular = /^https:\/\/[^ñ]+\.es$/i;

var url = prompt("Introduce una URL para ver si es válida o no.");

if(regular.test(url)){
    document.write("La URL es válida.");
} else {
    document.write("La URL no es válida.");
}