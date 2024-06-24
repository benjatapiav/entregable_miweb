

function crearformulario() { /* le damos los valores puestos a cada variable mostrada */
    var infoMostrada = document.getElementById("infoMostrada");
    var rut = document.getElementById("rutInput").value;
    var nombre = document.getElementById("nombreInput").value;
    var apellido = document.getElementById("apellidoInput").value;
    var fecha = document.getElementById("fechaInput").value;
    var edad = document.getElementById("edadInput").value;
    var correo = document.getElementById("correoInput").value;
    var celular = document.getElementById("celularInput").value;
    var formulario = document.getElementById("motiInput").value;

    // Validación de los campos
    if (rut.length < 9 || rut.length > 10) {
        alert("Rut no válido");
        return;
    }

    if (nombre.length === 0) {
        alert("Por favor, ingresa tu nombre");
        return;
    }

    if (apellido.length === 0) {
        alert("Por favor, ingresa tu apellido");
        return;
    }

    if (fecha === "") {
        alert("Por favor, selecciona tu fecha de nacimiento");
        return;
    }

    if (edad < 1 || edad > 120) {
        alert("Edad no válida");
        return;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        alert("Correo electrónico no válido");
        return;
    }

    if (celular.length < 9 || celular.length > 12) {
        alert("Celular no válido");
        return;
    }

    // se crea y escribe la carta con los datos dados
    var texto = "Resumen de Formulario: " + "<br>" +
                "Rut: " + rut + "<br>" +
                "Nombre: " + nombre + "<br>" +
                "Apellido/s: " + apellido + "<br>" +
                "Fecha de nacimiento: " + fecha + "<br>" +
                "Edad: " + edad + "<br>" +
                "Email: " + correo + "<br>" +
                "Celular: " + celular + "<br>" +
                "Informacion: " + formulario + "<br>"+
                "-----------------------------------"+"<br>"+
                "!Bienvenido a MRB¡";

    // hace que el texto se vea como html
    infoMostrada.innerHTML = texto;
}


