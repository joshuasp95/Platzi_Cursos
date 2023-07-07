function newUser(name, age, country, uId) {
  return { name, age, country, id: uId };
}

console.log(newUser("homelander", 35, "US", 1));

// Ejemplo 3: Añadir propiedades y métodos a un object literal
const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    startEngine: function() {
      console.log('El motor ha arrancado.');
    }
  };
  
  car.color = 'blue'; // Añadir una nueva propiedad
  
  console.log(car); // Imprime { brand: 'Toyota', model: 'Corolla', year: 2020, startEngine: [Function], color: 'blue' }
  car.startEngine(); // Llama al método startEngine y muestra 'El motor ha arrancado.'
  