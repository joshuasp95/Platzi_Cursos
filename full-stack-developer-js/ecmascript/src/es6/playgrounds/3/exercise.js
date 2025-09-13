// En la guardería de Michis "Michilango", están registrando nuevos michis, pero necesitan una forma de identificarlos.

// Tu tarea será proveer de una función getId() que se encargue de generar dichos identificadores y, a través de un método
//.next() se pueda pasar al siguiente identificador, y a través de la propiedad .value se pueda obtener el valor del nuevo identificador.

// Cada vez que llame a la función de la siguiente forma debería retornarme un identificador nuevo y completamente diferente:

// const id = getId();
// id.next().value

// El identificador puede ser de cualquier tipo (números o cadenas de texto), la única condición es que cada nuevo identificador que se retorne debe ser completamente diferente a los retornados anteriormente.

// Debes usar generadores de JavaScript para resolver este ejercicio. La solución debería tener un input y output como los siguientes:

// Ejemplo 1:

// Input:

// const id = getId()
// id.next().value
// id.next().value
// id.next().value

// Output:

// 1
// 2
// 3

// Ejemplo 2:

// Input:

// const id = getId()
// id.next().value
// id.next().value
// id.next().value

// Output:

// AX6SF5S
// G7QNW01
// KH3BR02

function* getId() {
  while (true) {
    var array = [];
    var number = parseInt(Math.random() * 100);
    var letter = String.fromCharCode(number);
    console.log(number + letter);
    var code = number + letter;
    array.push(code);
    yield array;
  }
}

const it = getId();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


// En la guardería de Michis "Michilango", están registrando nuevos michis, pero necesitan una forma de identificarlos.
// Tu tarea será proveer de una función getId() que se encargue de generar dichos identificadores y, a través de un método .next(), se pueda pasar al siguiente identificador, y a través de la propiedad .value se pueda obtener el valor del nuevo identificador.
// Cada vez que se llame a la función de la siguiente forma debería retornar un identificador nuevo y completamente diferente.

function* getId2() {
    let id = 1; // Inicializamos el identificador en 1
  
    while (true) {
      // Generamos un identificador único
      yield id;
  
      // Incrementamos el identificador para el próximo ciclo
      id++;
    }
  }
  
  // Ejemplo de uso:
  const idGenerator = getId2();
  
  console.log(idGenerator.next().value); // Imprime 1
  console.log(idGenerator.next().value); // Imprime 2
  console.log(idGenerator.next().value); // Imprime 3
  
  // En este ejemplo, creamos una función generadora getId() que utiliza un bucle while(true) para generar identificadores únicos.
  // Inicializamos el identificador en 1 y en cada iteración del bucle yield el valor actual del identificador.
  // Al llamar a la función getId() y asignarla a la variable idGenerator, obtenemos una instancia del generador.
  // Luego, utilizamos el método next().value para obtener el valor del próximo identificador generado en cada llamada.
  
  // La solución mejorada utiliza una lógica más simple y directa para generar los identificadores únicos.
  // Simplemente incrementamos un contador en cada iteración del generador para generar identificadores crecientes.
  
  // Espero que esta solución mejorada te sea útil para resolver el problema de generación de identificadores únicos.
  // Si tienes alguna otra pregunta, ¡no dudes en preguntar!
  