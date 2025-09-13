// =========================
// OPERACIONES CON STRINGS EN JAVASCRIPT
// =========================

// Declaración de strings
let saludo = "Hola";
let nombre = "Juan";
let frase = "  Bienvenido al mundo de JavaScript.  ";

console.log("STRINGS ORIGINALES:");
console.log("Saludo:", saludo);
console.log("Nombre:", nombre);
console.log("Frase:", frase);

// 1. Concatenación de strings
let mensaje = saludo + ", " + nombre + "!";
console.log("\nCONCATENACIÓN:");
console.log("Mensaje:", mensaje);

// Usando template literals
let mensajeTemplate = `${saludo}, ${nombre}!`;
console.log("Mensaje con Template Literal:", mensajeTemplate);

// 2. Propiedad length (longitud de la cadena)
console.log("\nLONGITUD DE STRINGS:");
console.log(`Longitud de "${saludo}":`, saludo.length);
console.log(`Longitud de "${frase}":`, frase.length);

// 3. Acceder a caracteres individuales
console.log("\nACCESO A CARACTERES:");
console.log(`Primer carácter de "${saludo}":`, saludo[0]);
console.log(`Último carácter de "${saludo}":`, saludo[saludo.length - 1]);

// 4. Convertir a mayúsculas y minúsculas
console.log("\nCONVERSIÓN DE MAYÚSCULAS/MINÚSCULAS:");
console.log("En mayúsculas:", saludo.toUpperCase());
console.log("En minúsculas:", saludo.toLowerCase());

// 5. indexOf y lastIndexOf
console.log("\nBÚSQUEDA CON indexOf y lastIndexOf:");
console.log(`Posición de "a" en "${saludo}":`, saludo.indexOf("a"));
console.log(`Última posición de "a" en "${frase}":`, frase.lastIndexOf("a"));

// 6. includes y startsWith y endsWith
console.log("\nMÉTODOS includes, startsWith, endsWith:");
console.log(`¿"${frase}" incluye "JavaScript"?`, frase.includes("JavaScript"));
console.log(`¿"${frase}" empieza con "Bienvenido"?`, frase.startsWith("Bienvenido"));
console.log(`¿"${frase}" termina con "JavaScript."?`, frase.trim().endsWith("JavaScript."));

// 7. substring, substr y slice
console.log("\nEXTRACCIÓN DE SUBCADENAS:");
console.log("substring(2, 5):", saludo.substring(2, 5));
console.log("substr(2, 2):", saludo.substr(2, 2));
console.log("slice(1, -1):", saludo.slice(1, -1));

// 8. replace y replaceAll
let nuevaFrase = frase.replace("JavaScript", "JS");
console.log("\nREEMPLAZO DE SUBCADENAS:");
console.log("Frase original:", frase);
console.log("Frase modificada:", nuevaFrase);

// 9. split
let palabras = frase.trim().split(" ");
console.log("\nDIVIDIR CADENA EN ARRAY:");
console.log("Array de palabras:", palabras);

// 10. trim, trimStart, trimEnd
console.log("\nELIMINAR ESPACIOS EN BLANCO:");
console.log("Frase con espacios:", `"${frase}"`);
console.log("Frase sin espacios (trim):", `"${frase.trim()}"`);

// 11. repeat
console.log("\nREPETIR CADENA:");
console.log("Saludo repetido 3 veces:", saludo.repeat(3));

// 12. Concatenación con concat()
console.log("\nCONCATENACIÓN CON concat():");
let saludoCompleto = saludo.concat(", ", nombre, "!");
console.log("Saludo completo:", saludoCompleto);

// 13. charAt y charCodeAt
console.log("\nOBTENCIÓN DE CARACTERES Y CÓDIGOS UNICODE:");
console.log("Caracter en posición 1:", saludo.charAt(1));
console.log("Código Unicode del caracter en posición 1:", saludo.charCodeAt(1));

// 14. fromCharCode
console.log("\nCREAR CADENA DESDE CÓDIGOS UNICODE:");
console.log("Caracter Unicode 72:", String.fromCharCode(72)); // H

// 15. match y matchAll (Expresiones regulares)
let texto = "El perro de San Roque no tiene rabo.";
let regex = /r\w+/g;
console.log("\nBÚSQUEDA CON EXPRESIONES REGULARES:");
console.log("Palabras que empiezan con 'r':", texto.match(regex));

// =========================
// FIN DE LAS OPERACIONES CON STRINGS
// =========================


