//acceder a etiqueta html por medio de js de  manera individual//
/*let titulo = document.querySelector('h1');
titulo.innerHTML =  'Juego del número secreto';*/

let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    alert('Click desde el botón');
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Indica un número entre 1 y 10');