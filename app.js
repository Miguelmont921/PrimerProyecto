let numeroSecreto =0; 
let intentos = 0;
let listaNumerosSorteados = []
let numeroMaximo = 10

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log (typeof(numeroDeUsuario))
    console.log (numeroDeUsuario)
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1)? "intento" : "intentos"}` )
        document.getElementById('reiniciar').removeAttribute('disabled')
    }            

        else {
//El Usuario no acertó
        if (numeroDeUsuario < numeroSecreto) 
        asignarTextoElemento("p", "El Numero secreto es mayor")
else{
            asignarTextoElemento("p", "El Numero secreto es menor")
    }
        
               }
    intentos++;
    limpiarcaja();
    return;

}
function limpiarcaja() {
  let valorCaja = document.querySelector("#valorUsuario"). value = ""
}

function condicionesIniciales () {
    asignarTextoElemento('h1','Juego del número Secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto (); 
intentos = 1;



}


function generarNumeroSecreto (params) {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    if(listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p','Ya se sortearon todos los números posibles');
} 
    else { 



    if (listaNumerosSorteados.includes(numeroGenerado)
    ) {return generarNumeroSecreto() }
    else { 
        listaNumerosSorteados.push(numeroGenerado)
        return numeroGenerado; 
    }
}
}

function reiniciarJuego () {
    limpiarcaja() 
    condicionesIniciales ()
    document.querySelector('#reiniciar').setAttribute('disabled','true')

}    

condicionesIniciales()


