function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("vinilosChilenos"));
    console.log(memoria);
    let cuenta = 0;
    if(!memoria){
        const nuevoProducto = producto;
        nuevoProducto.cantidad = 1;
        localStorage.setItem("vinilosChilenos",JSON.stringify([nuevoProducto]));
        cuenta = 1;
    } else {
        const indiceProducto = memoria.findIndex(vinilochileno => vinilochileno.id == producto.id);
        console.log(indiceProducto)
        const nuevaMemoria = memoria;
        if(indiceProducto === -1){
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto))
            cuenta = 1 ;
        } else {
            nuevaMemoria[indiceProducto].cantidad ++;
            cuenta = nuevaMemoria[indiceProducto].cantidad;
        }
        localStorage.setItem("vinilosChilenos",JSON.stringify(nuevaMemoria));
    }
    actualizarNumeroCarrito();    
    return cuenta;
}

function restarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("vinilosChilenos"));
    const indiceProducto = memoria.findIndex(vinilochileno => vinilochileno.id == producto.id);
    if(memoria[indiceProducto].cantidad === 1){
        memoria.splice(indiceProducto,1);
        localStorage.setItem("vinilosChilenos",JSON.stringify(memoria));
    }else{
        memoria[indiceProducto].cantidad -- ;
    }
    localStorage.setItem("vinilosChilenos",JSON.stringify(memoria));
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
    if(memoria && memoria.length >0){
        const cuenta = memoria.reduce((acum, current) => acum+current.cantidad,0);
        contadorCarritoElement.innerText = cuenta;
    }else{
        contadorCarritoElement.innerText = 0;
    }
}

actualizarNumeroCarrito();