const contenedorVinilosChilenos = document.getElementById("productos-container")

function crearTarjetasProductosChilenos(){
    contenedorVinilosChilenos.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("vinilosChilenos"));
    console.log(productos)
    if(productos && productos.length >0){
    productos.forEach((producto) => {
        const nuevoViniloChilenos = document.createElement("div");
        nuevoViniloChilenos.classList = "vinilochileno-producto";
        nuevoViniloChilenos.innerHTML = `
        
            <img src="./vinilos/${producto.id}.png">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <div>
            <button>-</button>
            <span class="cantidad">${producto.cantidad}</span>
            <button>+</button>
            </div>
        `;
        contenedorVinilosChilenos.appendChild(nuevoViniloChilenos);
        nuevoViniloChilenos
            .getElementsByTagName("button")[1]
            .addEventListener("click",(e)=>{
                const cuentaElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
                cantidadElement.innerText = restarAlCarrito(producto);
            crearTarjetasProductosCarrito();
            actualizarTotales();
    });
}
} 
crearTarjetasProductosChilenos();
