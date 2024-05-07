document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.getElementById('formulario');
    var resultado = document.getElementById('resultado');
    var calcularBoton = document.getElementById('calcular');
  
    calcularBoton.addEventListener('click', function() {
      var sueldo = parseFloat(formulario.sueldo.value) || 0;
      var anios = parseFloat(formulario.anios.value) || 0;
      var meses = parseFloat(formulario.meses.value) || 0;
      var pendiente = parseFloat(formulario.pendiente.value) || 0;
      var deudas = parseFloat(formulario.deudas.value) || 0;
  
      var bono14 = (sueldo / 12) * meses;
      var aguinaldo = (sueldo / 12) * meses;
  
      var indemnizacion = (sueldo * anios) + bono14 + aguinaldo + pendiente - deudas;
  
      resultado.innerHTML = ' <h3>Indemnización Calculada:</h3>' +
                            '<p>Indemnización Total: Q' + indemnizacion.toFixed(2) + '</p>';
    });
  });