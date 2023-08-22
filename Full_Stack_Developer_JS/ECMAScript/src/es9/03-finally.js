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
  .catch((err) => console.log(err))
  .finally(() => console.log("Finished"));


  const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue > 0.5) {
        resolve("Datos obtenidos con éxito");
      } else {
        reject("Error al obtener los datos");
      }
    }, 1000);
  });
};

fetchData()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("Fin de la operación");
  });
