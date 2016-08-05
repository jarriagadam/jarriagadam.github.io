//2016 08 05
//p5js udd
//vamos a hacer una elipse que siga al mouse

//setup () se ejecuta una vez
//al principio de los tiempos

//variables y funciones
//esto se llama DECLARAR
//asi se hace en javascript
var x;

//solo de despues de DECLARAR 
var diametro;
diametro = 100;


//pueden darle un calor
//esto se llama ASIGNAR
x = 100, 100;

//hay dos variables locales y globales
//GLOBALES: DECLARADAS FUERA DE FUNCION
//LOCALES: DECLARADAS DENTRO DE FUNCION

//globales: se pueden usar en cualquier parte
//locales: solo dentro de la funcion

//
var y = 10;
//asignar otro valor
y = 100;

function setup() {
  
  //camelCase, UPPER CASE, lowercase
  
  //crear un lienzo para dibujar
  //createCanvas(dimHor, dimVer);
  //dimensiones en px
  createCanvas(windowWidth, windowHeight);
  
  //pintar el fondo
  //background(color);
  //1: grayscale, 0 es negro, 255 es blanco
  //2: grayscale + alpha
  //3: rgb, 0 es nada 255 todo
  //4: rgb + alpha 
  //alpha: 0 es transparente, 255 es solido
  background(windowWidth, windowHeight)
}

//draw () corre justo despues de setup()
//draw se ejecuta 60 veces por segundo
function draw() {
  
  background(mouseX, mouseY, mouseY)
  //definir ancho de figura
  //strokeWeight(px;
  
  //este lo habia sacado
  
  //aqui termina lo sacado
  
  
  //dibujamos la elipse
  muchasElipses();

}
  
//declarar funcion nueva
//funcion para hacer muchas elipses
//en lugares aleatorios
function muchasElipses(){
  
  //for loop
  //for(inicio; condicion; refresco) {}
  for (var i = 0; i < 100; i++) {
  //elipse en posicion aleatorio
  ellipse(random(width), random(height), 100, 100);
  
  

}
}