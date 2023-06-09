// Funciones declarativas (Function Declarations)
function miFuncion1() {
    return "Hola, soy una función declarativa!";
}

// Funciones expresivas (Function Expressions)
var miFuncion2 = function (str) {
    return "Hola, soy una función " + str + "!";
};

// Funciones flecha (Arrow Functions, introducidas en ES6)
const miFuncion3 = () => {
    return "Hola, soy una función flecha sin parámetros!";
};

const miFuncion4 = (str) => "Hola, soy una función flecha " + str + "!";

// Funciones autoejecutables (Immediately Invoked Function Expressions - IIFE)
(function () {
    console.log("Soy una función autoejecutable.");
})();

// Funciones con parámetros predeterminados (Default Parameters, introducidos en ES6)
const miFuncion5 = (nombre = "John", edad = 25) => {
    return "Hola, soy " + nombre + " y tengo " + edad + " años.";
};

// Llamadas a las funciones
console.log(miFuncion1());
console.log(miFuncion2("expresiva"));
console.log(miFuncion3());
console.log(miFuncion4("flecha"));
console.log(miFuncion5());
console.log(miFuncion5("Alice", 30));


// Funciones que realizan tareas más complejas

// Función para sumar un arreglo de números
const sumarArreglo = (numeros) => {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
};

// Función para encontrar el número máximo en un arreglo
const encontrarMaximo = (numeros) => {
    let maximo = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }
    return maximo;
};

// Función para contar la cantidad de vocales en una cadena de texto
const contarVocales = (texto) => {
    const vocales = ["a", "e", "i", "o", "u"];
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i].toLowerCase())) {
            contador++;
        }
    }
    return contador;
};

// Llamadas a las funciones
const numeros = [1, 2, 3, 4, 5];
console.log("Suma del arreglo:", sumarArreglo(numeros));

const numeros2 = [10, 5, 8, 2, 9];
console.log("Número máximo:", encontrarMaximo(numeros2));

const texto = "Hola, cómo estás?";
console.log("Cantidad de vocales:", contarVocales(texto));
