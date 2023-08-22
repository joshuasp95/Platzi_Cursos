var change = true;

const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (change) {
      resolve("HolaMundo desde el asincronismo de JS");
    } else {
      reject("Whooooooooooops!");
    }
  });
};

anotherFunction()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

// Sección 1: Promesas y callbacks

// Ejemplo 1: Creación de una promesa básica
const promiseExample = new Promise((resolve, reject) => {
  // Aquí puedes realizar tareas asincrónicas
  // En este caso, simulamos un retardo de 2 segundos utilizando setTimeout
  setTimeout(() => {
    const success = false;

    if (success) {
      resolve("¡La promesa se resolvió exitosamente!");
    } else {
      reject("¡La promesa ha sido rechazada!");
    }
  }, 2000);
});

// Ejemplo 2: Utilizando una promesa con then y catch
promiseExample
  .then((result) => {
    console.log(result); // Imprime '¡La promesa se resolvió exitosamente!'
  })
  .catch((error) => {
    console.error(error); // Imprime '¡La promesa ha sido rechazada!'
  });

// Ejemplo 3: Utilizando una promesa con async/await
async function exampleWithAsyncAwait() {
  try {
    const result = await promiseExample;
    console.log(result); // Imprime '¡La promesa se resolvió exitosamente!'
  } catch (error) {
    console.error(error); // Imprime '¡La promesa ha sido rechazada!'
  }
}

exampleWithAsyncAwait();

// Sección 2: Asincronismo y await

// Ejemplo 1: Función asincrónica con await
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log("data-> ", data);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

fetchData();

// Ejemplo 2: Utilizando await en un bucle
async function processItems(items) {
  for (const item of items) {
    try {
      const processedItem = await processItem(item);
      console.log(processedItem);
    } catch (error) {
      console.error("Error al procesar el item:", error);
    }
  }
}

// Ejemplo 3: Utilizando Promise.all con await
async function fetchMultipleData() {
  try {
    const [data1, data2, data3] = await Promise.all([
      fetchData("https://api.example.com/data1"),
      fetchData("https://api.example.com/data2"),
      fetchData("https://api.example.com/data3"),
    ]);

    console.log(data1, data2, data3);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

fetchMultipleData();

// Ejemplo: Uso de promesas, async/await, callbacks y asincronismo en JavaScript

// Función que retorna una promesa
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     // Simulación de una operación asincrónica
//     setTimeout(() => {
//       const data = "Datos obtenidos de una fuente externa";

//       // Si se obtienen los datos correctamente, resolvemos la promesa
//       resolve(data);

//       // En caso de error, rechazamos la promesa
//       // reject(new Error('No se pudieron obtener los datos'));
//     }, 2000);
//   });
// }

// Ejemplo con promesas y callbacks
fetchData()
  .then((data) => {
    console.log("Datos obtenidos:", data);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });

// Ejemplo con async/await
async function fetchDataAsync() {
  try {
    const data = await fetchData();
    console.log("Datos obtenidos (async/await):", data);
  } catch (error) {
    console.log("Error (async/await):", error.message);
  }
}

fetchDataAsync();

// Resultado:
// - Si se obtienen los datos correctamente, se imprimirá:
//   "Datos obtenidos: Datos obtenidos de una fuente externa"
//   "Datos obtenidos (async/await): Datos obtenidos de una fuente externa"
// - Si ocurre un error, se imprimirá:
//   "Error: No se pudieron obtener los datos"
//   "Error (async/await): No se pudieron obtener los datos"

/*
  // Sección 3: Callbacks y manejo de errores
  
  // Ejemplo 1: Uso de callbacks para tareas asincrónicas
  function fetchDataWithCallback(callback) {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => callback(null, data))
      .catch(error```javascript
  // Sección 1: Promesas y callbacks
  
  // Ejemplo 1: Creación de una promesa básica
  const promiseExample = new Promise((resolve, reject) => {
    // Aquí puedes realizar tareas asíncronas
    // En este caso, simulamos un retardo de 2 segundos utilizando setTimeout
    setTimeout(() => {
      const success = true;
  
      if (success) {
        resolve('¡La promesa se resolvió exitosamente!');
      } else {
        reject('¡La promesa ha sido rechazada!');
      }
    }, 2000);
  });
  
  // Ejemplo 2: Utilizando una promesa con then y catch
  promiseExample
    .then((result) => {
      console.log(result); // Imprime '¡La promesa se resolvió exitosamente!'
    })
    .catch((error) => {
      console.error(error); // Imprime '¡La promesa ha sido rechazada!'
    });
  
  // Ejemplo 3: Utilizando una promesa con async/await
  async function exampleWithAsyncAwait() {
    try {
      const result = await promiseExample;
      console.log(result); // Imprime '¡La promesa se resolvió exitosamente!'
    } catch (error) {
      console.error(error); // Imprime '¡La promesa ha sido rechazada!'
    }
  }
  
  exampleWithAsyncAwait();
  
  
  // Sección 2: Asincronismo y await
  
  // Ejemplo 1: Función asincrónica con await
  async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }
  
  fetchData();
  
  // Ejemplo 2: Utilizando await en un bucle
  async function processItems(items) {
    for (const item of items) {
      try {
        const processedItem = await processItem(item);
        console.log(processedItem);
      } catch (error) {
        console.error('Error al procesar el item:', error);
      }
    }
  }
  
  // Ejemplo 3: Utilizando Promise.all con await
  async function fetchMultipleData() {
    try {
      const [data1, data2, data3] = await Promise.all([
        fetchData('https://api.example.com/data1'),
        fetchData('https://api.example.com/data2'),
        fetchData('https://api.example.com/data3')
      ]);
  
      console.log(data1, data2, data3);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }
  
  fetchMultipleData();
  
  
  // Sección 3: Callbacks y manejo de errores
  
  // Ejemplo 1: Uso de callbacks para tareas asíncronas
  function fetchDataWithCallback(callback) {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => callback(null, data))
      .catch(error => callback(error, null));
  }
  
  fetchDataWithCallback((error, data) => {
    if (error) {
      console.error('Error al obtener los datos:', error);
    } else {
      console.log(data);
    }
  });
  */
