// Crear un tablero de Tres en Raya
const tablero = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]
  ]; 
  
  // Función para verificar si un jugador ha ganado
  function haGanado(tablero, jugador) {
    // Verificar filas y columnas
    for (let i = 0; i < 3; i++) {
      if (
        (tablero[i][0] === jugador && tablero[i][1] === jugador && tablero[i][2] === jugador) ||
        (tablero[0][i] === jugador && tablero[1][i] === jugador && tablero[2][i] === jugador)
      ) {
        return true;
      }
    }
  
    // Verificar diagonales
    if (
      (tablero[0][0] === jugador && tablero[1][1] === jugador && tablero[2][2] === jugador) ||
      (tablero[0][2] === jugador && tablero[1][1] === jugador && tablero[2][0] === jugador)
    ) {
      return true;
    }
  
    return false;
  }
  
  // Verificar si alguien ha ganado
  if (haGanado(tablero, "X")) {
    console.log("El jugador X ha ganado.");
  } else if (haGanado(tablero, "O")) {
    console.log("El jugador O ha ganado.");
  } else {
    console.log("La partida ha terminado en empate o sigue en curso.");
  }