
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
Promise.any([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);
