let hello = "Hello";
let world = "world";
let init = hello + " " + world + "! - 1";
console.log(init);

//Template literals

let init2 = `${hello} ${world}! - 2`;
console.log(init2);

//Multi-line strings
let lorem = "Lorem ipsum dolor sit amet, \n" + " consectetur adip";

let lorem2 = `Lorem ipsum dolor sit amet,
 consectetur adip`; 

console.log(lorem);
console.log(lorem2);

// 1. Cadenas de texto simples (String)
// Las cadenas de texto en JavaScript pueden ser definidas usando comillas simples ('') o dobles ("").

let string1 = '¡Hola, mundo!';
let string2 = "¡Hola, mundo!";
console.log(string1); // ¡Hola, mundo!
console.log(string2); // ¡Hola, mundo!

// Las cadenas de texto en JavaScript son inmutables, lo que significa que no puedes cambiar un carácter de la cadena directamente.

// 2. Plantillas literales (Template Literals)
// Las plantillas literales (introducidas en ES6) proporcionan una sintaxis más sencilla para trabajar con cadenas de texto complejas.
// Puedes definir una plantilla literal utilizando acentos graves (``).

let nombre = 'Alice';
let saludo = `¡Hola, ${nombre}!`;
console.log(saludo); // ¡Hola, Alice!

// Dentro de las plantillas literales, puedes usar la sintaxis ${} para insertar expresiones JavaScript.

let x = 5;
let y = 10;
console.log(`La suma de ${x} y ${y} es ${x + y}.`); // La suma de 5 y 10 es 15.

// 3. Cadenas multilínea
// Antes de ES6, las cadenas multilínea requerían el uso de la secuencia de escape \n para crear una nueva línea.

let multilinea1 = 'Línea 1\nLínea 2';
console.log(multilinea1);
// Línea 1
// Línea 2

// Con ES6, las plantillas literales hacen que las cadenas multilínea sean mucho más sencillas.

let multilinea2 = `Línea 1
Línea 2`;
console.log(multilinea2);
// Línea 1
// Línea 2

// En una plantilla literal, todo el texto entre los acentos graves es parte de la cadena, incluyendo los saltos de línea.

