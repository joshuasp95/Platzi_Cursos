//function* --> generator

function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["john", "fred", "marc", "james", "megan"]);
console.log(it.next().value);



// Tutorial: Generadores en JavaScript

// Los generadores son una característica poderosa en JavaScript que permiten la creación de funciones iterables y pausables. Se definen utilizando la función * y utilizan la palabra clave yield para pausar la ejecución.

// Ejemplo básico de un generador
function* miGenerador() {
  yield 1;
  yield 2;
  yield 3;
}

// Creamos una instancia del generador
const generador = miGenerador();

// Iteramos sobre los valores generados utilizando el método next()
console.log(generador.next()); // Imprime { value: 1, done: false }
console.log(generador.next()); // Imprime { value: 2, done: false }
console.log(generador.next()); // Imprime { value: 3, done: false }
console.log(generador.next()); // Imprime { value: undefined, done: true }

// En este ejemplo, creamos una función generadora llamada miGenerador utilizando la sintaxis function*.
// Dentro del generador, utilizamos la palabra clave yield para pausar la ejecución y retornar un valor.
// Al llamar al generador y asignarlo a la variable generador, obtenemos una instancia del generador.
// Luego, utilizamos el método next() para iterar sobre los valores generados. Cada llamada a next() devuelve un objeto con dos propiedades: value (valor generado) y done (un indicador booleano que muestra si se ha alcanzado el final del generador).

// Generadores infinitos
function* generadorInfinito() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

// Creamos una instancia del generador infinito
const infinito = generadorInfinito();

// Iteramos sobre los valores generados utilizando el método next()
console.log(infinito.next()); // Imprime { value: 0, done: false }
console.log(infinito.next()); // Imprime { value: 1, done: false }
console.log(infinito.next()); // Imprime { value: 2, done: false }
// ...

// En este ejemplo, creamos un generador infinito utilizando un bucle while(true) y la palabra clave yield dentro del bucle.
// Al llamar al generador y asignarlo a la variable infinito, obtenemos una instancia del generador infinito.
// Utilizamos el método next() para iterar sobre los valores generados. En este caso, el generador generará valores infinitamente hasta que se detenga manualmente.

// Uso de yield* para delegar a otro generador
function* generadorPadre() {
  yield 'Hola';
  yield* generadorHijo();
  yield 'Adiós';
}

function* generadorHijo() {
  yield 'Mundo';
}

// Creamos una instancia del generador padre
const padre = generadorPadre();

// Iteramos sobre los valores generados utilizando el método next()
console.log(padre.next()); // Imprime { value: 'Hola', done: false }
console.log(padre.next()); // Imprime { value: 'Mundo', done: false }
console.log(padre.next()); // Imprime { value: 'Adiós', done: false }
console.log(padre.next()); // Imprime { value: undefined, done: true }

// En este ejemplo, creamos dos generadores: generadorPadre y generadorHijo.
// En el generadorPadre, utilizamos la palabra clave yield* seguida del generadorHijo para delegar la generación de valores al generadorHijo.
// Al llamar al generadorPadre y asignarlo a la variable padre, obtenemos una instancia del generador padre.
// Utilizamos el método next() para iterar sobre los valores generados. El generadorPadre generará los valores del generadorHijo y luego continuará generando valores propios.

// Conclusiones

// Los generadores en JavaScript ofrecen una forma poderosa de crear funciones iterables y pausables.
// Utilizando la sintaxis function* y la palabra clave yield, podemos controlar el flujo de ejecución de manera más flexible.
// Los generadores son útiles para generar secuencias de valores, iterar sobre estructuras de datos complejas y crear iteradores personalizados.

// Espero que este tutorial te haya sido útil para comprender los generadores en JavaScript.
// Si tienes alguna otra pregunta, ¡no dudes en preguntar!


// Tutorial: Tipos de bucles for en JavaScript

// JavaScript ofrece diferentes tipos de bucles for para iterar sobre elementos o ejecutar un bloque de código varias veces.

// 1. Bucle for
// El bucle for es el más común y se utiliza para iterar una cantidad específica de veces.

// Ejemplo:
for (let i = 0; i < 5; i++) {
  console.log(i); // Imprime los números del 0 al 4
}

// En este ejemplo, el bucle for se ejecuta 5 veces (desde i = 0 hasta i < 5).
// En cada iteración, se imprime el valor de i.

// 2. Bucle for...in
// El bucle for...in se utiliza para iterar sobre las propiedades de un objeto.

// Ejemplo:
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
};

for (let propiedad in persona) {
  console.log(propiedad); // Imprime 'nombre', 'edad', 'ciudad'
  console.log(persona[propiedad]); // Imprime los valores correspondientes
}

// En este ejemplo, el bucle for...in se utiliza para iterar sobre las propiedades del objeto persona.
// En cada iteración, se imprime el nombre de la propiedad y su valor.

// 3. Bucle for...of
// El bucle for...of se utiliza para iterar sobre elementos iterables, como arrays o cadenas de texto.

// Ejemplo:
const frutas = ["manzana", "banana", "naranja"];

for (let fruta of frutas) {
  console.log(fruta); // Imprime cada fruta del array
}

// En este ejemplo, el bucle for...of se utiliza para iterar sobre cada elemento del array frutas.
// En cada iteración, se imprime el valor del elemento.

// 4. Bucle for await...of (ES8)
// El bucle for await...of se utiliza para iterar sobre elementos asíncronos que devuelven promesas.

// Ejemplo:
async function obtenerDatos() {
  const promesa1 = Promise.resolve("Dato 1");
  const promesa2 = Promise.resolve("Dato 2");
  const promesa3 = Promise.resolve("Dato 3");

  const promesas = [promesa1, promesa2, promesa3];

  for await (let dato of promesas) {
    console.log(dato); // Imprime 'Dato 1', 'Dato 2', 'Dato 3'
  }
}

obtenerDatos();

// En este ejemplo, el bucle for await...of se utiliza para iterar sobre un array de promesas.
// En cada iteración, se espera a que la promesa se resuelva y se imprime el valor resuelto.

// Conclusiones

// Los bucles for son una herramienta poderosa para iterar y ejecutar código repetidamente en JavaScript.
// Los bucles for, for...in, for...of y for await...of tienen diferentes usos y se adaptan a diferentes situaciones.
// Es importante entender las diferencias entre cada tipo de bucle y elegir el más adecuado según el contexto.

// Espero que este tutorial te haya sido útil para comprender los diferentes tipos de bucles for en JavaScript.
// Si tienes alguna otra pregunta, ¡no dudes en preguntar!
