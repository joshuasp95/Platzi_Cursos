// Objeto padre
function Animal(nombre) {
    this.nombre = nombre;
}

// Agregar un método al prototipo del objeto padre
Animal.prototype.saludar = function () {
    console.log("Hola, soy " + this.nombre);
};

// Objeto hijo que hereda del objeto padre
function Perro(nombre, raza) {
    Animal.call(this, nombre); // Llamada al constructor del objeto padre
    this.raza = raza;
}

// Establecer la herencia utilizando el prototipo
Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

// Agregar un método al prototipo del objeto hijo
Perro.prototype.ladrar = function () {
    console.log("¡Guau guau!");
};

// Crear instancias de objetos
var animal = new Animal("Animalito");
var perro = new Perro("Max", "Labrador");

// Acceder a propiedades y métodos heredados
console.log(animal.nombre); // Salida: "Animalito"
animal.saludar(); // Salida: "Hola, soy Animalito"

console.log(perro.nombre); // Salida: "Max"
console.log(perro.raza); // Salida: "Labrador"
perro.saludar(); // Salida: "Hola, soy Max"
perro.ladrar(); // Salida: "¡Guau guau!"
