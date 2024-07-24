//acceder a etiqueta html por medio de js de  manera individual//
/*let titulo = document.querySelector('h1');
titulo.innerHTML =  'Juego del número secreto';*/

let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Indica un número entre 1 y 10');

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroUsuario));
    console.log(numeroUsuario);
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
    console.log(numeroUsuario === numeroSecreto);
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}