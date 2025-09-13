const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2); // [1, 2, 3, 4, 5, 6]

const obj1 = { foo: "bar", x: 42 };
const obj2 = { ...obj1, y: 13 };
console.log(obj2); // { foo: 'bar', x: 42, y: 13 }

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers); // Equivalente a sum(1, 2, 3)
console.log(result); // 6

const user = { username: "joshua", password: "admin124",
 email: "josh@xyz.es", age: 21 };

const { username, ...values } = user;

console.log(username);

console.log(values);


const originalArray = [1, 2, 3];
const cloneArray = [...originalArray];
console.log(cloneArray); // [1, 2, 3]

const originalObject = { x: 42, y: 13 };
const cloneObject = { ...originalObject };
console.log(cloneObject); // { x: 42, y: 13 }
