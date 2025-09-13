// ==============================
// CONVERSIONES EXPLÍCITAS
// ==============================

// Ejemplo 1: Convertir una cadena numérica en un entero
const string = "33";
const integer = parseInt(string);

console.log("Conversión explícita: Cadena a Entero");
console.log(`Valor original (string): "${string}"`);
console.log(`Valor convertido (integer): ${integer}`); // 33
console.log(`Tipo del valor convertido: ${typeof integer}`); // number

// Ejemplo 2: Convertir una cadena numérica decimal en un número decimal (float)
const stringDecimal = '3.14';
const float = parseFloat(stringDecimal);

console.log("\nConversión explícita: Cadena decimal a Float");
console.log(`Valor original (stringDecimal): "${stringDecimal}"`);
console.log(`Valor convertido (float): ${float}`); // 3.14
console.log(`Tipo del valor convertido: ${typeof float}`); // number

// Ejemplo 3: Convertir una cadena binaria a un número decimal
const binary = '1001';
const decimal = parseInt(binary, 2); // Base 2 para números binarios

console.log("\nConversión explícita: Binario a Decimal");
console.log(`Valor original (binary): "${binary}"`);
console.log(`Valor convertido (decimal): ${decimal}`); // 9
console.log(`Tipo del valor convertido: ${typeof decimal}`); // number

// ==============================
// CONVERSIONES IMPLÍCITAS
// ==============================

console.log("\nCONVERSIONES IMPLÍCITAS");

// Ejemplo 1: Concatenación de cadena y número
const sum = '4' + 8; // La cadena convierte al número en string automáticamente
console.log("Cadena + Número:");
console.log(`Resultado: "${sum}"`); // "48"
console.log(`Tipo del resultado: ${typeof sum}`); // string

// Ejemplo 2: Concatenación de cadena y booleano
const sumWithBoolean = '5' + true; // true se convierte a "true" y se concatena
console.log("\nCadena + Booleano:");
console.log(`Resultado: "${sumWithBoolean}"`); // "5true"
console.log(`Tipo del resultado: ${typeof sumWithBoolean}`); // string

// Ejemplo 3: Suma de número y booleano
const sumWithNumber = 2 + true; // true se convierte a 1 y se suma
console.log("\nNúmero + Booleano:");
console.log(`Resultado: ${sumWithNumber}`); // 3
console.log(`Tipo del resultado: ${typeof sumWithNumber}`); // number

// ==============================
// VARIAS COMBINACIONES IMPLÍCITAS
// ==============================

const stringValue = '5';
const numberValue = 6;
const booleanValue = true;

console.log("\nDIFERENTES COMBINACIONES DE TIPOS DE DATOS:");

console.log(`Cadena + Cadena: "${stringValue}" + "${stringValue}" -> "${stringValue + stringValue}"`); // "55"
console.log(`Cadena + Número: "${stringValue}" + ${numberValue} -> "${stringValue + numberValue}"`); // "56"
console.log(`Cadena + Booleano: "${stringValue}" + ${booleanValue} -> "${stringValue + booleanValue}"`); // "5true"
console.log(`Número + Cadena: ${numberValue} + "${stringValue}" -> "${numberValue + stringValue}"`); // "65"
console.log(`Número + Número: ${numberValue} + ${numberValue} -> ${numberValue + numberValue}`); // 12
console.log(`Número + Booleano: ${numberValue} + ${booleanValue} -> ${numberValue + booleanValue}`); // 7
console.log(`Booleano + Cadena: ${booleanValue} + "${stringValue}" -> "${booleanValue + stringValue}"`); // "true5"
console.log(`Booleano + Número: ${booleanValue} + ${numberValue} -> ${booleanValue + numberValue}`); // 7
console.log(`Booleano + Booleano: ${booleanValue} + ${booleanValue} -> ${booleanValue + booleanValue}`); // 2

// ==============================
// RESUMEN
// ==============================
console.log("\nRESUMEN DE COMPORTAMIENTO:");
console.log(`- La suma (operador '+') con cadenas produce concatenación.`);
console.log(`- Booleanos se convierten a 1 (true) o 0 (false) en operaciones numéricas.`);
console.log(`- El uso de "parseInt" y "parseFloat" permite una conversión explícita segura.`);
console.log(`- ¡Evita depender de la coerción implícita para evitar resultados inesperados!`);
