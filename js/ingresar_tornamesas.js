const contenedorTornamesas = document.getElementById("productos-container-3")

function crearTarjetasProductosChilenos(productos){
    productos.forEach(producto => {
        const nuevoTornamesa = document.createElement("div");
        nuevoTornamesa.classList = "tornamesa-producto";
        nuevoTornamesa.innerHTML = `
        
            <img src="./vinilos/${producto.id}.png">
            <h3>${producto.nombre}</h3>
            <p>${producto.autor}</p>
            <p>$${producto.precio}</p>
            <button>Agregar al carrito</button>
        
        `
        contenedorTornamesas.appendChild(nuevoTornamesa);
        nuevoTornamesa.getElementsByTagName("button")[0].addEventListener("click",()=>agregarAlCarrito(producto));
    });
}
crearTarjetasProductosChilenos(tornamesa);
