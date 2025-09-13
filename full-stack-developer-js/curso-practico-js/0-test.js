//SIMPLIFICAR A 1 IF 
//const tipoDeSuscripcion = "Basic";

// switch (tipoDeSuscripcion) {
//     case "Free":
//         console.log("Solo puedes tomar los cursos gratis");
//         break;
//     case "Basic":
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//         break;
//     case "Expert":
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//         break;
//     case "ExpertPlus":
//         console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//         break;
// }

var suscripcionUser = prompt("Introduce tu suscripcion a Platzi: ");

var tipoDeSuscripcion = [
    "Free",
    "Basic",
    "Expert",
    "ExpertPlus"
];

var infoSuscripcion = ["Solo puedes tomar los cursos gratis",
    "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Puedes tomar casi todos los cursos de Platzi durante un año",
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
];

for (let index = 0; index < tipoDeSuscripcion.length; index++) {
    if (suscripcionUser === tipoDeSuscripcion[index]) {
        var element = document.getElementById("div").innerHTML = infoSuscripcion[index];
    }

}