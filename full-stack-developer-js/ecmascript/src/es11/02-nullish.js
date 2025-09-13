// Definición de una variable con valor nulo
const anotherNumber = null;

// Uso del operador de fusión en nulo (??) para asignar un valor predeterminado
const number = (anotherNumber ?? 3) + 3;

// Mostrar el resultado en la consola
console.log("Número usando operador de fusión en nulo:", number); // Resultado: 3

// Definición de variables con valores y valores nulos
const username = "Alice";
const age = 30;
let city; // Valor no definido

// Uso del operador de fusión en nulo (??) para asignar un valor predeterminado
const displayName = username ?? "Usuario anónimo";
const userAge = age ?? "Edad no disponible";
const userCity = city ?? "Ubicación desconocida";

// Mostrar los resultados en la consola
console.log("Nombre de usuario:", displayName); // Resultado: "Alice"
console.log("Edad del usuario:", userAge); // Resultado: 30
console.log("Ciudad del usuario:", userCity); // Resultado: "Ubicación desconocida"
