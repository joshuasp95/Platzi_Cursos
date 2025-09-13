// ES8 (ECMAScript 2017) - Novedades y Ejemplos

// 1. String padding
const mensaje = "Hola";
console.log(mensaje.padStart(10, "-")); // Salida: "------Hola"
console.log(mensaje.padEnd(10, "-"));   // Salida: "Hola------"

// 2. Object.values() y Object.entries()
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid"
};
const valores = Object.values(persona);
console.log(valores); // Salida: ["Juan", 30, "Madrid"]

const entradas = Object.entries(persona);
console.log(entradas);
// Salida: [["nombre", "Juan"], ["edad", 30], ["ciudad", "Madrid"]]

// 3. Trailing commas en parámetros de función
function sumar(a, b, c,) {
  return a + b + c;
}
console.log(sumar(1, 2, 3)); // Salida: 6

// 4. async/await con try-catch
async function obtenerDatos() {
  try {
    const respuesta = await fetch("https://api.example.com/data");
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

// 5. Shared Memory y Atomics (para programación multihilo)
// Estas características están relacionadas con Web Workers y
// programación multihilo en el contexto del navegador.
// Más allá de este ejemplo, su uso es más avanzado.

// 6. Object.getOwnPropertyDescriptors()
const objeto = {
  propiedad: "valor"
};
const descriptores = Object.getOwnPropertyDescriptors(objeto);
console.log(descriptores.propiedad);
// Salida: { value: 'valor', writable: true, enumerable: true, configurable: true }
