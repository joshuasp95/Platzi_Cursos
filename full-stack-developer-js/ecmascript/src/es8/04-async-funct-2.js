// +EJEMPLOS

// Ejemplo 1: Función asíncrona simple con await

// Definición de una función asíncrona que devuelve una promesa
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Datos obtenidos"), 1500);
  });
};

// Función asíncrona para obtener y mostrar datos
const displayData = async () => {
  console.log("Obteniendo datos...");
  const data = await fetchData(); // Espera a que fetchData se resuelva
  console.log(data); // Imprime "Datos obtenidos"
  console.log("Datos mostrados");
};

console.log("Inicio del proceso");
displayData(); // Llamada a la función asíncrona
console.log("Fin del proceso");
