var lastName = "Ross";
lastName = "Matt";
console.log(lastName);

let fruit = "apple";
fruit = "orange";
console.log(fruit);

const animal = "dog";
// animal = "cat"; Error -> Assignment to constant variable.
console.log(animal);

const fruits = () => {
  if (true) {
    var fruit1 = "apple";
    let fruit2 = "orange";
    const fruit3 = "mango";
  }

  console.log(fruit1);
  //console.log(fruit2); Error -> fruit2 is not defined
  //console.log(fruit3);
};

fruits();

// JavaScript permite declarar variables usando 'var', 'let' y 'const'.

// 1. var
// 'var' es la forma más antigua de declarar variables en JavaScript. Se introdujo en ECMAScript 1.

var variableVar = 'Esta es una variable var';

// Una característica única de 'var' es que tiene un alcance de función. Esto significa que una variable 'var'
// es accesible dentro de la función donde fue declarada, así como dentro de cualquier función anidada.

function varScope() {
    var dentroDeFuncion = 'Soy accesible dentro de esta función';

    if (true) {
        var dentroDeBloque = 'También soy accesible dentro de esta función, aunque fui declarada en un bloque';
        console.log(dentroDeFuncion); // "Soy accesible dentro de esta función"
    }

    console.log(dentroDeBloque); // "También soy accesible dentro de esta función, aunque fui declarada en un bloque"
}

varScope();

// Si intentamos acceder a 'dentroDeFuncion' o 'dentroDeBloque' fuera de la función 'varScope', obtendremos un error,
// ya que estas variables sólo existen dentro de la función 'varScope'.

// Otra característica de 'var' es que está sujeta a "hoisting". Esto significa que las declaraciones de variables 'var'
// se "mueven" al inicio de su contexto (función o script global), aunque su inicialización (si la hay) se mantiene en su lugar.

console.log(hoistedVar); // undefined (no ReferenceError)
var hoistedVar = 'He sido elevada (hoisted)';


// 2. let
// 'let' es una forma más moderna de declarar variables en JavaScript. Se introdujo en ECMAScript 6 (2015).

let variableLet = 'Esta es una variable let';

// A diferencia de 'var', 'let' tiene un alcance de bloque. Esto significa que una variable 'let' sólo es accesible
// dentro del bloque donde fue declarada, así como dentro de cualquier bloque anidado.

if (true) {
    let dentroDeBloque = 'Sólo soy accesible dentro de este bloque';
    console.log(dentroDeBloque); // "Sólo soy accesible dentro de este bloque"
}

// Al intentar acceder a 'dentroDeBloque' fuera de su bloque, obtendremos un error, ya que esta variable sólo existe dentro de ese bloque.

// Además, las variables 'let' no están sujetas a "hoisting". Aunque técnicamente se elevan, no se pueden acceder antes de su declaración.

// 3. const
// 'const' es otra forma moderna de declarar variables en JavaScript. También se introdujo en ECMAScript 6.

const variableConst = 'Esta es una variable const';

// 'const' funciona de manera muy similar a 'let' en cuanto a su alcance y "hoisting". La principal diferencia es que
// una variable 'const' debe ser inicializada en el momento de su declaración y su valor no puede ser cambiado después.

// Así, el siguiente código dará un error:

// const sinInicial```javascript
// El código anterior arrojará un error porque estamos tratando de declarar una constante sin inicializarla.
// Y este también:

// variableConst = 'Intentando cambiar el valor'; 
// El código anterior también arrojará un error, porque estamos tratando de cambiar el valor de una constante.

// Aunque 'const' suena como si fuera para constantes inmutables, hay una peculiaridad cuando se usa con objetos:

const objeto = { propiedad: 'Original' };
console.log(objeto.propiedad); // "Original"

// Podemos cambiar las propiedades de un objeto constante, pero no podemos reasignar el objeto en sí.
objeto.propiedad = 'Cambiado';
console.log(objeto.propiedad); // "Cambiado"

// Esto arrojará un error:
// objeto = { otraPropiedad: 'Algo diferente' };
