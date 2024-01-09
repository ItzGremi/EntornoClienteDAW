var resultadoUno = 0;
var resultadoDos = 0;
var dadoUno = 0;
var dadoDos = 0;
var dadoTres = 0;
var dadoCuatro = 0;

function jugar(rondas=5){

 

    for (let i = 1; i <= rondas; i++) {
       
        document.write(`Ronda número ${i} <br> <br>`);
        dadoUno = Math.round(Math.random()*5+1);
        document.write(`Primer dado J1: ${dadoUno} <br>`);
        dadoDos = Math.round(Math.random()*5+1);
        document.write(`Segundo dado J1: ${dadoDos} <br>`);
        resultadoUno += dadoUno + dadoDos;

        dadoTres = Math.round(Math.random()*5+1);
        document.write(`Primer dado J2: ${dadoTres} <br>`);
        dadoCuatro = Math.round(Math.random()*5+1);
        document.write(`Segundo dado J2: ${dadoCuatro} <br> <br>`);

        resultadoDos += dadoTres + dadoCuatro;
    }
    
}

jugar(10);

document.write(`RESULTADOS: <br><br>`);
document.write(`Puntos totales del jugador Uno: ${resultadoUno} <br>`);
document.write(`Puntos totales del jugador Dos: ${resultadoDos} <br>`);

if(resultadoUno > resultadoDos){
    document.write(`Ha ganado el jugador Uno con ${resultadoUno} puntos. <br>`);
} else if(resultadoDos > resultadoUno){
    document.write(`Ha ganado el jugador Dos con ${resultadoDos} puntos. <br> <br>`);
} else {
    document.write(`Se ha empatado con ${resultadoUno} puntos.`)
}
