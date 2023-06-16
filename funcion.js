let botonRoca = document.getElementById('roca')
let botonPapel = document.getElementById('papel')
let botonTijera = document.getElementById('tijera')


let inputRoca = document.getElementById('roca')
let inputPapel = document.getElementById('papel')
let inputTijera = document.getElementById('tijera')
let spanJuego = document.getElementById('resultado-nombre')
let spanPc = document.getElementById('resultadoPc')

let imgJugador = document.getElementById('imgJugador')
let imgEnemigo = document.getElementById('imgEnemigo')

let jugador 
let oponente
let resultado
let resultadoFinal

let vidasEnemigo = 3
let vidasJugador = 3
let spanVidasJugador = document.getElementById('vidasJugador')
let spanVidasEnemigo = document.getElementById('vidasEnemigo')
let barravidaJugador = document.getElementById('vidJugador')
let barraVidaEnemigo = document.getElementById('vidEnemigo')

let cartaUno = document.getElementById('cartaUno')
let cartaDos = document.getElementById('cartaDos')

let sectionMensaje = document.getElementById('mensajeResultado')
let sectionMensajeFinal = document.getElementById('mensajeFinal')

let cartas = document.getElementById('escoger')

let botonReinicio = document.getElementById('botonReinicio')

function juego(){
    botonReinicio.style.display = 'none'

    botonRoca.addEventListener('click', ataquepiedra )
    botonPapel.addEventListener('click', ataquePapel)
    botonTijera.addEventListener('click', ataqueTijera)

    botonReinicio.addEventListener('click', reiniciarJuego)

}



function ataquepiedra(){
    jugador = 'Piedra'
    seleccionarJuego();
}
function ataquePapel(){
    jugador = 'Papel'
    seleccionarJuego();
}
function ataqueTijera(){
    jugador = 'Tijera'
    seleccionarJuego()
}

function seleccionarJuego(){

    if(jugador == 'Piedra'){
        spanJuego.innerHTML = 'Piedra'
        imgJugador.src = '/images/mole.png'
        seleccionarPc();
    }else if(jugador == 'Papel'){
        spanJuego.innerHTML = 'Papel'
        imgJugador.src = '/images/papel.png'
        seleccionarPc();
    }else if(jugador == 'Tijera'){
        spanJuego.innerHTML = 'Tijera'
        imgJugador.src = '/images/Tijera.png'
        seleccionarPc();
    }

}
function seleccionarPc(){
    let juegoPC = aleatorio(1,3);
    if(juegoPC == 1){
        spanPc.innerHTML = 'Piedra'
        imgEnemigo.src= '/images/mole.png'
        oponente = 'Piedra'
    }else if(juegoPC == 2){
        spanPc.innerHTML = 'Papel'
        imgEnemigo.src= '/images/papel.png'
        oponente = 'Papel'
    }else if(juegoPC == 3){
        spanPc.innerHTML = 'Tijera'
        imgEnemigo.src= '/images/Tijera.png'
        oponente = 'Tijera'
    }
    enfrentamiento();
}
function enfrentamiento(){
    if(jugador == oponente){
        // alert('Empate')
        resultado = 'Empate'
    }else if(jugador == 'Piedra' && oponente == 'Tijera'){
        vidasEnemigo--
        resultado = 'Ganaste'
        revisarVidasEnemigo();
        // alert('ganas')
    }else if(jugador == 'Papel' && oponente == 'Piedra'){
        vidasEnemigo--
        resultado = 'Ganaste'
        revisarVidasEnemigo();
        // alert('ganas')
    }else if(jugador == 'Tijera' && oponente == 'Papel'){
        vidasEnemigo--
        resultado = 'Ganaste'
        revisarVidasEnemigo();
        // alert('ganas')
    }else{
        vidasJugador --
        resultado = 'Perdiste'
        revisarVidasJugador();
        // alert('pierdes')
    }
    mensaje();

}
function revisarVidasEnemigo(){

    if(vidasEnemigo == 2){
        barraVidaEnemigo.src = '/images/corazon2.png'
    }
    else if( vidasEnemigo == 1){
        barraVidaEnemigo.style.width = '80px'
        barraVidaEnemigo.src = '/images/corazon1.png'
    }
    else if(vidasEnemigo == 0){
        cartaDos.style.display = 'none'
        resultadoFinal = 'Haz Ganado'
        mensajeFinal();
        // alert('ganaste todoooo')
    }
}
function revisarVidasJugador(){
    if(vidasJugador == 2){
        barravidaJugador.src = '/images/corazon2.png'
    }
    else if(vidasJugador==1){
        barravidaJugador.style.width = '80px'
        barravidaJugador.src = '/images/corazon1.png'
    }else if(vidasJugador == 0){
        cartaUno.style.display = 'none'
        resultadoFinal = 'Lastimosamente Perdiste'
        mensajeFinal();
        // alert('Perdiste todooo')
    }
}
function mensaje(){
    sectionMensaje.innerHTML = resultado
}
function mensajeFinal(){
    botonReinicio.style.display = 'flex'
    sectionMensaje.style.display = 'none'
    cartas.style.display = 'none'
    sectionMensajeFinal.innerHTML = resultadoFinal
}
function reiniciarJuego(){
    location.reload()
}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min +1)+ min)
}

window.addEventListener('load', juego);
