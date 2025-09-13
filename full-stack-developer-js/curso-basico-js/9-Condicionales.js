// En JavaScript, los condicionales permiten ejecutar diferentes bloques de código basados en el resultado de una expresión booleana.

// Ejemplo de condicional if:
var edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// Ejemplo de condicional else if:
var hora = 14;

if (hora < 12) {
    console.log("Buenos días");
} else if (hora < 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

// Ejemplo de condicional switch:
var dia = "lunes";
var mensaje;

switch (dia) {
    case "lunes":
        mensaje = "Hoy es lunes";
        break;
    case "martes":
        mensaje = "Hoy es martes";
        break;
    case "miércoles":
        mensaje = "Hoy es miércoles";
        break;
    default:
        mensaje = "Hoy no es lunes, martes ni miércoles";
}

console.log(mensaje);

// Operador ternario:
var esMayor = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(esMayor);

