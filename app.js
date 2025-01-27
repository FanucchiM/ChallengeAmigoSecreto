
let personas = [];

function anadirPersona(){
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value;

    // 1. Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (personas.includes(nombre)){
        alert('Nombre repetido, ingrese otro');
        limpiarCampo('nombre');
        return;
    }

    // 2. Agregar el nombre al array
    personas.push(nombre);

    // 3. Limpiar la lista antes de volver a llenarla
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    // 4. Iterar sobre el array y agregar cada nombre a la lista
    for (let i = 0; i < personas.length; i++) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = personas[i];
        lista.appendChild(nuevoElemento);
    }

    // Limpiar el campo de entrada
    inputAmigo.value = "";
}

//Esta funcion  elige un nombre al azar del array de personas y es el ganador
function sortear(){
    if (personas.length === 0) {
        alert("Por favor, ingrese nombres para poder hacer el sorteo.");
        return;
    }
    let ganador = Math.floor(Math.random() * personas.length);
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";
    lista.innerHTML = "🎉 El ganador es: " + personas[ganador] + ", felicitaciones !" + " 🎊";
}



//funcion que hice para limpiar el campo, en este caso lo voy a usar para eliminar nombres repetidos
function limpiarCampo(idElemento){
    let elementoHTML = document.getElementById(idElemento);
    elementoHTML.value = ''; //Elimino el valor ingresado
    elementoHTML.setAttribute('placeHolder', 'Escribe un nombre'); //Reestablezco el mensaje original para el ingreso de datos
    return;
}
