// Definición de una expresión regular que busca palabras "Apple" en texto completo
const regex = /\b(Apple)+\b/g;

// Texto en el que se buscarán las coincidencias
const fruitText = "This is my shopping list with apples (Apple) within it.";

// Uso del método matchAll() para encontrar todas las coincidencias de la expresión regular en el texto
// El resultado es un objeto iterable que contiene información sobre las coincidencias
for (const item of fruitText.matchAll(regex)) {
  console.log("Resultado de matchAll():");
  console.log("Coincidencia completa:", item[0]); // La coincidencia completa
  console.log("Grupo capturado:", item[1]); // El grupo capturado (si existiera)
  console.log("Posición de inicio:", item.index); // La posición donde se encontró la coincidencia
  console.log(item);
}


// Texto ficticio que contiene direcciones de correo electrónico
const emailText = `
  Contact us at support@example.com for any assistance.
  You can also reach out to sales@example.com for inquiries.
`;

// Expresión regular para buscar direcciones de correo electrónico
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

// Uso del método matchAll() para encontrar todas las direcciones de correo electrónico en el texto
for (const match of emailText.matchAll(emailRegex)) {
  console.log("Dirección de correo electrónico encontrada:", match[0]);
}
