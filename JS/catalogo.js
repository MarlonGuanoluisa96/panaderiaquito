    // Seleccionamos todos los botones Agregar
    const botones = document.querySelectorAll(".agregar");

    // Recorremos los botones
    botones.forEach(function (boton) {

        // Cuando hacemos clic
        boton.addEventListener("click", function () {

            // Obtenemos los datos del producto
            let nombre = boton.dataset.nombre;
            let precio = Number(boton.dataset.precio);
            let id = boton.dataset.cantidad;

            // Obtenemos la cantidad ingresada
            let cantidad = Number(document.getElementById(id).value);

            // Validamos la cantidad
            if (cantidad < 1 || !Number.isInteger(cantidad)) {
                alert("Ingresa una cantidad válida");
                return;
            }

            // Recuperamos el carrito guardado
            let carrito = JSON.parse(
                localStorage.getItem("carritoPanaderia")
            ) || [];

            // Buscamos el producto
            let encontrado = false;

            for (let i = 0; i < carrito.length; i++) {

                if (carrito[i].nombre === nombre) {

                    // Si existe, sumamos la cantidad
                    carrito[i].cantidad += cantidad;
                    encontrado = true;
                    break;
                }
            }

            // Si no existe, agregamos el producto
            if (encontrado === false) {
                carrito.push({
                    nombre: nombre,
                    precio: precio,
                    cantidad: cantidad
                });
            }

            // Guardamos el carrito
            localStorage.setItem(
                "carritoPanaderia",
                JSON.stringify(carrito)
            );

            alert("Producto agregado correctamente");
            
        });
    });
