// Definición de una matriz multidimensional que contiene varios niveles de anidamiento
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, [2, 4, [6, 9]], 5], // Elementos anidados en varios niveles
];

// Utilizando el método flat() con un argumento de profundidad 3 para aplanar la matriz
console.log(matrix.flat(3)); // Resultado aplanado: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 4, 6, 9, 5]

// Reasignación de la matriz a una versión sin anidamientos profundos
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Definición de una matriz de números para ejemplos posteriores
const numbers = [1, 2, 3, 4];

// Usando map() y flat() por separado para transformar y aplanar la matriz de números
const mappedAndFlattened = numbers.map((num) => [num * 2, num * 3]).flat();
console.log(mappedAndFlattened); // Resultado: [2, 3, 4, 6, 6, 9, 8, 12]

// Usando flatMap() para transformar y aplanar la matriz de números en un solo paso
const flatMapped = numbers.flatMap((num) => [num * 2, num * 3]);
console.log(flatMapped); // Resultado: [2, 3, 4, 6, 6, 9, 8, 12]

// Mostrando la matriz original de números
console.log("numbers", numbers); // Resultado: [1, 2, 3, 4]

// Usando map() para transformar la matriz de números en una matriz de arrays
const mapped = numbers.map((num) => [num * 2, num * 3]);

// Usando map() para mostrar cada array resultante
mapped.map((n) => console.log(n)); // Resultados individuales: [2, 3], [4, 6], [6, 9], [8, 12]
