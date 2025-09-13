var result = 2 + true;

console.log(result);

var str = "soy un string";

console.log(typeof (str));
if (typeof (str) == "string") {
    console.log("Expected string");
}

var array = [true, "b", "c", "d", "e"];

function validarString(array) {
    return typeof array[0] == "string";
}

console.log(validarString(array));


switch (false) {
    case false:
        console.log("Soy false");
    case true:
        console.log("Soy true");
}

