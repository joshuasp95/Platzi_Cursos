// Hoisting en JavaScript es un comportamiento especial en el que las declaraciones de variables y funciones
// se mueven automáticamente al principio de su ámbito antes de que se ejecute el código. Esto permite
// que puedas utilizar variables y funciones antes de haberlas declarado explícitamente en tu código.

// Ejemplo de hoisting con una función:
saludar(); // Salida: "¡Hola, hoisting!"

function saludar() {
    console.log("¡Hola, hoisting!");
}

// Ejemplo de hoisting con una variable:
console.log(nombre); // Salida: undefined

var nombre = "Joshua";

// Explicación:
// En este ejemplo, la declaración de la variable `nombre` se mueve al principio del ámbito (hoisting),
// pero la asignación del valor "Joshua" se mantiene en su posición original. Por lo tanto, cuando se
// intenta acceder a la variable antes de la asignación, su valor es `undefined`.

// Otro ejemplo de hoisting con una función:
miFuncion(); // Salida: "Hola, soy una función declarada!"

function miFuncion() {
    console.log("Hola, soy una función declarada!");
}

// Explicación:
// La declaración de la función `miFuncion()` se mueve al principio del ámbito debido al hoisting. Por lo
// tanto, es posible llamar a la función antes de su declaración explícita en el código.

// Ejemplo de hoisting con una función expresiva:
//miFuncion2(); // Generará un error: TypeError: miFuncion2 is not a function

var miFuncion2 = function () {
    console.log("Hola, soy una función expresiva!");
}

// Explicación:
// En este caso, la declaración de la variable `miFuncion2` se mueve al principio del ámbito (hoisting),
// pero la asignación de la función expresiva se mantiene en su posición original. Por lo tanto, cuando
// se intenta llamar a `miFuncion2()` antes de que la asignación tenga lugar, se produce un error, ya que
// `miFuncion2` todavía no es una función.

// Otro ejemplo de hoisting con una variable y una función:
console.log(edad); // Salida: undefined

var edad = 30;

function obtenerEdad() {
    return edad;
}

console.log(obtenerEdad()); // Salida: 30

// Explicación:
// En este caso, la declaración de la variable `edad` se mueve al principio del ámbito (hoisting), al igual
// que la declaración de la función `obtenerEdad()`. Cuando se accede a `edad` antes de su asignación, su
// valor es `undefined`. Sin embargo, después de la asignación, la función `obtenerEdad()` puede acceder y
// retornar el valor de `edad` correctamente.

var miNombre = undefined;

console.log(miNombre+" Hoisting!");

miNombre = "Joshua";

console.log(miNombre);