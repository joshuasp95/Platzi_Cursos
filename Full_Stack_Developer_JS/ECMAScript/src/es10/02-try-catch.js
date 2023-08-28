function hello() {
  console.log("Hello world!");
}

try {
  hello();
} catch (error) {
  console.error("Error --> ", error);
}

try {
  anotherFn();
} catch (error) {
  console.log("Error --> anotherFn() = undefined\n", error);
}


// Ejemplo 1: Optional Binding in Catch
try {
  // Intentamos ejecutar una función que podría generar un error
  const result = someFunction();
} catch (error) {
  // Usamos optional chaining para mostrar el mensaje de error si existe
  console.error("Ocurrió un error:", error.message);
}

// Ejemplo 2: Capturando múltiples excepciones con un solo catch
try {
  // Intentamos realizar un análisis JSON que podría generar un error
  const data = JSON.parse(invalidJson);
} catch (error) {
  // Capturamos el error y mostramos su mensaje
  console.error("Ocurrió un error:", error.message);
}

// Ejemplo 3: Encadenamiento opcional en catch
try {
  // Intentamos ejecutar una función que podría generar un error
  const result = someFunction();
} catch (error) {
  // Usamos optional chaining para mostrar el mensaje de error si existe
  console.error("Ocurrió un error:", error?.message);
}

// Ejemplo 4: Finally sin argumento
try {
  // Intentamos ejecutar una función que podría generar un error
  const result = someFunction();
} catch {
  // Capturamos el error, pero no necesitamos su detalle específico
  console.error("Ocurrió un error, pero no necesitamos su detalle");
} finally {
  // El bloque finally siempre se ejecuta, independientemente del resultado
  console.log("Este bloque siempre se ejecuta");
}

// Ejemplo 5: Nueva sintaxis con doble :: para manejo de excepciones
try {
  // Intentamos ejecutar una función que podría generar un error
  const result = someFunction();
} catch {
  // Capturamos y manejamos el error de manera simplificada
  console.error("Ocurrió un error");
}

// Ejemplo 6: Mejoras en errores asíncronos con async/await
async function fetchData() {
  try {
    // Intentamos realizar una solicitud a una API y obtener los datos
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log("Datos obtenidos:", data);
  } catch (error) {
    // Capturamos y mostramos el error en caso de fallo
    console.error("Error al obtener los datos:", error.message);
  }
}

fetchData();

// Ejemplo 7: Creación de errores personalizados
class CustomError extends Error {
  constructor(message) {
    // Llamamos al constructor de la clase base (Error) con el mensaje
    super(message);
    this.name = "CustomError"; // Establecemos el nombre del error personalizado
  }
}

try {
  // Lanzamos una instancia de nuestro error personalizado
  throw new CustomError("Este es un error personalizado");
} catch (error) {
  // Capturamos y mostramos el error personalizado
  console.error("Ocurrió un error:", error.name, error.message);
}
