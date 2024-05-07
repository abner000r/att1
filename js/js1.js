document.addEventListener('DOMContentLoaded', function() {
  var formulario = document.getElementById('formulario');
  var tbodyEmpleados = document.getElementById('tbodyEmpleados');
  var guardarBoton = document.getElementById('guardar');
  var eliminarBoton = document.getElementById('eliminar');

  guardarBoton.addEventListener('click', function() {
    var nombre = formulario.nombre.value;
    var puesto = formulario.puesto.value;
    var salario = formulario.salario.value;
    var date = formulario.date.value;

    var fila = tbodyEmpleados.insertRow();
    var celdaNombre = fila.insertCell(0);
    var celdaPuesto = fila.insertCell(1);
    var celdaSalario = fila.insertCell(2);
    var celdadate = fila.insertCell(3);
    
    celdaNombre.textContent = nombre;
    celdaPuesto.textContent = puesto;
    celdaSalario.textContent = salario;
    celdadate.textContent = date;
    
    // Mostrar los datos en pantalla
    alert('Empleado Guardado:\nNombre: ' + nombre + '\nPuesto:' + puesto +  '\nSalario: ' + salario + '\ndate:' + date);
  });
  
  eliminarBoton.addEventListener('click', function() {
    if (tbodyEmpleados.rows.length > 0) {
      tbodyEmpleados.deleteRow(-1); // Elimina la última fila
    } else {
      alert('No hay empleados para eliminar.');
    }
  });

});
