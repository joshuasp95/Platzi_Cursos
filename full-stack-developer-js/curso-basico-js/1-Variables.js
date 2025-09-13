// Variables numéricas
let numeroEntero = 10;
let numeroDecimal = 3.14;

// Variables de texto (cadenas de caracteres)
let texto = "Hola, mundo!";
let otraCadena = 'Esta es otra cadena';

// Variables booleanas
let esVerdadero = true;
let esFalso = false;

// Variables de tipo objeto
let objeto = { nombre: "John", edad: 25 };
let arreglo = [1, 2, 3, 4, 5];

// Salida por consola
console.log("Número entero:", numeroEntero);
console.log("Número decimal:", numeroDecimal);
console.log("Texto:", texto);
console.log("Otra cadena:", otraCadena);
console.log("¿Es verdadero?", esVerdadero);
console.log("¿Es falso?", esFalso);
console.log("Objeto:", objeto);
console.log("Arreglo:", arreglo);


// Declaración de variables con diferentes formas
var variableGlobal = "Soy una variable global";
let variableLocal = "Soy una variable local";
const constante = "Soy una constante";

// Acceso a valores de un array
let arreglo2 = [1, 2, 3, 4, 5];
console.log("Elemento en la posición 4 del arreglo:", arreglo2[4]); // Accediendo al segundo elemento (índice 1) del arreglo

// Acceso a valores de un objeto
let objeto2 = { nombre: "John", edad: 25 };
console.log("Nombre:", objeto2.nombre); // Accediendo al valor de la propiedad "nombre" del objeto

// Diferencia entre objeto de JavaScript y objeto JSON
// Un objeto de JavaScript es una estructura de datos que puede contener propiedades y métodos.
// Un objeto JSON (JavaScript Object Notation) es una representación textual de un objeto que sigue una sintaxis específica.
// En JavaScript, un objeto puede tener funciones como propiedades, mientras que en JSON solo se permiten valores de datos primitivos.
// Sin embargo, es común utilizar la notación de objetos JSON para intercambiar datos entre aplicaciones.

// Salida por consola
console.log("Variable global:", variableGlobal);
console.log("Variable local:", variableLocal);
console.log("Constante:", constante);
