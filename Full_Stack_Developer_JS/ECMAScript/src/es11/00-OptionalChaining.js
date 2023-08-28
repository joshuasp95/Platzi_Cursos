// Definición de un objeto que contiene usuarios con información personal
const users = {
  user1: {
    name: "John",
    age: 21,
    email: "john@example.com",
  },
  user2: {
    name: "Jim",
    age: 23,
    email: "jim@example.com",
  },
};

// Mostrar el objeto 'users' en la consola
console.log("Objeto 'users':");
console.log(users);

// Acceso a una propiedad específica del objeto 'users'
console.log("Nombre del user1:", users.user1.name); // Resultado: "John"

// Intento de acceso a una propiedad que no existe usando optional chaining
console.log("Nombre del user3 (usando optional chaining):", users?.user3?.name); // Resultado: undefined

// Acceso seguro a propiedades anidadas con optional chaining
console.log("Edad del user2 (usando optional chaining):", users?.user2?.age); // Resultado: 23

// Ejemplo de acceso a propiedad anidada inexistente con optional chaining
console.log("Edad del user3 (usando optional chaining):", users?.user3?.age); // Resultado: undefined

// Uso de optional chaining con métodos
console.log(
  "Longitud del nombre del user2 (usando optional chaining):",
  users?.user2?.name?.length
); // Resultado: 3

// Acceso seguro a propiedades dentro de un array usando optional chaining
const arrayOfUsers = [users.user1, users.user2];
console.log("Array of users", arrayOfUsers);
console.log(
  "Nombre del primer usuario (usando optional chaining en array):",
  arrayOfUsers?.[0]?.name
); // Resultado: "John"
console.log(
  "Nombre del tercer usuario (usando optional chaining en array):",
  arrayOfUsers?.[2]?.name
); // Resultado: undefined
