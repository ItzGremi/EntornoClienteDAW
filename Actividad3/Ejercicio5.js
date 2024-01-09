(function fechaHora(){

const fecha = new Date();

const dameFecha = fecha.toLocaleDateString();
const dameHora = fecha.toLocaleTimeString();

document.write(`Hoy es: ${dameFecha} <br> Son las: ${dameHora}`);

})();