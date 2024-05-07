document.addEventListener('DOMContentLoaded', function(){
    var formulario = document.getElementById('formulario');
    var tbodyTotalG = document.getElementById('TotalG');
    var guardarBoton = document.getElementById('guardar');


    guardarBoton.addEventListener8('click',function(){
        var salario = formulario.salario.value;
        var bonificAcion = formulario.bonifiAcion.value;
        var comisiones = formulario.comisiones.value;

        var fila = tbodyEmpleados.insertRow();
        var celdaNombre = fila.insertCell(0);
        var celdaPuesto = fila.insertCell(1);
        var celdaSalario = fila.insertCell(2);
        var celdadate = fila.insertCell(3);
        
        celdaNombre.textContent = nombre;
        celdaPuesto.textContent = puesto;
        celdaSalario.textContent = salario;
        celdadate.textContent = date;
    })

    alert('Empelado guardar: \nsalario: ' + salario +' \nbonificacion: ' + bonificacion + '\nComisiones:'+ bonificacion )

});

