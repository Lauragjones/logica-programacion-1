//Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
//Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
//Debe imprimir los números por consola ordenados de mayor a menor, y de menor a mayor.
//Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola diciendo que los números son iguales.
//Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:

const prompt = require('prompt-sync')(); // Linea para poder poner prompt

let num1 =parseFloat (prompt ("ingresa el primer numero:"))
let num2 = parseFloat (prompt("ingresa el segundo numero:"))
let num3 =parseFloat (prompt ("Ingresa el tercer numero: "))

let numeros = [num1,num2,num3];

let mayor = Math.max(num1, num2, num3);

let menor = Math.min(num1, num2, num3);

let medio = num1 + num2 + num3 - mayor - menor ;

console.log ("Orden de mayor a menor: " + mayor + "," + medio + "," + menor );

console.log ("Orden de menor a mayor : " + menor + "," + medio + "," + mayor );
  
if (num1 == num2 && num2 == num3 ){
  console.log ("los números son iguales.");
}
else if (num1 == num2|| num2 == num3 || num1 == num3 ){
    console.log ("Hay dos números iguales.")

}else {
    console.log ("Los tres números son diferente.")
}