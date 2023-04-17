
const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página


    const nombre = document.getElementById('nombre').value;
    const juego = document.getElementById('juego').value;
    const min = 1
    const max =3
    var pc = Math.floor(Math.random()*(max-min+1)+min)
    var batalla = null
 
    const elementoResultadoNombre = document.getElementById('resultado-nombre');
    const elementoResultadoJuego = document.getElementById('resultado-juego');
    const elementoResultadoPc = document.getElementById('juego-pc');
    const elementoResultadoResultado = document.getElementById('resultado');

    


    // /////JUGADOR-GRAFICO//////
    if(juego == "piedra"){
        document.getElementById("graf").src = "../Pierdra-papel-tijera/images/piedra.png";
    }
    else if (juego == "papel"){
        document.getElementById("graf").src = "../Pierdra-papel-tijera/images/papel.png"; 
    }
    else if (juego == "tijera"){
        document.getElementById("graf").src = "../Pierdra-papel-tijera/images/tijera.png"; 
    }else {
        alert('error');
        formulario.reset();
        return false;
    }
    /////PC-GRAFICO/////////
    if(pc== 1 ){
        pc = "piedra";
        document.getElementById("graf-pc").src = "../Pierdra-papel-tijera/images/piedra.png";
    }
    else if(pc == 2){
        pc = "papel";
        document.getElementById("graf-pc").src = "../Pierdra-papel-tijera/images/papel.png";
    }
    else if(pc == 3) {
        pc = "tijera";
        document.getElementById("graf-pc").src = "../Pierdra-papel-tijera/images/tijera.png";
    }

    /////BATALLA//////

    if(juego==pc){
        batalla = 'EMPATE';
    }
    else if(juego == 'piedra' && pc == 'tijera'){
        batalla = 'GANASTE';
    }
    else if(juego == 'papel' && pc == 'piedra'){
        batalla = 'GANASTE';
    }
    else if(juego == 'tijera' && pc == 'papel'){
        batalla = 'GANASTE';
    }
    else {
        batalla = 'PERDISTE'
    }

    
    console.log(nombre, juego, pc,batalla);

    elementoResultadoNombre.innerHTML= ("Hola " +nombre +" Bienvenido al Juego");
    elementoResultadoJuego.innerHTML= ("Escogiste " + juego);
    elementoResultadoPc.innerHTML=("La maquina escogio " +pc)
    elementoResultadoResultado.innerHTML=(batalla)

    

    formulario.reset();
});



