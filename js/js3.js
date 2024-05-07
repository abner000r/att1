function calcularSueldo() {
  var salario = parseFloat(document.getElementById("salario").value);
  var bonificacion = parseFloat(document.getElementById("bonificacion").value);
  var comisiones = parseFloat(document.getElementById("comisiones").value);
  var ahorro = parseFloat(document.getElementById("ahorro").value);
  var prestamos = parseFloat(document.getElementById("prestamos").value);

  var totalGanado =  salario + bonificacion + comisiones;
  var igss = salario * 0.0483;
  var totalDescuentos = ahorro + igss + prestamos;
  var sueldoLiquido = totalGanado - totalDescuentos;

  document.getElementById("totalGanado").textContent = totalGanado.toFixed(2);
  document.getElementById("igss").textContent = igss.toFixed(2);
  document.getElementById("totalDescuentos").textContent = totalDescuentos.toFixed(2);
  document.getElementById("sueldoLiquido ").textContent = sueldoLiquido.toFixed(2);
}