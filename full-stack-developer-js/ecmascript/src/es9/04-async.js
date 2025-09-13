// Definición de un generador asíncrono llamado anotherGenerator
async function* anotherGenerator() {
  yield await Promise.resolve(1); // Yield de un valor resuelto por una promesa
  yield await Promise.resolve(5); // Yield de otro valor resuelto por una promesa
  yield await Promise.resolve(10); // Yield de otro valor resuelto por una promesa
  yield await Promise.resolve(15); // Yield de otro valor resuelto por una promesa
  yield await Promise.resolve(20); // Yield de otro valor resuelto por una promesa
}

const other = anotherGenerator(); // Creación de una instancia del generador

// other.next().then((response) => console.log(response.value));
// other.next().then((response) => console.log(response.value));
// other.next().then((response) => console.log(response.value));
// other.next().then((response) => console.log(response.value));
// other.next().then((response) => console.log(response.value));

// Función para recorrer el generador y mostrar valores
const iterateGenerator = async () => {
  let result;
  do {
    result = await other.next(); // Avanzar el generador y obtener el resultado
    if (!result.done) {
      console.log(result.value); // Mostrar el valor si no está marcado como "done"
    }
  } while (!result.done);
};

// Llamada a la función para recorrer el generador
console.log("Before");
iterateGenerator();

// Usando el bucle for await...of para recorrer el generador
(async () => {
  for await (const value of anotherGenerator()) {
    console.log(value);
  }
})();

// Definición de una función para iterar sobre un array de nombres usando async/await
async function arrayOfNames(array) {
  for await (const value of array) {
    console.log(value);
  }
}

// Llamada a la función arrayOfNames con un array de nombres
const names = arrayOfNames(["john", "fred", "dan"]);
