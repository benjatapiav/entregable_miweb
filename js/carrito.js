const contenedorVinilosChilenos = document.getElementById("productos-container")
const unidadesElement = document.getElementById("unidades");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesElement = document.getElementById("totales");


function crearTarjetasProductosChilenos(){
    contenedorVinilosChilenos.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("vinilosChilenos"));
    console.log(productos)
    if(productos && productos.length >0){
    productos.forEach((producto) => {
        const nuevoViniloChilenos = document.createElement("div");
        nuevoViniloChilenos.classList = "vinilochileno-producto";
        nuevoViniloChilenos.innerHTML = `
        
            <img src="${producto.url_img}">
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
            .getElementsByTagName("button")[1].addEventListener("click",(e)=> {
                
                const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0];
                cuentaElement.innerText = agregarAlCarrito(producto) ;
                actualizarTotales();
    });
        nuevoViniloChilenos
            .getElementsByTagName("button")[0].addEventListener("click",(e)=> { 
                restarAlCarrito(producto) ;
                crearTarjetasProductosChilenos();
                actualizarTotales();
                
                
        });
            

    });
}}

 
crearTarjetasProductosChilenos();
actualizarTotales();


function actualizarTotales(){
    const productos = JSON.parse(localStorage.getItem("vinilosChilenos"));
    let unidades = 0;
    let precio = 0;
    if(productos && productos.length >= 0){
        productos.forEach(producto => {
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        })
        unidadesElement.innerText = unidades;
        precioElement.innerText = precio;
    }
}

crearTarjetasProductosChilenos();

function revisarMensajeVacio(){
    const productos = JSON.parse(localStorage.getItem("vinilosChilenos"));
    carritoVacioElement.classList.toggle("escondido",productos && productos.length > 0);
    totalesElement.classList.toggle("escondido",!(productos && productos.length > 0));
}

revisarMensajeVacio();


