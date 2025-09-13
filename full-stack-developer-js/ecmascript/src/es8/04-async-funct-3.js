// Ejemplo 2: Manejo de errores en funciones asíncronas

// Definición de una función asíncrona que devuelve una promesa rechazada
const fetchDataWithError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Hubo un error")), 1500);
  });
};

// Función asíncrona para obtener y mostrar datos con manejo de errores
const displayDataWithErrors = async () => {
  try {
    console.log("Obteniendo datos...");
    const data = await fetchDataWithError(); // Espera a que fetchDataWithError se resuelva o se rechace
    console.log(data); // No se ejecuta debido al rechazo de la promesa
    console.log("Datos mostrados");
  } catch (error) {
    console.error("Error al obtener y mostrar datos:", error.message); // Imprime el mensaje de error
  }
};

console.log("Inicio del proceso");
displayDataWithErrors(); // Llamada a la función asíncrona con manejo de errores
console.log("Fin del proceso");
