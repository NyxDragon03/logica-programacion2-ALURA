//acceder a etiqueta html por medio de js de  manera individual//
/*let titulo = document.querySelector('h1');
titulo.innerHTML =  'Juego del número secreto';*/

let numeroSecreto = generarNumeroSecreto();
let contadorIntentos = 1;
let listaNumSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${contadorIntentos} ${(contadorIntentos === 1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        contadorIntentos++;
        limpiarImput();
    }
    return;
}

function generarNumeroSecreto() {
    let numGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numGenerado);
    console.log(listaNumSorteados);
    // ¿? ya sorteamos todos los numeros=
    if (listaNumSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Todos los numeros disponibles han sido sorteados! Gracias por jugar.');
    }else{
        //si el numero generado está incluido en la lista
        if(listaNumSorteados.includes(numGenerado)){
            //recursividad de que la función se llame a si misma hasta generar un valor valido
            return generarNumeroSecreto();
        }else{
            listaNumSorteados.push(numGenerado);
            return numGenerado;
        }
    }
}

function limpiarImput(){
    // let valorCaja = document.querySelector('#valorUsuario');
    // valorCaja.value = '';
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    contadorIntentos = 1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarImput();
    //indicar msj de intervalo//generar num aleatorio//iniciar conteo de intentos
    condicionesIniciales();
    //deshabilitar btn de new game
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();