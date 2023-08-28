// Definición de la clase "Person"
class Person {
  // Constructor para inicializar propiedades
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._privateProperty = "This is a private property";
  }

  // Método para obtener información de la persona
  getInfo() {
    return `Nombre: ${this.name}, Edad: ${this.age}`;
  }

  #privateMethod() {
    console.log(this._privateProperty);
  }

  // Método estático para crear una persona
  static createPerson(name, age) {
    return new Person(name, age);
  }
}

// Crear una instancia de la clase "Person"
const person1 = new Person("Alice", 28);
console.log(person1.getInfo()); // Resultado: "Nombre: Alice, Edad: 28"
// console.log(person1.privateMethod()); //error

// Usar el método estático para crear otra instancia
const person2 = Person.createPerson("Bob", 32);
console.log(person2.getInfo()); // Resultado: "Nombre: Bob, Edad: 32"
// console.log(person2.privateMethod()); //error
