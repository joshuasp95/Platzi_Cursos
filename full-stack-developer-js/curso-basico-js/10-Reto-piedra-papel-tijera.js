var opcionUser = "";
var opcionPC = "";

var puntuacionUser = 0;
var puntuacionPC = 0;

// Version simple (sin funciones ni switch)
function run_simple_version(opcionUser, opcionPC) {
    if (opcionUser == "piedra") {
        if (opcionPC == "piedra") {
            return "Empate";
        } else if (opcionPC == "papel") {
            puntuacionPC++;
            return "Gana PC";
        } else if (opcionPC == "tijera") {
            puntuacionUser++;
            return "Ganas tu!";
        } else {
            return "Opcion no valida";
        }

    } else if (opcionUser == "papel") {
        if (opcionPC == "piedra") {
            puntuacionUser++;
            return "Ganas tu!";

        } else if (opcionPC == "papel") {
            return "Empate";

        } else if (opcionPC == "tijera") {
            puntuacionPC++;
            return "Gana PC";
        } else {
            return "Opcion no valida";
        }

    } else if (opcionUser == "tijera") {
        if (opcionPC == "piedra") {
            puntuacionPC++;
            return "Gana PC";
        } else if (opcionPC == "papel") {
            puntuacionUser++;
            return "Ganas tu!";
        } else if (opcionPC == "tijera") {
            return "Empate";
        } else {
            return "Opcion no valida";
        }

    } else {
        return "Opcion no valida";
    }
}

//Version con switch 
function run_switch_version(opcionUser, opcionPC) {
    switch (opcionUser) {
        case "piedra":
            switch (opcionPC) {
                case "piedra":
                    return "Empate";
                case "papel":
                    puntuacionPC++;
                    return "Gana PC";
                case "tijera":
                    puntuacionUser++;
                    return "Ganas tu!";
                default:
                    return "Opcion no valida";
            }

        case "papel":
            switch (opcionPC) {
                case "piedra":
                    puntuacionUser++;
                    return "Ganas tu!";
                case "papel":
                    return "Empate";
                case "tijera":
                    puntuacionPC++;
                    return "Gana PC";

                default:
                    return "Opcion no valida";
            }
        case "tijera":
            switch (opcionPC) {
                case "piedra":
                    puntuacionPC++;
                    return "Gana PC";
                case "papel":
                    puntuacionUser++;
                    return "Ganas tu!";
                case "tijera":
                    return "Empate";
                default:
                    return "Opcion no valida";
            }

        default:
            return "Opcion no valida";
    }
}



var result = run_simple_version("papel", "piedra");
console.log(result, "Puntuacion PC: " + puntuacionPC, "Puntuacion User: " + puntuacionUser);

var result = run_switch_version("piedra", "piedra");
console.log(result, "Puntuacion PC: " + puntuacionPC, "Puntuacion User: " + puntuacionUser);

var opcionUser = "";
var opcionPC = "";

var puntuacionUser = 0;
var puntuacionPC = 0;

var comparacion = {
    piedra: { piedra: "Empate", papel: "Gana PC", tijera: "Ganas tú!" },
    papel: { piedra: "Ganas tú!", papel: "Empate", tijera: "Gana PC" },
    tijera: { piedra: "Gana PC", papel: "Ganas tú!", tijera: "Empate" }
};

function run_efficient_version(opcionUser, opcionPC) {
    if (opcionUser in comparacion && opcionPC in comparacion[opcionUser]) {
        var resultado = comparacion[opcionUser][opcionPC];
        if (resultado === "Ganas tú!") {
            puntuacionUser++;
        } else if (resultado === "Gana PC") {
            puntuacionPC++;
        }
        return resultado;
    } else {
        return "Opción no válida";
    }
}

var result = run_efficient_version("papel", "piedra");
console.log(result, "Puntuación PC: " + puntuacionPC, "Puntuación User: " + puntuacionUser);

result = run_efficient_version("piedra", "piedra");
console.log(result, "Puntuación PC: " + puntuacionPC, "Puntuación User: " + puntuacionUser);
