//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Juego del número secreto";

//let parrafo = document.querySelector("p");
//parrafo.innerHTML = "selecciona un numero del 1 al 10";

//aqui lo que hice fue reemplazar la declaracion del texto de dos elementos por la funcion asignarTextoElemento()
//que me permite escalar la funcionalidad del programa y reducir las lineas de acodigo a la mital al
//automatizar el proceso de asignacion de texto a elementos Html.
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(tipo, texto) {
  let elementoHtml = document.querySelector(tipo);
  elementoHtml.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  //console.log(numeroSecreto);
  //console.log(numeroDeUsuario);
  //console.log(numeroDeUsuario === numeroSecreto);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "#texto__parrafo",
      `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //el usuario no acertó
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("#texto__parrafo", "El numero secreto es menor");
    } else {
      asignarTextoElemento("#texto__parrafo", "El numero secreto es mayor");
    }
    intentos++;
    limpiarcaja();
  }

  return;
}

function limpiarcaja() {
  let valorCaja = document.querySelector("#valorUsuario");
  valorCaja.value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo + 1);

  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento(`#texto__parrafo`, `Ya se sortearon todos los números posibles`);
      
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
      
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }


  
}

function condicionesIniciales() {
  asignarTextoElemento("#h1_juego", "Juego del número secreto!");
  asignarTextoElemento(
    `#texto__parrafo`,
    `Selecciona un numero del 1 al ${numeroMaximo}`
  );
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //necesito limpiar la caja
  //indicar mensaje de inicio
  //necesito restartar los intentos
  //necesito reiniciar el numero aleatorio
  //deshabilitar el boton de 'Nuevo intento'

  condicionesIniciales();

  limpiarcaja();

  document.querySelector("#reiniciar").setAttribute("disable", true);
}

condicionesIniciales();
/*
EJERCICIOS PROPUESTOS POR EL TUTOR:

function Saludo() {
    console.log("hola mundo");
    return;    
}

function saludoConParametro() {
    let nombre = prompt("ingrese su nombre");
    console.log(`hola, ${nombre}!`);
    return;    
}

function elDoble() {
    let valor = parseInt(prompt("ingrese un numero"));
    let doble = valor*2;
    return console.log(doble);    
}

function promedio() {
    let num1 = parseInt(prompt("ingrese el primer valor"));
    let num2 = parseInt(prompt("ingrese el segundo valor"));
    let num3 = parseInt(prompt("ingrese el tercer valor"));

    let promedio = ((num1+ num2+ num3)/3);

    return console.log(`El valor promedio es ${promedio}`);    
}

Saludo();
saludoConParametro();
elDoble();
promedio();
*/
