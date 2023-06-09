// Ámbito Global
var globalVariable = "Soy una variable global";

function exampleFunction() {
    // Ámbito de Función
    var functionVariable = "Soy una variable local de función";

    console.log(globalVariable); // Accediendo a una variable global desde la función
    console.log(functionVariable); // Accediendo a una variable local de función desde la función
}

exampleFunction();

console.log(globalVariable); // Accediendo a una variable global desde el ámbito global
// console.log(functionVariable); // Generaría un error, ya que la variable functionVariable está en un ámbito diferente

{
    // Ámbito de Bloque (introducido en ES6)
    let blockVariable = "Soy una variable de bloque";
    const blockConstant = "Soy una constante de bloque";

    console.log(blockVariable); // Accediendo a una variable de bloque desde el bloque
    console.log(blockConstant); // Accediendo a una constante de bloque desde el bloque
}

// console.log(blockVariable); // Generaría un error, ya que la variable blockVariable está en un ámbito de bloque
// console.log(blockConstant); // Generaría un error, ya que la constante blockConstant está en un ámbito de bloque

