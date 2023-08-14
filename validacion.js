//Haz tú validación en javascript acá


/*
El botón enviar solo debe ser activado cuando todos los campos del formulário estén llenos
El botón debe enviar el mensaje.*/

const arreglo = [
    document.getElementById("input-nombre"),
    document.getElementById("input-email"),
    document.getElementById("input-asunto"),
    document.getElementById("mensagem")
]

const botonEnviar = document.getElementById("boton-enviar")

function validador(arreglo){
    var allTrue = false;
    arreglo.forEach(element => {
        if(element.validity.valid == true){
            allTrue = true;
         }else{
            allTrue = false;
         }
    });
    return allTrue
}

arreglo.forEach(element => {
    element.addEventListener("change", (evento) => {
        
        if(validador(arreglo)){
            botonEnviar.disabled = false        
        } else {
            botonEnviar.disabled = true
        }
    })
});

botonEnviar.addEventListener("click", () => {    
    alert("Sus datos han sido enviados")
})
