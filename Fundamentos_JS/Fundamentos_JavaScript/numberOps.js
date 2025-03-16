// =========================
// OPERACIONES CON NÚMEROS EN JAVASCRIPT
// =========================

// 1. DECLARACIÓN DE NÚMEROS
let numeroEntero = 42;       // Número entero
let numeroDecimal = 3.14;    // Número decimal
let numeroNegativo = -10;    // Número negativo

console.log("DECLARACIÓN DE NÚMEROS:");
console.log("Entero:", numeroEntero);
console.log("Decimal:", numeroDecimal);
console.log("Negativo:", numeroNegativo);

// =========================
// 2. OPERACIONES ARITMÉTICAS BÁSICAS
// =========================
let suma = 10 + 5;          // Adición
let resta = 10 - 5;         // Sustracción
let multiplicacion = 10 * 5; // Multiplicación
let division = 10 / 2;      // División
let modulo = 10 % 3;        // Resto de una división
let potencia = 2 ** 3;      // Potencia (2 elevado a 3)

console.log("\nOPERACIONES ARITMÉTICAS:");
console.log("Suma (10 + 5):", suma);
console.log("Resta (10 - 5):", resta);
console.log("Multiplicación (10 * 5):", multiplicacion);
console.log("División (10 / 2):", division);
console.log("Módulo (10 % 3):", modulo);
console.log("Potencia (2 ** 3):", potencia);

// =========================
// 3. INCREMENTO Y DECREMENTO
// =========================
let contador = 0;
console.log("\nINCREMENTO Y DECREMENTO:");
contador++;  // Incremento en 1
console.log("Incremento (++):", contador);
contador--;  // Decremento en 1
console.log("Decremento (--):", contador);

// =========================
// 4. MÉTODOS DE LA CLASE Math
// =========================

// a) Math.abs() - Valor absoluto
console.log("\nMÉTODOS DE Math:");
console.log("Valor absoluto de -10:", Math.abs(-10));

// b) Math.round() - Redondear al entero más cercano
console.log("Redondeo de 3.7:", Math.round(3.7));
console.log("Redondeo de 3.2:", Math.round(3.2));

// c) Math.floor() - Redondear hacia abajo
console.log("Redondeo hacia abajo de 3.7:", Math.floor(3.7));

// d) Math.ceil() - Redondear hacia arriba
console.log("Redondeo hacia arriba de 3.2:", Math.ceil(3.2));

// e) Math.trunc() - Eliminar la parte decimal
console.log("Parte entera de 3.7:", Math.trunc(3.7));

// f) Math.random() - Número aleatorio entre 0 y 1
console.log("Número aleatorio entre 0 y 1:", Math.random());

// g) Generar un número aleatorio entre un rango específico
let min = 1, max = 10;
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Número aleatorio entre ${min} y ${max}:`, numeroAleatorio);

// h) Math.max() y Math.min() - Máximo y mínimo de una lista
console.log("Máximo de (10, 5, 8):", Math.max(10, 5, 8));
console.log("Mínimo de (10, 5, 8):", Math.min(10, 5, 8));

// i) Math.sqrt() - Raíz cuadrada
console.log("Raíz cuadrada de 16:", Math.sqrt(16));

// j) Math.pow() - Potencia
console.log("2 elevado a 4:", Math.pow(2, 4));

// =========================
// 5. PARSEAR STRINGS A NÚMEROS
// =========================
let numeroComoString = "42.5";
console.log("\nCONVERSIÓN DE STRINGS A NÚMEROS:");
console.log("String original:", numeroComoString);

// a) parseInt() - Convertir a entero
let enteroParseado = parseInt(numeroComoString);
console.log("parseInt:", enteroParseado);

// b) parseFloat() - Convertir a decimal
let decimalParseado = parseFloat(numeroComoString);
console.log("parseFloat:", decimalParseado);

// c) Number() - Conversión directa a número
let numeroDirecto = Number(numeroComoString);
console.log("Number():", numeroDirecto);

// =========================
// 6. COMPROBAR TIPOS DE NÚMEROS
// =========================
console.log("\nCOMPROBACIÓN DE TIPOS DE NÚMEROS:");

// a) isNaN() - Comprobar si no es un número
console.log("¿'Hola' es NaN?:", isNaN("Hola"));
console.log("¿42 es NaN?:", isNaN(42));

// b) isFinite() - Verificar si es un número finito
console.log("¿42 es finito?:", isFinite(42));
console.log("¿Infinity es finito?:", isFinite(Infinity));

// c) Number.isInteger() - Verificar si es un número entero
console.log("¿42 es entero?:", Number.isInteger(42));
console.log("¿3.14 es entero?:", Number.isInteger(3.14));

// =========================
// 7. NÚMEROS GRANDES (BIGINT)
// =========================
let numeroGrande = 9007199254740991n; // BigInt
let sumaGrande = numeroGrande + 1n;

console.log("\nNÚMEROS GRANDES (BIGINT):");
console.log("Número grande:", numeroGrande);
console.log("Suma de BigInt:", sumaGrande);

// =========================
// 8. OPERACIONES ESPECIALES
// =========================
console.log("\nOPERACIONES ESPECIALES:");
console.log("División por cero (10 / 0):", 10 / 0); // Infinity
console.log("Operación inválida (0 / 0):", 0 / 0); // NaN

// =========================
// FIN DEL TUTORIAL
// =========================
console.log("\n¡FIN DEL TUTORIAL DE OPERACIONES CON NÚMEROS!");



// Problemas de precision
const resultado = 0.1 + 0.2;
console.log(resultado.toFixed(1));
// Problemas de comparacion
console.log(resultado === 0.3);


