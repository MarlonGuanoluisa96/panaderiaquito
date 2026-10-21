const radiosPago = document.querySelectorAll('input[name="tipoPago"]'); // Obtiene los elementos tipoPago
const contenedorComprobante = document.getElementById('contenedorComprobante'); // Obtiene el elemto que tiene
radiosPago.forEach(radio => { //Recorre cada radio 
    radio.addEventListener('change', (e) => {  // Detector de evento 
        if (e.target.value === 'transferencia') {
            // Si es transferencia, mostramos el campo
            contenedorComprobante.style.display = 'block';
        } else {
            // Si es cualquier otra opción (Efectivo), lo ocultamos
            contenedorComprobante.style.display = 'none';
        }
    });
});