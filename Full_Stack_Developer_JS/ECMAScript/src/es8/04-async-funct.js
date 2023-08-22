// Definición de una función asíncrona que devuelve una promesa
const fnAsync = () => {
  return new Promise((resolve, reject) => {
    // Condición simulada (en este caso, siempre es verdadera)
    true
      ? setTimeout(() => resolve("AsynC!!"), 500) // Resuelve después de 2 segundos
      : reject(new Error("Error")); // Rechaza en caso contrario
  });
};

// Definición de otra función asíncrona
const anotherFn = async () => {
  // Uso de la función asíncrona previamente definida
  const something = await fnAsync(); // Espera a que se resuelva la promesa
  console.log(something); // Imprime "AsynC!!"
  console.log("Hello"); // Imprime "Hello"
};

console.log("before"); // Imprime "before"
anotherFn(); // Llamada a la función asíncrona
console.log("After"); // Imprime "After"

// Definición de una función que retorna una promesa para saludar con un retraso
const saludar = (mensaje, tiempo) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mensaje), tiempo);
    });
  };
  
  // Función asíncrona para mostrar mensajes de saludo
  const mostrarMensajes = async () => {
    const message = await saludar("Bienvenido", 1000); // Espera 1 segundo (1000 ms)
    console.log(message); // Imprime "Bienvenido"
    console.log("Joshua"); // Imprime "Joshua"
  };
  
  mostrarMensajes(); // Llamada a la función asíncrona para mostrar los mensajes
  
