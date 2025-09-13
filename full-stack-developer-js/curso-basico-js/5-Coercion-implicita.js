// Coerción en JavaScript se refiere a la conversión automática de un tipo de dato a otro tipo de dato
// cuando se realiza una operación. Esto puede ocurrir tanto en comparaciones como en operaciones aritméticas.

// Casos de uso de coerción:

// Conversión de número a cadena
var numero = 42;
var cadena = "El número es: " + numero; // Coerción implícita: número se convierte automáticamente a una cadena
console.log(cadena); // Salida: "El número es: 42"

// Conversión de cadena a número
var numero1 = "10";
var numero2 = 5;
var suma = numero1 + numero2; // Coerción implícita: cadena se convierte automáticamente a un número
console.log(suma); // Salida: 15 (concatenación de cadenas se convierte en suma de números)

// Conversión de booleano a número
var esVerdadero = true;
var esFalso = false;
var sumaBool = esVerdadero + esFalso; // Coerción implícita: booleano se convierte automáticamente a un número
console.log(sumaBool); // Salida: 1 (true se convierte en 1, false se convierte en 0)

// Conversión de cadena a booleano
var cadenaVacia = "";
var cadenaNoVacia = "Hola";
var esVacio = !cadenaVacia; // Coerción implícita: cadena se convierte automáticamente a un booleano
var esNoVacio = !!cadenaNoVacia; // Coerción implícita: cadena se convierte automáticamente a un booleano
console.log(esVacio); // Salida: true (cadena vacía se convierte en false, luego se invierte a true)
console.log(esNoVacio); // Salida: true (cadena no vacía se convierte en true)

// Conversión de número a booleano
var numero3 = 0;
var numero4 = 10;
var esCero = !numero3; // Coerción implícita: número se convierte automáticamente a un booleano
var esNoCero = !!numero4; // Coerción implícita: número se convierte automáticamente a un booleano
console.log(esCero); // Salida: true (0 se convierte en false, luego se invierte a true)
console.log(esNoCero); // Salida: true (número distinto de cero se convierte en true)
