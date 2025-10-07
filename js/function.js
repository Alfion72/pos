const productos = [
["001", "Sofá 3 Plazas", 899.99],
["002", "Mesa de Centro de Madera", 250.0],
["003", "Silla de Comedor", 75.0],
["004", "Mesa de Comedor 6 Personas", 799.99],
["005", "Silla de Oficina Ergonómica", 199.99],
["006", "Sillón Reclinable", 349.99],
["007", "Cama Queen Size", 699.99],
["008", "Colchón Ortopédico", 599.99],
["009", "Buró de Noche", 129.99],
["010", "Cómoda de 6 Cajones", 499.99],
["011", "Escritorio de Madera", 329.99],
["012", "Librero 5 Niveles", 259.99],
["013", "Mesa Auxiliar Redonda", 145.0],
["014", "Silla Tapizada", 165.0],
["015", "Banco de Bar", 120.0],
["016", "Armario de 2 Puertas", 799.99],
["017", "Cama King Size", 899.99],
["018", "Zapatera", 199.99],
["019", "Mesa Plegable", 110.0],
["020", "Esquinero de Sala", 850.0],
["021", "Mueble TV 60''", 450.0],
["022", "Aparador", 389.99],
["023", "Vitrina de Vidrio", 520.0],
["024", "Consola Recibidor", 220.0],
["025", "Banqueta Tapizada", 150.0],
["026", "Mesa Lateral", 135.0],
["027", "Sillón Individual", 280.0],
["028", "Butaca Moderna", 310.0],
["029", "Estante de Cocina", 180.0],
["030", "Mueble para Lavabo", 260.0],
["031", "Cabecero Cama Queen", 199.99],
["032", "Mesa de Noche", 120.0],
["033", "Mueble Bar", 399.99],
["034", "Taburete", 75.0],
["035", "Silla de Exterior", 85.0],
["036", "Mesa de Jardín", 250.0],
["037", "Silla Plegable", 55.0],
["038", "Perchero de Pie", 95.0],
["039", "Banco de Madera", 145.0],
["040", "Mueble de Baño con Espejo", 350.0],
["041", "Cómoda Alta", 420.0],
["042", "Cama Individual", 420.0],
["043", "Literas", 499.99],
["044", "Mesa de Vidrio", 550.0],
["045", "Sofá Esquinero", 1200.0],
["046", "Mueble de TV Minimalista", 280.0],
["047", "Armario Empotrado", 950.0],
["048", "Mesa Extensible", 600.0],
["049", "Silla Vintage", 140.0],
["050", "Banco Tapizado", 130.0],
["051", "Espejo de Pared con Marco", 199.99],
["052", "Cómoda de 8 Cajones", 620.0],
["053", "Silla Acapulco", 110.0],
["054", "Mueble Zapatero Grande", 280.0],
["055", "Mesa Alta de Bar", 220.0],
["056", "Silla Alta de Bar", 99.99],
["057", "Cama Infantil", 350.0],
["058", "Banca para Jardín", 260.0],
["059", "Escritorio Esquinero", 450.0],
["060", "Estante Flotante", 60.0],
["061", "Armario de 3 Puertas", 1150.0],
["062", "Mesa Ratona", 140.0],
["063", "Banqueta de Entrada", 180.0],
["064", "Mueble para Microondas", 200.0],
["065", "Mesa Redonda de Comedor", 499.99],
["066", "Silla con Reposabrazos", 175.0],
["067", "Taburete Alto Industrial", 95.0],
["068", "Sofá Cama", 650.0],
["069", "Mesa Plegable de Pared", 120.0],
["070", "Mueble de Cocina Modular", 950.0],
["071", "Librero Bajo", 180.0],
["072", "Estante Esquinero", 140.0],
["073", "Mueble Organizador Multiusos", 220.0],
["074", "Aparador Moderno", 560.0],
["075", "Consola Estilo Nórdico", 320.0],
["076", "Cama con Cajones", 780.0],
["077", "Cabecero King Size", 240.0],
["078", "Mueble para Lavadora", 260.0],
["079", "Silla Mecedora", 300.0],
["080", "Mesa de Picnic", 350.0],
["081", "Banco Doble Tapizado", 210.0],
["082", "Cómoda Infantil", 280.0],
["083", "Sofá Modular", 1450.0],
["084", "Mueble TV Flotante", 270.0],
["085", "Escritorio Juvenil", 260.0],
["086", "Armario Metálico", 600.0],
["087", "Mesa de Centro con Vidrio", 300.0],
["088", "Silla de Mimbre", 130.0],
["089", "Mesa de Terraza", 240.0],
["090", "Banco Plegable", 80.0],
["091", "Estantería Industrial", 420.0],
["092", "Mesa de Noche con Cajones", 180.0],
["093", "Sillón Relax", 520.0],
["094", "Cama con Dosel", 950.0],
["095", "Mueble de Recibidor con Espejo", 360.0],
["096", "Silla Tapizada con Botones", 190.0],
["097", "Mesa de Trabajo Industrial", 480.0],
["098", "Cama Matrimonial", 580.0],
["099", "Cómoda Clásica", 420.0],
["100", "Sofá Chesterfield", 1600.0],
];
// Variable para mantener el total de productos
let totalProductos = 0;

// Función para buscar producto por código
function buscarProductoPorCodigo(evento) {
    if (evento.key === "Enter") {
        let codigoCompleto = document.getElementById("txtCodigo").value;

        if (codigoCompleto.length > 0) {
            let cantidad = 1;
            let codigo = codigoCompleto;

                // Verificar si hay multiplicación (formato: cantidad*codigo)
                if (codigoCompleto.indexOf("*") !== -1) {
                const partes = codigoCompleto.split("*");
                cantidad = parseInt(partes[0]) || 1;
                codigo = partes[1];
                }

                for (let i = 0; i < productos.length; i++) {
                    if (productos[i][0] === codigo) {
                        const tabla = document.getElementById("bdContenido");
                        const renglon = tabla.insertRow();
                        const celdaCantidad = renglon.insertCell(0);
                        const celdaNombre = renglon.insertCell(1);
                        const celdaPrecio = renglon.insertCell(2);
                        const celdaTotal = renglon.insertCell(3);

                        // Aplicar estilos
                        celdaCantidad.setAttribute("style", "text-align: center;");
                        celdaNombre.setAttribute("style", "text-align: center;");
                        celdaPrecio.setAttribute("style", "text-align: center;");
                        celdaTotal.setAttribute("style", "text-align: center;");

                        // Calcular el subtotal del producto
                        const subtotal = productos[i][2] * cantidad;

                        // Llenar las celdas
                        celdaCantidad.innerHTML = cantidad;
                        celdaNombre.innerHTML = productos[i][1];
                        celdaPrecio.innerHTML = `$${productos[i][2]}`;
                        celdaTotal.innerHTML = `$${subtotal.toFixed(2)}`;

                        // Agregar al total general
                        totalProductos += subtotal;

                        // Actualizar la visualización del total
                        const elementoTotal = document.getElementById("total");
                        if (elementoTotal) {
                        elementoTotal.innerHTML = `Total: $${totalProductos.toFixed(2)}`;
                        }

                        // Limpiar el campo de entrada
                        document.getElementById("txtCodigo").value = "";

                        break; // Salir del bucle una vez que se encuentra el producto
                    }
                }
            }
    }
    // identificamos la tecla esc la cual elimina el ultimo producto si es que existe
    else if (evento.key === "Escape") {
        // alert ("se identifico Escape");
        // var borra = document.getElementById("bdContenido");
        // borra.removeChild(borra.lastChild);
        const tabla = document.getElementById("bdContenido");
            if (tabla.rows.length > 0) {
            const ultimaFila = tabla.rows[tabla.rows.length - 1];
            const totalCelda = ultimaFila.cells[3].innerText;
            const totalValor = parseFloat(totalCelda.replace("$", ""));
            totalProductos -= totalValor;
            tabla.deleteRow(tabla.rows.length - 1);

            // Actualizar la visualización del total
            const elementoTotal = document.getElementById("total");
            if (elementoTotal) {
                elementoTotal.innerHTML = `Total: $${totalProductos.toFixed(2)}`;
            }
            }
    } 
    //aumentar la cantidad del producto con tab
    else if (evento.key === "Tab") {
        evento.preventDefault();
        // alert ("repetimos producto");
        
        var tabla = document.getElementById("bdContenido");
    
        // Verifica que existan productos en la tabla
        if (tabla.rows.length > 0) {
        // Obtiene la última fila de la tabla
        var fila = tabla.rows[tabla.rows.length - 1];

        // Suma la cantidad de producto en 1 del ultimo producto
        var cantidad = parseInt(fila.cells[0].innerHTML) + 1;
        fila.cells[0].innerHTML = cantidad;
        
        // Obtiene el precio unitario de la celda 3 (índice 2)
        var precioUnitario = parseFloat(fila.cells[2].innerText.replace("$", ""));
        
        // Calcula el nuevo subtotal
        var nuevoSubtotal = precioUnitario * cantidad;

        // Actualiza la celda del subtotal (índice 3)
        fila.cells[3].innerHTML = `$${nuevoSubtotal.toFixed(2)}`;
        
        // Suma el precio unitario al total general
        totalProductos += precioUnitario;
        totalProductos = Math.abs(totalProductos);

        // Actualiza el total mostrado
        actualizarPrecioTotal();
        } else {
            // Mensaje cuando no hay productos para eliminar
            document.getElementById("txtCode").placeholder = "No hay productos ingresados.";
        }
    }
}



// Función para actualizar el precio total en la interfaz
function actualizarPrecioTotal() {
// Buscar tanto el elemento precio-total como total para mayor compatibilidad
let elementoTotal = document.getElementById("precio-total");
if (!elementoTotal) {
elementoTotal = document.getElementById("total");
}

if (elementoTotal) {
elementoTotal.innerHTML = `$${totalProductos.toFixed(2)}`;
}

// También actualizar cualquier elemento con clase total-amount
const elementosTotal = document.getElementsByClassName("total-amount");
for (let i = 0; i < elementosTotal.length; i++) {
elementosTotal[i].innerHTML = `$${totalProductos.toFixed(2)}`;
}
}
