let numerosPares = [];

for (let i = 0; i < 50; i++) {
  let numero = Math.floor(Math.random() * 51) * 2;
  numerosPares.push(numero);
}

for (let i = 0; i < numerosPares.length; i++) {
  document.write(numerosPares[i] + `<br>`);
}
