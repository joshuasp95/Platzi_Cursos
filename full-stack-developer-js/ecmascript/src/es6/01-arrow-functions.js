function square(num) {
  return num * num;
}

const squareArrow = (num) => {
  return num * num;
};

const squarImplicitReturn = (num) => num * num;

console.log(square(2));

console.log(squareArrow(5));

console.log(squarImplicitReturn(9));


// 1. Sintaxis más corta
// Las funciones de flecha ofrecen una forma más corta y concisa de declarar funciones.

// Aquí está una función tradicional (también conocida como "función de declaración" o "función de declaración de función"):
function saludoTradicional(nombre) {
  return "¡Hola, " + nombre + "!";
}
console.log(saludoTradicional("Alice")); // ¡Hola, Alice!

// Y aquí está la misma función, pero escrita como una función de flecha:
const saludoFlecha = (nombre) => {
  return "¡Hola, " + nombre + "!";
};
console.log(saludoFlecha("Bob")); // ¡Hola, Bob!

// Para funciones de una sola línea, las funciones de flecha permiten omitir las llaves ({}) y la palabra clave 'return':
const saludoFlechaCorto = (nombre) => "¡Hola, " + nombre + "!";
console.log(saludoFlechaCorto("Charlie")); // ¡Hola, Charlie!

// 2. No vinculan su propio 'this'
// Las funciones de flecha no tienen su propio 'this'. En su lugar, 'this' se refiere al contexto de la función circundante.

// Aquí hay un ejemplo que muestra la diferencia:

function PersonaTradicional(nombre) {
  this.nombre = nombre;
  this.saludar = function () {
    setTimeout(function () {
      // 'this' en este contexto es 'undefined', ya que esta función no fue llamada como un método de un objeto
      console.log("¡Hola, " + this.nombre + "!");
    }, 1000);
  };
}

const alice = new PersonaTradicional("Alice");
alice.saludar(); // ¡Hola, undefined!

// Pero si usamos una función de flecha para el método 'saludar', obtenemos un resultado diferente:

function PersonaFlecha(nombre) {
  this.nombre = nombre;
  this.saludar = function () {
    setTimeout(() => {
      // 'this' en este contexto se refiere al objeto 'PersonaFlecha', ya que las funciones de flecha no tienen su propio 'this'
      console.log("¡Hola, " + this.nombre + "!");
    }, 1000);
  };
}

const bob = new PersonaFlecha("Bob");
bob.saludar(); // ¡Hola, Bob!

// 3. No tienen los métodos 'call', 'apply' y 'bind'
// Las funciones de flecha no tienen sus propios métodos 'call', 'apply' y 'bind', que permiten cambiar el valor de 'this'.

// Esto significa que no puedes usar estos métodos para cambiar el contexto ('this') de una función de flecha.
