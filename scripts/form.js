const radiosPago = document.querySelectorAll('input[name="tipoPago"]');
const contenedorComprobante = document.getElementById('contenedorComprobante');
radiosPago.forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'transferencia') {
            // Si es transferencia, mostramos el campo
            contenedorComprobante.style.display = 'block';
        } else {
            // Si es cualquier otra opción (Efectivo), lo ocultamos
            contenedorComprobante.style.display = 'none';
        }
    });
});