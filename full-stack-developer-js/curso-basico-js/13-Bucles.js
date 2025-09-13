// Bucle for
// Descripción: Se utiliza para ejecutar un bloque de código un número específico de veces.
for (var i = 0; i < 5; i++) {
    console.log(i);
}
// Salida:
// 0
// 1
// 2
// 3
// 4

// Bucle while
// Descripción: Se utiliza para ejecutar un bloque de código mientras se cumple una condición.
var j = 0;
while (j < 5) {
    console.log(j);
    j++;
}
// Salida:
// 0
// 1
// 2
// 3
// 4

// Bucle do-while
// Descripción: Similar a un bucle while, pero se ejecuta al menos una vez antes de verificar la condición.
var k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);
// Salida:
// 0
// 1
// 2
// 3
// 4

// Bucle for...in
// Descripción: Se utiliza para iterar sobre las propiedades enumerables de un objeto.
var persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "programador"
};
for (var propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}
// Salida:
// nombre: Juan
// edad: 30
// profesion: programador

// Bucle for...of
// Descripción: Se utiliza para iterar sobre los elementos iterables (como arrays) de forma más simple y legible.
var numeros = [1, 2, 3, 4, 5];
for (var numero of numeros) {
    console.log(numero);
}
// Salida:
// 1
// 2
// 3
// 4
// 5

// Bucle forEach
// Descripción: Un método de los arrays que ejecuta una función en cada elemento del array.
numeros.forEach(function (numero) {
    console.log(numero);
});
// Salida:
// 1
// 2
// 3
// 4
// 5

// Caso de uso: Recorrer un array y realizar una operación en cada elemento
var precios = [10, 20, 30, 40, 50];
var total = 0;
for (var precio of precios) {
    total += precio;
}
console.log("Total:", total); // Salida: Total: 150

// Caso de uso: Bucle controlado por una condición y salida anticipada con break
var numeros2 = [1, 2, 3, 4, 5];
for (var i = 0; i < numeros2.length; i++) {
    if (numeros2[i] === 3) {
        break;
    }
    console.log(numeros2[i]);
}
// Salida:
// 1
// 2
