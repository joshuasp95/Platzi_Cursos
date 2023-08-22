//Clases

class User {
  greeting = () => {
    return "HelloWorld!";
  };
}

const admin = new User();
console.log(admin.greeting(), " --> admin");

const me = new User();
console.log(me.greeting(), " --> me");

//Constructor

class user {
  constructor() {
    console.log("New User!");
  }
  greeting = () => {
    return "HelloWorld!";
  };
}

const customer = new user();
console.log(customer.greeting(), " --> customer");

// this

class anotherUser {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return "Hello my name is...";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const developer = new anotherUser("Developer");
const greetings = developer.greeting();
console.log(greetings);

// setters and getters

class lastUser {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get uname() {
    return this.name;
  }
  set uname(name) {
    this.name = name;
  }
  get uage() {
    return this.age;
  }
  set uage(age) {
    this.age = age;
  }

  speak() {
    return "Hello my name is...";
  }

  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const iam = new lastUser("joshua", 27);

console.log(iam.uname);
console.log(iam.uage);
console.log((iam.uage = 30));
console.log((iam.age = 200));

// Ejemplo: Uso de clases en JavaScript

// Definición de una clase básica
class Persona {
  // Constructor de la clase
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método de la clase
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Creación de instancias de la clase Persona
const persona1 = new Persona("Juan", 30);
const persona2 = new Persona("María", 25);

// Acceso a propiedades y métodos de las instancias
console.log(persona1.nombre); // Imprime 'Juan'
console.log(persona2.edad); // Imprime 25
persona1.saludar(); // Imprime 'Hola, mi nombre es Juan y tengo 30 años.'
persona2.saludar(); // Imprime 'Hola, mi nombre es María y tengo 25 años.'
