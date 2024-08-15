const inputOperaciones = document.querySelector("input");

function actualizarVentana(boton) {
    if (boton.innerHTML === "=") {
        inputOperaciones.value = eval(inputOperaciones.value);
    } else {
        inputOperaciones.value += boton.innerHTML;
    }

}

function limpiarPantalla() {
    if (boton.innerHTML === "C") {
        
        
    }
    
}