// =========================
// PROBLEMAS Y ERRORES PECULIARES EN JAVASCRIPT
// =========================

// 1. COMPARACIÓN CON == vs ===
// ============================
console.log("1. COMPARACIÓN CON == vs ===");

console.log("0 == '0':", 0 == '0'); // true -> == hace conversión implícita
console.log("0 === '0':", 0 === '0'); // false -> === compara tipo y valor estrictamente

console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false

// Recomendación: Usar siempre === para evitar comparaciones ambiguas.


// 2. NaN (Not a Number) NO ES IGUAL A SÍ MISMO
// ============================================
console.log("\n2. NaN NO ES IGUAL A SÍ MISMO");

console.log("NaN === NaN:", NaN === NaN); // false
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true -> Forma correcta de verificar NaN

// Problema común: Si haces cálculos inválidos, el resultado será NaN, pero no lo identificarás con "==="


// 3. PROBLEMAS CON EL TIPO DE DATOS UNDEFINED Y NULL
// =================================================
console.log("\n3. PROBLEMAS CON undefined Y null");

let variableSinDefinir; // undefined
let variableNula = null; // null

console.log("Tipo de undefined:", typeof variableSinDefinir); // "undefined"
console.log("Tipo de null:", typeof variableNula); // "object" -> Error histórico de JavaScript

// Este comportamiento de typeof null como "object" es un bug conocido y ha persistido en el lenguaje.


// 4. COERCIÓN IMPLÍCITA DE TIPOS
// ==============================
console.log("\n4. COERCIÓN IMPLÍCITA DE TIPOS");

console.log("'5' + 5:", '5' + 5); // "55" -> Concatenación
console.log("'5' - 5:", '5' - 5); // 0 -> Conversión a número
console.log("true + 1:", true + 1); // 2 -> true se convierte en 1
console.log("false + 1:", false + 1); // 1 -> false se convierte en 0
console.log("[] + []:", [] + []); // "" -> Vacíos concatenados se convierten en string vacío
console.log("[1] + [1]:", [1] + [1]); // "11" -> Arrays se convierten a string y se concatenan

// Recomendación: Evitar depender de coerciones implícitas y usar conversiones explícitas (Number, String, etc).


// 5. OPERACIONES EXTRAÑAS CON Infinity
// ====================================
console.log("\n5. OPERACIONES EXTRAÑAS CON Infinity");

console.log("1 / 0:", 1 / 0); // Infinity
console.log("-1 / 0:", -1 / 0); // -Infinity
console.log("Infinity - Infinity:", Infinity - Infinity); // NaN
console.log("0 * Infinity:", 0 * Infinity); // NaN


// 6. ORDEN DE OPERACIONES EN OPERADORES LÓGICOS
// =============================================
console.log("\n6. ORDEN DE OPERACIONES EN OPERADORES LÓGICOS");

console.log("false || 'Hola':", false || 'Hola'); // "Hola" -> Devuelve el primer valor verdadero
console.log("true && 'Hola':", true && 'Hola'); // "Hola" -> Devuelve el último valor si ambos son true
console.log("0 || 'Default':", 0 || 'Default'); // "Default" -> 0 es falsy, retorna 'Default'

// Problema: Valores falsy como 0, "", null o undefined pueden dar resultados inesperados.


// 7. VALORES FALSY Y TRUTHY
// ==========================
console.log("\n7. VALORES FALSY Y TRUTHY");

console.log("Boolean(''):", Boolean('')); // false -> Cadena vacía es falsy
console.log("Boolean(0):", Boolean(0)); // false -> 0 es falsy
console.log("Boolean(null):", Boolean(null)); // false
console.log("Boolean(undefined):", Boolean(undefined)); // false
console.log("Boolean(NaN):", Boolean(NaN)); // false
console.log("Boolean([]):", Boolean([])); // true -> Un array vacío es truthy
console.log("Boolean({}):", Boolean({})); // true -> Un objeto vacío es truthy


// 8. REDONDEO DE NÚMEROS DECIMALES
// ================================
console.log("\n8. PROBLEMAS CON NÚMEROS DECIMALES");

let resultado = 0.1 + 0.2;
console.log("0.1 + 0.2:", resultado); // 0.30000000000000004 -> Error de precisión
console.log("¿Resultado === 0.3?:", resultado === 0.3); // false

// Solución: Redondear usando toFixed o métodos de Math
console.log("Redondeo a 2 decimales:", Number(resultado.toFixed(2))); // 0.3


// 9. VARIABLES DECLARADAS SIN LET, CONST O VAR
// ============================================
console.log("\n9. VARIABLES GLOBALES IMPLÍCITAS");

function problemaVariable() {
  variableImplicita = "Soy global sin querer"; // No tiene let, var o const -> se vuelve global
}
problemaVariable();
console.log("Variable global implícita:", variableImplicita);

// Recomendación: Usar "use strict" para evitar este tipo de errores.


// 10. OBJETOS Y REFERENCIAS
// ==========================
console.log("\n10. PROBLEMAS CON REFERENCIAS EN OBJETOS");

let obj1 = { nombre: "Juan" };
let obj2 = obj1; // obj2 referencia el mismo objeto que obj1
obj2.nombre = "Pedro";

console.log("obj1.nombre:", obj1.nombre); // "Pedro" -> Ambos apuntan al mismo objeto

// Solución: Clonar el objeto para evitar modificar la referencia
let obj3 = { ...obj1 }; // Spread operator
obj3.nombre = "María";
console.log("obj1.nombre después de clonar:", obj1.nombre); // "Pedro"
console.log("obj3.nombre:", obj3.nombre); // "María"



// =========================
// FIN DE PROBLEMAS COMUNES EN JAVASCRIPT
// =========================
console.log("\n¡FIN DE LOS PROBLEMAS Y ERRORES MÁS COMUNES DE JAVASCRIPT!");
