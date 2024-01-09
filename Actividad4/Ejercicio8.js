class Trigonometria {
    /* Aquí introducimos los métodos introduciendo el ángulo como parámetro y utilizamos la función Math para realizar las operaciones. */
    seno(angulo) {
      return Math.sin(angulo);
    }
  
    coseno(angulo) {
      return Math.cos(angulo);
    }
  
    tangente(angulo) {
      return Math.tan(angulo);
    }
  
    arcoseno(elemento) {
      return Math.asin(elemento);
    }
  
    arcocoseno(elemento) {
      return Math.acos(elemento);
    }
  
    arcotangente(elemento) {
      return Math.atan(elemento);
    }
  }
  
  /* Creamos un objeto llamado trigonometria */
  const trigonometria = new Trigonometria();
  
  // Ángulo en radianes (que honestamente no se mucho de esto pero Internet me ha ayudado un poquito)
  const angulo = Math.PI / 4; // 45 grados
  
  document.write(`Seno(${angulo}): ${trigonometria.seno(angulo)} <br>`);
  document.write(`Coseno(${angulo}): ${trigonometria.coseno(angulo)} <br>`);
  document.write(`Tangente(${angulo}): ${trigonometria.tangente(angulo)} <br>`);
  document.write(`Arcoseno(0.707): ${trigonometria.arcoseno(0.707)} <br>`);
  document.write(`Arcocoseno(0.707): ${trigonometria.arcocoseno(0.707)} <br>`);
  document.write(`Arcotangente(1): ${trigonometria.arcotangente(1)} <br>`);
  