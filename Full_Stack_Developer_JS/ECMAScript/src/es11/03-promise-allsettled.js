// Función simulada para descargar datos de una fuente
function downloadData(source) {
    return new Promise(function (resolve, reject) {
      // Simulación de descarga exitosa
      if (source === "fuenteA") {
        setTimeout(() => resolve("Datos de la Fuente A"), 1500);
      }
      // Simulación de descarga fallida
      else if (source === "fuenteB") {
        setTimeout(() => reject("Error en la Fuente B"), 2000);
      }
      // Simulación de descarga exitosa
      else if (source === "fuenteC") {
        setTimeout(() => resolve("Datos de la Fuente C"), 1000);
      } else {
        reject("Fuente desconocida");
      }
    });
  }
  
  // Descarga de datos de múltiples fuentes
  const promiseA = downloadData("fuenteA");
  const promiseB = downloadData("fuenteB");
  const promiseC = downloadData("fuenteC");
  
  // Uso de Promise.allSettled() para esperar todas las descargas
  Promise.allSettled([promiseA, promiseB, promiseC]).then((results) => {
    console.log("Resultados de las descargas:");
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`Fuente ${index + 1}: ${result.value}`);
      } else {
        console.log(`Fuente ${index + 1}: Error - ${result.reason}`);
      }
    });
  });
  


// Creación de promesas con diferentes resultados
const promise1 = new Promise(function (resolve, reject) {
    reject("Reject"); // Promesa rechazada con mensaje "Reject"
  });
  
  const promise2 = new Promise(function (resolve, reject) {
    resolve("Resolve"); // Promesa resuelta con mensaje "Resolve"
  });
  
  const promise3 = new Promise(function (resolve, reject) {
    resolve("Resolve 2"); // Promesa resuelta con mensaje "Resolve 2"
  });
  
  // Uso de Promise.allSettled() para esperar todas las promesas
  Promise.allSettled([promise1, promise2, promise3]).then((response) =>
    console.log("Resultado de Promise.allSettled:", response)
  );
  
  