//Arrays destructuring

let fruits = ["apple", "orange", "kiwi"];
var [a, b] = fruits;
console.log(a, fruits[2]);
console.log(a, b);

// Ejemplo 1: Destructuración básica de un array
const numbers = [1, 2, 3, 4, 5];
var [a, b, c, d, e] = numbers;

console.log(a); // Imprime 1
console.log(b); // Imprime 2
console.log(c); // Imprime 3
console.log(d); // Imprime 4
console.log(e); // Imprime 5

// Ejemplo 2: Ignorar elementos en la destructuración
const colors = ["rojo", "verde", "azul"];
const [color1, , color3] = colors;

console.log(color1); // Imprime 'rojo'
console.log(color3); // Imprime 'azul'

//Object destructuring

let user = {
  username: "Matt",
  age: 40,
};

let { username, age } = user;
console.log(username, age);

// Ejemplo 1: Rest operator
var numbers2 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers2;

console.log(first); // Imprime 1
console.log(second); // Imprime 2
console.log(rest); // Imprime [3, 4, 5]

//Spread operator

let person = { name: "john", age: 55 };
let country = "US";

let data = { ...person, ...country };
console.log("data -> ", data);

let data2 = { id: 1, ...person, country };
console.log("data -> ", data2);

// Ejemplo 2: Spread operator
var fruits2 = ["manzana", "plátano", "naranja"];
const moreFruits = ["kiwi", "mango"];

const allFruits = [...fruits2, ...moreFruits];

console.log(allFruits); // Imprime ['manzana', 'plátano', 'naranja', 'kiwi', 'mango']

let kissEmoji = [..."👩‍❤️‍💋‍👩"];
console.log(kissEmoji);

let familyEmoji = [..."👨‍👩‍👦‍👦"];
console.log(familyEmoji);

//rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
