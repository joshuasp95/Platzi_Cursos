function newUser(name, age, country) {
  var name = name || "Joshua";
  var age = age || 27;
  var country = country || "MX";
  console.log(name, age, country);
}
newUser();
newUser("John", 68, "US");

function newAdmin(name = "Matt", age = 40, country = "CAN") {
  console.log(name, age, country);
}

newAdmin();
newAdmin("John", 68, "US");

// Definimos una función llamada saludar que tiene dos parámetros: nombre y mensaje.
// El parámetro mensaje tiene asignado un valor predeterminado de 'Hola'.
function saludar(nombre, mensaje = "Hola") {
  // Si no se proporciona un nombre, establecemos un valor predeterminado de 'Usuario'.
  if (!nombre) {
    nombre = "Usuario";
  }

  // Imprimimos el mensaje utilizando el nombre proporcionado y el mensaje predeterminado.
  console.log(`${mensaje}, ${nombre}!`);
}

// Ejemplo 1: Se proporciona un nombre y un mensaje.
saludar("Juan", "¡Hola");

// Ejemplo 2: Se proporciona solo un nombre, el mensaje será el predeterminado.
saludar("María");

// Ejemplo 3: No se proporciona ningún nombre ni mensaje.
saludar();

// Resultado:
// Ejemplo 1: Imprime '¡Hola, Juan!'
// Ejemplo 2: Imprime 'Hola, María!'
// Ejemplo 3: Imprime 'Hola, Usuario!'
