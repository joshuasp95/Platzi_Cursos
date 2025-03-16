// =========================
// TIPOS DE DATOS EN JAVASCRIPT
// =========================

// 1. TIPO STRING (Cadenas de texto)
let cadena = "Hola, soy una cadena de texto"; // Uso de comillas dobles
let otraCadena = "Hola, también soy una cadena"; // Uso de comillas simples
let cadenaMultilinea = `Hola,
esto es una cadena
multilínea usando template literals.`; // Backticks para cadenas multilínea
let variableEnString = "Joshua es";

console.log("STRING:");
console.log(cadena);
console.log(otraCadena);
console.log(cadenaMultilinea);
console.log(`${variableEnString} un backend developer`);

// 2. TIPO NUMBER (Números)
let entero = 42; // Número entero
let decimal = 3.14; // Número decimal
let negativo = -100; // Número negativo
let notANumber = NaN; // Representa "Not a Number"

console.log("\nNUMBER:");
console.log("Entero:", entero);
console.log("Decimal:", decimal);
console.log("Negativo:", negativo);
console.log("NaN (Not a Number):", notANumber);

// 3. TIPO BOOLEAN (Booleanos)
let verdadero = true; // Valor booleano verdadero
let falso = false; // Valor booleano falso

console.log("\nBOOLEAN:");
console.log("Verdadero:", verdadero);
console.log("Falso:", falso);

// 4. TIPO UNDEFINED
let sinDefinir; // Declarada pero sin valor
console.log("\nUNDEFINED:");
console.log("Valor de 'sinDefinir':", sinDefinir);

// 5. TIPO NULL
let nulo = null; // Representa la ausencia intencional de valor
console.log("\nNULL:");
console.log("Valor de 'nulo':", nulo);

// 6. TIPO SYMBOL (Símbolos únicos e inmutables)
let simbolo1 = Symbol("descripcion");
let simbolo2 = Symbol("descripcion"); // Aunque tienen la misma descripción, son únicos

console.log("\nSYMBOL:");
console.log("Símbolo 1:", simbolo1);
console.log("Símbolo 2:", simbolo2);
console.log("¿Simbolo1 === Simbolo2?:", simbolo1 === simbolo2); // Devuelve false

// 7. TIPO OBJECT (Objetos)
// a) Objetos literales
let persona = {
  nombre: "Juan",
  edad: 30,
  esDesarrollador: true,
};

console.log("\nOBJECT:");
console.log("Objeto persona:", persona);

// b) Arrays (listas)
let array = [1, 2, 3, 4, 5]; // Array de números
let arrayMixto = [1, "texto", true, null]; // Array con diferentes tipos

console.log("\nARRAY:");
console.log("Array de números:", array);
console.log("Array mixto:", arrayMixto);

// c) Funciones
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
console.log("\nFUNCTION:");
console.log(saludar("Juan"));

// 8. TIPO BIGINT (Números muy grandes)
let numeroGrande = 9007199254740991n; // Se agrega una "n" al final
let sumaGrande = numeroGrande + 1n;

console.log("\nBIGINT:");
console.log("Número grande:", numeroGrande);
console.log("Suma grande:", sumaGrande);

// =========================
// RESUMEN DE TIPOS
// =========================
console.log("\nRESUMEN:");
console.log("String: 'texto'");
console.log("Number: 42, 3.14, NaN");
console.log("Boolean: true, false");
console.log("Undefined: variable sin asignar valor");
console.log("Null: ausencia intencional de valor");
console.log("Symbol: valores únicos");
console.log("Object: { clave: valor } o Arrays [ ]");
console.log("Function: funciones");
console.log("BigInt: 9007199254740991n");
