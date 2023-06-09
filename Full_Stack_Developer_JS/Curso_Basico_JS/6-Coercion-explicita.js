// Conversiones explícitas en JavaScript permiten convertir tipos de datos de manera controlada utilizando funciones y operadores específicos.

// Conversión de cadena a número
var cadenaNumero = "42";
var numero = Number(cadenaNumero);
console.log(numero); // Salida: 42

// Conversión de número a cadena
var numeroCadena = 42;
var cadena = numeroCadena.toString();
console.log(cadena); // Salida: "42"

// Conversión de cadena a booleano
var cadenaBool = "true";
var bool = Boolean(cadenaBool);
console.log(bool); // Salida: true

// Conversión de booleano a cadena
var boolCadena = true;
var cadenaBool = String(boolCadena);
console.log(cadenaBool); // Salida: "true"

// Conversión de número a booleano
var numeroBool = 0;
var boolNumero = Boolean(numeroBool);
console.log(boolNumero); // Salida: false

// Conversión de booleano a número
var boolNumero = true;
var numeroBool = Number(boolNumero);
console.log(numeroBool); // Salida: 1
