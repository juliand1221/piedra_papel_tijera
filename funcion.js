let inicioJuego = document.getElementById('escoger')
let radioBtns = document.querySelectorAll('input[type="radio"]');
let botonJuego = document.getElementById('boton-juego')
let nombre = document.getElementById('nombre')
let juegoPC = aleatorio(1,3);

let inputRoca = document.getElementById('roca')
let inputPapel = document.getElementById('papel')
let inputTijera = document.getElementById('tijera')
let spanJuego = document.getElementById('resultado-nombre')
let spanPc = document.getElementById('resultadoPc')

let imgJugador = document.getElementById('imgJugador')
let imgEnemigo = document.getElementById('imgEnemigo')

let jugador 
let oponente

let vidasEnemigo = 3
let vidasJugador = 3
let barravidaJugador = document.getElementById('vidJugador')
let barraVidaEnemigo = document.getElementById('vidEnemigo')

let resultado = document.getElementById('resultado')


function juego(){

    botonJuego.style.display = 'none'

    for (var i=0; i<radioBtns.length;i++){
        radioBtns[i].addEventListener('change',function(){
            if(this.checked){
                botonJuego.style.display='flex';
            } else{
                botonJuego.style.display='none';
            }
        });
    }

    botonJuego.addEventListener('click', seleccionarJuego)

}
function seleccionarJuego(){

    if(inputRoca.checked){
        spanJuego.innerHTML = 'Piedra'
        imgJugador.src = '/images/mole.png'
        jugador = 'Piedra'
        seleccionarPc();
    }else if(inputPapel.checked){
        spanJuego.innerHTML = 'Papel'
        imgJugador.src = '/images/papel.png'
        jugador = 'Papel'
        seleccionarPc();
    }else if(inputTijera.checked){
        spanJuego.innerHTML = 'Tijera'
        imgJugador.src = '/images/Tijera.png'
        jugador = 'Tijera'
        seleccionarPc();
    }

}
function seleccionarPc(){
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
        alert('Empate')
    }else if(jugador == 'Piedra' && oponente == 'Tijera'){
        vidasEnemigo--
        barraVidaEnemigo.src = '/images/corazon2.png'
        alert('ganas')
    }else if(jugador == 'Papel' && oponente == 'Piedra'){
        vidasEnemigo--
        barraVidaEnemigo.src = '/images/corazon2.png'
        alert('ganas')
    }else if(jugador == 'Tijera' && oponente == 'Papel'){
        vidasEnemigo--
        barraVidaEnemigo.src = '/images/corazon2.png'
        alert('ganas')
    }else{
        vidasJugador --
        barravidaJugador.src = '/images/corazon2.png'
        alert('pierdes')
    }
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min +1)+ min)
}


window.addEventListener('load', juego);



















// const formulario = document.getElementById('miFormulario');

// formulario.addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página


//     const nombre = document.getElementById('nombre').value;
//     const juego = document.getElementById('juego').value;
//     const min = 1
//     const max =3
//     var pc = Math.floor(Math.random()*(max-min+1)+min)
//     var batalla = null
 
//     const elementoResultadoNombre = document.getElementById('resultado-nombre');
//     const elementoResultadoJuego = document.getElementById('resultado-juego');
//     const elementoResultadoPc = document.getElementById('juego-pc');
//     const elementoResultadoResultado = document.getElementById('resultado');

    


//     // /////JUGADOR-GRAFICO//////
//     if(juego == "piedra"){
//         document.getElementById("graf").src = "/images/piedra.png";
//     }
//     else if (juego == "papel"){
//         document.getElementById("graf").src = "/images/papel.png"; 
//     }
//     else if (juego == "tijera"){
//         document.getElementById("graf").src = "/images/tijera.png"; 
//     }else {
//         alert('error');
//         formulario.reset();
//         return false;
//     }
//     /////PC-GRAFICO/////////
//     if(pc== 1 ){
//         pc = "piedra";
//         document.getElementById("graf-pc").src = "/images/piedra.png";
//     }
//     else if(pc == 2){
//         pc = "papel";
//         document.getElementById("graf-pc").src = "/images/papel.png";
//     }
//     else if(pc == 3) {
//         pc = "tijera";
//         document.getElementById("graf-pc").src = "/images/tijera.png";
//     }

//     /////BATALLA//////

//     if(juego==pc){
//         batalla = 'EMPATE';
//     }
//     else if(juego == 'piedra' && pc == 'tijera'){
//         batalla = 'GANASTE';
//     }
//     else if(juego == 'papel' && pc == 'piedra'){
//         batalla = 'GANASTE';
//     }
//     else if(juego == 'tijera' && pc == 'papel'){
//         batalla = 'GANASTE';
//     }
//     else {
//         batalla = 'PERDISTE'
//     }

    
//     console.log(nombre, juego, pc,batalla);

//     elementoResultadoNombre.innerHTML= ("Hola " +nombre +" Bienvenido al Juego");
//     elementoResultadoJuego.innerHTML= ("Escogiste " + juego);
//     elementoResultadoPc.innerHTML=("La maquina escogio " +pc)
//     elementoResultadoResultado.innerHTML=(batalla)

    

//     formulario.reset();
// });



