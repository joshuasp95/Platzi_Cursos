// Definición de un array de pares clave-valor
const keyValuePairs = [
  ["nombre", "Juan"],
  ["edad", 30],
  ["profesion", "ingeniero"],
];

// Usando Object.fromEntries() para convertir el array en un objeto
const personObject = Object.fromEntries(keyValuePairs);

console.log(personObject);
// Resultado: { nombre: 'Juan', edad: 30, profesion: 'ingeniero' }

const entries = new Map([
  ["nombre", "Jon"],
  ["edad", 58],
  ["profesion", "medico"],
]);

console.log(Object.fromEntries(entries));
