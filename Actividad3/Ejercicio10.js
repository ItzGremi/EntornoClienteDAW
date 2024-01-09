var cartonesIniciales = [];

function generarCarton() {
    var carton = [];

    // Inicializamos las filas
    for (let i = 0; i < 8; i++) {
        carton[i] = [];
    }

    return carton;
}

function llenarCarton(carton) {
    document.write(`<table border='1'>`);
    let guionesRestantes = 12;

    // Conjunto para rastrear números ya generados en el cartón
    let numerosGenerados = new Set();

    for (let i = 0; i < 8; i++) {
        document.write(`<tr>`);
        for (let j = 0; j < 4; j++) {
            let nuevoNumero;

            // Aleatoriamente reemplazar 12 de esos números con '-'
            if (guionesRestantes > 0 && Math.random() < 0.5) {
                nuevoNumero = '-';
                guionesRestantes--;
            } else {
                // Generar número único que no esté en el cartón
                do {
                    nuevoNumero = Math.floor(Math.random() * 90) + 1;
                } while (numerosGenerados.has(nuevoNumero));

                // Agregar el nuevo número al conjunto
                numerosGenerados.add(nuevoNumero);
            }

            carton[i][j] = nuevoNumero;

            document.write(`<td>${nuevoNumero}</td>` + " ");
        }
        document.write("</tr>");
    }
    document.write(`</table>`);
    return carton; // Devolvemos el carton generado
}

function numeroCartones(numero) {
    for (let i = 0; i < numero; i++) {
        document.write(`<br> <b>Cartón Número ${i + 1}</b> <br> <br>`);
        const carton = generarCarton();
        cartonesIniciales.push(carton); // Agregamos el carton al array de cartonesIniciales
        llenarCarton(carton);
    }
}

// Inicializa los primeros cinco cartones
numeroCartones(5);

function actualizarCarton(carton, bola) {
    // Recorrer el carton y verificar si el número coincide con la bola
    for (let i = 0; i < carton.length; i++) {
        for (let j = 0; j < carton[i].length; j++) {
            // Solo actualizar si el elemento no es '-'
            if (carton[i][j] === bola) {
                carton[i][j] = '-';
                document.write(`<br>¡Bola ${bola} coincide con Cartón!`);
            }
        }
    }
}

function partidaBingo() {
    let bolasGeneradas = new Set();
    let bolasMarcadas = new Set();
    let hayGanador = false;

    for (let turno = 1; turno <= 90; turno++) {
        let bola = Math.floor(Math.random() * 90) + 1;

        while (bolasGeneradas.has(bola) || bolasMarcadas.has(bola)) {
            bola = Math.floor(Math.random() * 90) + 1;
        }

        bolasGeneradas.add(bola);
        document.write(`<br> <b>Bola ${bola}</b> <br>`);

        // Marcar la bola en los cartones
        for (let i = 0; i < cartonesIniciales.length; i++) {
            actualizarCarton(cartonesIniciales[i], bola);

            document.write(`<br> <b>Cartón Número ${i + 1} después del turno: ${turno}</b> <br> <br>`);
            imprimirCarton(cartonesIniciales[i]);
        }

        if (ganadorBingo()) {
            hayGanador = true;
            break;
        }
    }

    if (!hayGanador) {
        document.write("No hay ganador después de 90 turnos.<br>");
    }

    return hayGanador;
}


// Función para imprimir un cartón en formato de tabla
function imprimirCarton(carton) {
    document.write(`<table border='1'>`);
    for (let i = 0; i < 8; i++) {
        document.write(`<tr>`);
        for (let j = 0; j < 4; j++) {
            document.write(`<td>${carton[i][j]}</td>` + " ");
        }
        document.write("</tr>");
    }
    document.write(`</table>`);
}

function ganadorBingo() {
    for (let i = 0; i < cartonesIniciales.length; i++) {
        var contadorGanar = 0;

        for (let j = 0; j < 8; j++) {
            for (let k = 0; k < 4; k++) {
                if (cartonesIniciales[i][j][k] === '-') {
                    contadorGanar++;
                }
            }
        }

        if (contadorGanar === 32) {
            document.write(`¡El ganador es el cartón número ${i + 1}!<br>`);
            return true; // Indicar que hay un ganador
        }
    }

    return false; // No hay ganador todavía
}

// Simulación del juego
for (var turno = 1; turno <= 90; turno++) {
    console.log(`Turno ${turno}:`);
    if (partidaBingo()) {
        break; // Terminar el juego si hay un ganador
    }
}









  
  

