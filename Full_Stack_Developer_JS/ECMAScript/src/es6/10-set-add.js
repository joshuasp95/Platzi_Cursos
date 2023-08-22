const array = [1, 1, 2, 2, 3, 4, 4, 5]

const sinRepetidos = [ ... new Set(array)]
console.log(sinRepetidos) // [ 1, 2, 3, 4, 5 ]




// Tutorial: Set y add() en JavaScript

// El objeto Set es una estructura de datos en JavaScript que nos permite almacenar valores únicos de cualquier tipo.
// El método add() se utiliza para agregar elementos al conjunto.

// Creación de un Set
const miSet = new Set();

// Agregar elementos al Set utilizando el método add()
miSet.add(1); // Agrega el número 1 al Set
miSet.add('Hola'); // Agrega la cadena de texto 'Hola' al Set
miSet.add(true); // Agrega el valor booleano true al Set

// Comprobar si un elemento existe en el Set utilizando el método has()
console.log(miSet.has(1)); // Imprime true, ya que el número 1 está presente en el Set
console.log(miSet.has('Hola')); // Imprime true, ya que la cadena de texto 'Hola' está presente en el Set
console.log(miSet.has(false)); // Imprime false, ya que el valor booleano false no está presente en el Set

// Obtener la cantidad de elementos en el Set utilizando la propiedad size
console.log(miSet.size); // Imprime 3, ya que hay 3 elementos en el Set

// Eliminar un elemento del Set utilizando el método delete()
miSet.delete('Hola'); // Elimina la cadena de texto 'Hola' del Set

// Iterar sobre los elementos del Set utilizando el método forEach()
miSet.forEach((elemento) => {
  console.log(elemento); // Imprime 1 y true, ya que 'Hola' fue eliminado del Set
});

// En este ejemplo, creamos un nuevo Set llamado miSet utilizando la sintaxis new Set().
// Luego, utilizamos el método add() para agregar elementos al conjunto. En este caso, agregamos un número, una cadena de texto y un valor booleano.
// Utilizamos el método has() para comprobar si un elemento existe en el Set.
// Utilizamos la propiedad size para obtener la cantidad de elementos en el Set.
// Utilizamos el método delete() para eliminar un elemento del Set.
// Finalmente, utilizamos el método forEach() para iterar sobre los elementos del Set.

// El objeto Set es útil cuando necesitamos almacenar valores únicos y no queremos que haya duplicados en nuestra colección de datos.
// El método add() nos permite agregar elementos al Set de manera sencilla y eficiente.

// Espero que este tutorial te haya sido útil para comprender el uso de Set y el método add() en JavaScript.
// Si tienes alguna otra pregunta, ¡no dudes en preguntar!
