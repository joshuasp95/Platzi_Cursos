// Definición de un array de pares clave-valor utilizando notación de array
const keyValuePairs = [
  ["nombre", "Juan"],
  ["edad", 30],
  ["profesion", "ingeniero"],
];

// Usando Object.fromEntries() para convertir el array en un objeto
const personObject = Object.fromEntries(keyValuePairs);

console.log("Resultado del primer ejemplo:");
console.log(personObject);
// Resultado: { nombre: 'Juan', edad: 30, profesion: 'ingeniero' }

// Creación de un objeto Map con pares clave-valor utilizando la clase Map
const entries = new Map([
  ["nombre", "Jon"],
  ["edad", 58],
  ["profesion", "medico"],
]);

// Usando Object.fromEntries() con un objeto Map para convertirlo en un objeto
const newPersonObject = Object.fromEntries(entries);

console.log("Resultado del segundo ejemplo:");
console.log(newPersonObject);
// Resultado: { nombre: 'Jon', edad: 58, profesion: 'medico' }

// Ejemplo con más pares clave-valor
const moreEntries = [
  ["ubicacion", "ciudad"],
  ["hobby", "senderismo"],
  ["casado", false],
];

const morePersonObject = Object.fromEntries(moreEntries);

console.log("Resultado del tercer ejemplo:");
console.log(morePersonObject);
// Resultado: { ubicacion: 'ciudad', hobby: 'senderismo', casado: false }

// Ejemplo con objeto Map más grande
const largeEntries = new Map([
  ["ciudad", "Nueva York"],
  ["estado", "Nueva York"],
  ["pais", "Estados Unidos"],
  ["idioma", "inglés"],
]);

const largePersonObject = Object.fromEntries(largeEntries);

console.log("Resultado del cuarto ejemplo:");
console.log(largePersonObject);
// Resultado: { ciudad: 'Nueva York', estado: 'Nueva York', pais: 'Estados Unidos', idioma: 'inglés' }
