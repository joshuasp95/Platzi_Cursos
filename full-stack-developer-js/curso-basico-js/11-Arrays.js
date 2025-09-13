// Creación de un array
var frutas = ['manzana', 'naranja', 'plátano', 'uva'];

// Acceder a elementos del array
console.log(frutas[0]); // Salida: "manzana"
console.log(frutas[2]); // Salida: "plátano"

// Modificar un elemento del array
frutas[1] = 'pera';
console.log(frutas); // Salida: ["manzana", "pera", "plátano", "uva"]

// Longitud del array
console.log(frutas.length); // Salida: 4

// Añadir elementos al final del array
frutas.push('mango');
console.log(frutas); // Salida: ["manzana", "pera", "plátano", "uva", "mango"]

// Eliminar el último elemento del array
frutas.pop();
console.log(frutas); // Salida: ["manzana", "pera", "plátano", "uva"]

// Iterar sobre un array con un bucle for
for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
// Salida:
// "manzana"
// "pera"
// "plátano"
// "uva"

// Encontrar la posición de un elemento en el array
var posicion = frutas.indexOf('plátano');
console.log(posicion); // Salida: 2

// Eliminar elementos de una posición específica
var eliminados = frutas.splice(1, 2);
console.log(eliminados); // Salida: ["pera", "plátano"]
console.log(frutas); // Salida: ["manzana", "uva"]

// Unir elementos de un array en una cadena
var cadena = frutas.join(', ');
console.log(cadena); // Salida: "manzana, uva"

// Crear una copia de un array
var copiaFrutas = frutas.slice();
console.log(copiaFrutas); // Salida: ["manzana", "uva"]
