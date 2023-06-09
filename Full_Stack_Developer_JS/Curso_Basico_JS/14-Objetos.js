// Creación de un objeto
var persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "programador",
    saludar: function () {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};

// Acceso a propiedades del objeto
console.log(persona.nombre); // Salida: "Juan"
console.log(persona.edad); // Salida: 30

// Modificación de propiedades del objeto
persona.edad = 31;
console.log(persona.edad); // Salida: 31

// Método asociado al objeto
persona.saludar(); // Salida: "Hola, mi nombre es Juan"

// Recorrer propiedades de un objeto
for (var propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}
// Salida:
// nombre: Juan
// edad: 31
// profesion: programador
// saludar: function() { ... }

// Caso de uso: Creación de múltiples objetos con una función constructora
function Persona(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
    this.saludar = function () {
        console.log("Hola, mi nombre es " + this.nombre);
    };
}

var persona1 = new Persona("Ana", 25, "diseñadora");
var persona2 = new Persona("Carlos", 35, "ingeniero");

console.log(persona1.nombre); // Salida: "Ana"
console.log(persona2.profesion); // Salida: "ingeniero"
persona1.saludar(); // Salida: "Hola, mi nombre es Ana"
persona2.saludar(); // Salida: "Hola, mi nombre es Carlos"


var persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "programador"
};

// Acceder a las claves del objeto
var keys = Object.keys(persona);
console.log(keys); // Salida: ["nombre", "edad", "profesion"]

// Recorrer las claves y obtener los valores correspondientes
for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = persona[key];
    console.log(key + ": " + value);
    // console.log(keys[i] + ": " + persona[keys[i]]); // lo mismo pero sin crear variables
}
// Salida:
// nombre: Juan
// edad: 30
// profesion: programador
