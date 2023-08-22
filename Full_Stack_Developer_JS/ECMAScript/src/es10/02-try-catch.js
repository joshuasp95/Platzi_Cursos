function hello() {
  console.log("Hello world!");
}

try {
  hello();
} catch (error) {
  console.error("Error --> ", error);
}

try {
  anotherFn();
} catch (error) {
  console.log("Error --> anotherFn() = undefined\n", error);
}
