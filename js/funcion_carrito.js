function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("vinilosChilenos"));
    console.log(memoria);
    if(!memoria){
        const nuevoProducto = producto;
        nuevoProducto.cantidad = 1;
        localStorage.setItem("vinilosChilenos",JSON.stringify([nuevoProducto]));
    }else{
        const indiceProducto = memoria.findIndex(vinilochileno => vinilochileno.id);
        console.log(indiceProducto)
        const nuevaMemoria = memoria;
        if(indiceProducto === -1){
        nuevaMemoria.push(getNuevoProductoParaMemoria(producto))

        }   else {
            nuevaMemoria[indiceProducto].cantidad ++;
        }
        localStorage.setItem("vinilosChilenos",JSON.stringify(nuevaMemoria));
    }
actualizarNumeroCarrito();    
}


function getNuevoProductoParaMemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}
const contadorCarritoElement= document.getElementById("contador-carrito");
function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("vinilosChilenos"));
    const cuenta = memoria.reduce((acum, current) => acum+current.cantidad,0);
    contadorCarritoElement.innerText = cuenta;
}

actualizarNumeroCarrito();