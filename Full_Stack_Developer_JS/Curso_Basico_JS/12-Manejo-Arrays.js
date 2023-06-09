// Creación de un array
var frutas = ['manzana', 'naranja', 'plátano', 'uva'];

// Método: push()
// Descripción: Agrega uno o más elementos al final del array.
frutas.push('mango');
console.log(frutas); // Salida: ["manzana", "naranja", "plátano", "uva", "mango"]

// Método: pop()
// Descripción: Elimina el último elemento del array y lo devuelve.
var ultimoElemento = frutas.pop();
console.log(frutas); // Salida: ["manzana", "naranja", "plátano", "uva"]
console.log(ultimoElemento); // Salida: "mango"

// Método: unshift()
// Descripción: Agrega uno o más elementos al inicio del array.
frutas.unshift('pera', 'kiwi');
console.log(frutas); // Salida: ["pera", "kiwi", "manzana", "naranja", "plátano", "uva"]

// Método: shift()
// Descripción: Elimina el primer elemento del array y lo devuelve.
var primerElemento = frutas.shift();
console.log(frutas); // Salida: ["kiwi", "manzana", "naranja", "plátano", "uva"]
console.log(primerElemento); // Salida: "pera"

// Método: concat()
// Descripción: Combina dos o más arrays y devuelve un nuevo array.
var frutas2 = ['mango', 'sandía'];
var todasLasFrutas = frutas.concat(frutas2);
console.log(todasLasFrutas); // Salida: ["kiwi", "manzana", "naranja", "plátano", "uva", "mango", "sandía"]

// Método: slice()
// Descripción: Devuelve una copia superficial de una porción del array en un nuevo array.
var subArray = frutas.slice(1, 3);
console.log(subArray); // Salida: ["manzana", "naranja"]

// Método: splice()
// Descripción: Cambia el contenido de un array eliminando, reemplazando o agregando elementos.
var eliminados = frutas.splice(2, 1, 'limón', 'mandarina');
console.log(frutas); // Salida: ["kiwi", "manzana", "limón", "mandarina", "plátano", "uva"]
console.log(eliminados); // Salida: ["naranja"]

// Método: indexOf()
// Descripción: Devuelve la primera posición en la que se encuentra un elemento en el array.
var posicion = frutas.indexOf('plátano');
console.log(posicion); // Salida: 4

// Método: join()
// Descripción: Combina todos los elementos de un array en una cadena.
var cadena = frutas.join(', ');
console.log(cadena); // Salida: "kiwi, manzana, limón, mandarina, plátano, uva"

// Método: forEach()
// Descripción: Ejecuta una función para cada elemento del array.
frutas.forEach(function (fruta) {
    console.log(fruta);
});
// Salida:
// "kiwi"
// "manzana"
// "limón"
// "mandarina"
// "plátano"
// "uva"

// Método: map()
// Descripción: Crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array.
var numeros = [1, 2, 3, 4, 5];
var duplicados = numeros.map(function (numero) {
    return numero * 2;
});
console.log(duplicados); // Salida: [2, 4, 6, 8, 10]

// Método: filter()
// Descripción: Crea un nuevo array con todos los elementos que pasen una prueba.
var numerosPares = numeros.filter(function (numero) {
    return numero % 2 === 0;
});
console.log(numerosPares); // Salida: [2, 4]

// Método: reduce()
// Descripción: Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un único valor.
var suma = numeros.reduce(function (acumulador, numero) {
    return acumulador + numero;
}, 0);
console.log(suma); // Salida: 15
