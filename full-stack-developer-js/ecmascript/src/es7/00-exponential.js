// Uso del Operador de Exponente en JavaScript (ES6 y posteriores)

//El operador de exponente (`**`) en JavaScript te permite calcular potencias de una manera más sencilla y legible. Veamos cómo funciona con algunos ejemplos:

// Ejemplo 1: Calculando una potencia simple
const resultado1 = 3 ** 4; // 3 elevado a la 4ta potencia
console.log(resultado1);   // Salida: 81

// Ejemplo 2: Potencia de números decimales
const base = 2.5;
const exponente = 3;
const resultado2 = base ** exponente; // 2.5 elevado a la 3ra potencia
console.log(resultado2);              // Salida: 15.625

// Ejemplo 3: Potencia con números negativos
const resultado3 = (-2) ** 5; // -2 elevado a la 5ta potencia
console.log(resultado3);      // Salida: -32

// Ejemplo 4: Potencia con precedencia de operadores
const resultado4 = 2 ** 3 + 1; // Primero se calcula la potencia, luego se suma 1
console.log(resultado4);       // Salida: 9
