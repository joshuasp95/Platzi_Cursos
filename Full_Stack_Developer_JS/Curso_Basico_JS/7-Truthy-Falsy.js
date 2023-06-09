// En JavaScript, existen valores truthy y falsy, que son evaluados como true o false en contextos booleanos.

// Valores falsy:
console.log(Boolean(false)); // Salida: false
console.log(Boolean(0)); // Salida: false
console.log(Boolean('')); // Salida: false
console.log(Boolean(null)); // Salida: false
console.log(Boolean(undefined)); // Salida: false
console.log(Boolean(NaN)); // Salida: false

// Valores truthy:
console.log(Boolean(true)); // Salida: true
console.log(Boolean(42)); // Salida: true
console.log(Boolean('Hola')); // Salida: true
console.log(Boolean([])); // Salida: true
console.log(Boolean({})); // Salida: true
console.log(Boolean(function () { })); // Salida: true

// Ejemplo de uso en una estructura condicional:
var nombre = '';

if (nombre) {
    console.log('El nombre es truthy');
} else {
    console.log('El nombre es falsy');
}
// Salida: El nombre es falsy

