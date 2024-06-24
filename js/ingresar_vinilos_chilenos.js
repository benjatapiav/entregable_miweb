const contenedorVinilosChilenos = document.getElementById("productos-container")

function crearTarjetasProductosChilenos(productos){
    productos.forEach(producto => {
        const nuevoViniloChilenos = document.createElement("div");
        nuevoViniloChilenos.classList = "vinilochileno-producto";
        nuevoViniloChilenos.innerHTML = `
        
            <img src="${producto.url_img}">
            <h3>${producto.nombre}</h3>
            <p>${producto.autor}</p>
            <p>$${producto.precio}</p>
            <button>Agregar al carrito</button>
        
        `
        contenedorVinilosChilenos.appendChild(nuevoViniloChilenos);
        nuevoViniloChilenos.getElementsByTagName("button")[0].addEventListener("click",()=>agregarAlCarrito(producto));
    });
}

getViniloschilenos().then(vinilosChilenos =>{
    crearTarjetasProductosChilenos(vinilosChilenos);
})
