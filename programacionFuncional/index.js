/*Ejercicio 1: Funciones y Arrow Functions

Crea una función llamada saludar que tome un nombre como argumento y muestre un mensaje de saludo en la consola. Luego, 
reescribe la misma función utilizando una arrow function. */

/*function saludar(nombre){
    return `Hola ${nombre}`;
}*/

let saludar = nombre => `Hola ${nombre}`;

console.log(saludar("DARIO"));

/*Ejercicio 2: Parámetros y Valores por Defecto

Crea una función llamada potencia que calcule la potencia de un número dado a un exponente dado. La función debe tener un 
valor por defecto de exponente igual a 2. */

let potencia = (numero,exponente=2) => numero**exponente;

console.log(potencia(2,6));

/*Ejercicio 3: Funciones de Primera Clase

Crea una función llamada aplica_fn que tome un número y una función como argumentos y aplique la función al número. 
Prueba la función con una función que devuelva el cuadrado del número. */

const cuadrado = (numero) => numero*numero;

let aplica_fn = (numero, funcionAplicar) => funcionAplicar(numero);

console.log(aplica_fn(4,cuadrado));

/*Ejercicio 4: Métodos de Programación Funcional

Dado el siguiente array de números [1, 2, 3, 4, 5, 6, 7, 8, 9], realiza las siguientes operaciones:

Utiliza filter para crear un nuevo array con los números pares.
Utiliza map para crear un nuevo array con los cuadrados de los números.
Utiliza reduce para calcular la suma de todos los números.
Utiliza every para verificar si todos los números son mayores que 0.
Utiliza some para verificar si algún número es mayor que 10. */

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];


let filtrado = (numeros.filter(numero => numero % 2 == 0));

console.log(filtrado);

let cuadrados = (numeros.map(numero => numero * 2));

console.log(cuadrados)

let sumaTotal = (numeros.reduce((numero,total) => total+=numero))

console.log(sumaTotal)

let mayorQue0 = (numeros.every(numero => numero > 0))

console.log(mayorQue0);

let mayorQue10 = (numeros.some(numero => numero > 10))

console.log(mayorQue10)