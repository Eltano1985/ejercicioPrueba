const inputOperaciones = document.querySelector("input");

function actualizarVentana(boton) {
    if (boton.innerHTML === "=") {
        inputOperaciones.value = eval(inputOperaciones.value);
    } else {
        inputOperaciones.value += boton.innerHTML;
    }

}

function limpiarPantalla() {
        inputOperaciones.value = "";
    }
    
function borrarUltimo() {
        inputOperaciones.value = inputOperaciones.value.slice(0,-1);
    }

function evitarDuplicado() {

}    
    

   