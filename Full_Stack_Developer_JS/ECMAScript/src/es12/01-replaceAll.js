// Definición de una cadena de texto
const str = "This is a comment for testing replace all function in JavaScript";

// Reemplazo de una instancia de la palabra "comment" por "script"
const replacedString = str.replace("comment", "script");
console.log("Cadena reemplazada:", replacedString);

// Reemplazo global de todas las instancias de "is" por "was"
const globalReplacedString = str.replaceAll("is", "was");
console.log("Cadena con reemplazo global:", globalReplacedString);

// Reemplazo de una instancia de "JavaScript" por "JS"
const jsReplacedString = str.replace("JavaScript", "JS");
console.log("Cadena con reemplazo de 'JavaScript' por 'JS':", jsReplacedString);

// Reemplazo global de todas las instancias de "a" por "A"
const caseInsensitiveReplacedString = str.replaceAll("a", "A");
console.log("Cadena con reemplazo insensible a mayúsculas y minúsculas:", caseInsensitiveReplacedString);
