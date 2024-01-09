function Conversion(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }

  var fahrenheit = 68; // Grados que queremos covertir
  var celsius = Conversion(fahrenheit);
  document.write(fahrenheit + " grados Fahrenheit son equivalentes a " + celsius + " grados Celsius.");
  