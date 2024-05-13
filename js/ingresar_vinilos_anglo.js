const contenedorVinilosAnglo = document.getElementById("productos-container-2")

function crearTarjetasProductosChilenos(productos){
    productos.forEach(producto => {
        const nuevoViniloAnglo = document.createElement("div");
        nuevoViniloAnglo.classList = "viniloanglo-producto";
        nuevoViniloAnglo.innerHTML = `
        
            <img src="./vinilos/${producto.id}.png">
            <h3>${producto.nombre}</h3>
            <p>${producto.autor}</p>
            <p>$${producto.precio}</p>
            <button>Agregar al carrito</button>
        
        `
        contenedorVinilosAnglo.appendChild(nuevoViniloAnglo);
        nuevoViniloAnglo.getElementsByTagName("button")[0].addEventListener("click",()=>agregarAlCarrito(producto));
    });
}
crearTarjetasProductosChilenos(vinilosAnglo);
