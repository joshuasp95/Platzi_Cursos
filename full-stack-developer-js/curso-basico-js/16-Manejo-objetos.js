var personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 28 },
    { nombre: "Carlos", edad: 35 }
];

// Operación: map()
// Descripción: Crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.
var nombres = personas.map(function (persona) {
    return persona.nombre;
});
console.log(nombres); // Salida: ["Ana", "Juan", "María", "Carlos"]

// Operación: filter()
// Descripción: Crea un nuevo array con todos los elementos que pasen una prueba determinada.
var mayoresDe30 = personas.filter(function (persona) {
    return persona.edad > 30;
});
console.log(mayoresDe30);
// Salida: [{ nombre: "Juan", edad: 30 }, { nombre: "Carlos", edad: 35 }]

// Operación: reduce()
// Descripción: Aplica una función a un acumulador y a cada elemento del array, reduciéndolo a un único valor.
var sumaEdades = personas.reduce(function (acumulador, persona) {
    return acumulador + persona.edad;
}, 0);
console.log(sumaEdades); // Salida: 118


var persona = {
    nombre: "Ana",
    edad: 25,
    profesion: "programador"
};

// Método: Object.keys()
// Descripción: Devuelve un array con las claves/propiedades enumerables del objeto.
var keys = Object.keys(persona);
console.log(keys); // Salida: ["nombre", "edad", "profesion"]

// Método: Object.values()
// Descripción: Devuelve un array con los valores de las propiedades enumerables del objeto.
var values = Object.values(persona);
console.log(values); // Salida: ["Ana", 25, "programador"]

// Método: Object.entries()
// Descripción: Devuelve un array de arrays con pares clave-valor de las propiedades enumerables del objeto.
var entries = Object.entries(persona);
console.log(entries); // Salida: [["nombre", "Ana"], ["edad", 25], ["profesion", "programador"]]

// Método: Object.assign()
// Descripción: Copia las propiedades de uno o más objetos a otro objeto destino.
var persona2 = {
    edad: 30,
    ciudad: "Madrid"
};
var personaMerged = Object.assign({}, persona, persona2);
console.log(personaMerged);
// Salida: { nombre: "Ana", edad: 30, profesion: "programador", ciudad: "Madrid" }

// Método: hasOwnProperty()
// Descripción: Comprueba si el objeto tiene una propiedad propia con la clave especificada.
var tieneNombre = persona.hasOwnProperty("nombre");
console.log(tieneNombre); // Salida: true

// Método: delete
// Descripción: Elimina una propiedad de un objeto.
delete persona.edad;
console.log(persona); // Salida: { nombre: "Ana", profesion: "programador" }


var personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 28 },
    { nombre: "Carlos", edad: 35 }
];

// Método: find()
// Descripción: Devuelve el primer elemento que cumple una condición especificada en una función de prueba.
var personaEncontrada = personas.find(function (persona) {
    return persona.edad > 30;
});
console.log(personaEncontrada); // Salida: { nombre: "Juan", edad: 30 }

// Método: forEach()
// Descripción: Ejecuta una función en cada elemento del array.
personas.forEach(function (persona) {
    console.log(persona.nombre);
});
// Salida:
// Ana
// Juan
// María
// Carlos

// Método: some()
// Descripción: Comprueba si al menos un elemento cumple una condición especificada en una función de prueba.
var hayMayoresDe30 = personas.some(function (persona) {
    return persona.edad > 30;
});
console.log(hayMayoresDe30); // Salida: true


//Clonacion de objetos
var persona = { nombre: "Ana", edad: 25 };
var copiaPersona = { ...persona };
console.log(copiaPersona); // Salida: { nombre: "Ana", edad: 25 }
