// Definición de un array de elementos
const array = ["one", "two", "three", "four", "five", "six"];

// Acceso al último elemento utilizando la propiedad "length"
const lastElementByLength = array[array.length - 1];
console.log("Último elemento por propiedad 'length':", lastElementByLength);

// Acceso al último elemento utilizando el método "at()" con índice negativo
const lastElementByAtMethod = array.at(-1);
console.log("Último elemento por método 'at()':", lastElementByAtMethod);


// Ejemplo 1: Gestión de mensajes en una conversación
const conversation = [
    "Hola, ¿cómo estás?",
    "¡Hola! Bien, ¿y tú?",
    "Todo bien por aquí también.",
    "Genial, ¡hablamos luego!"
  ];
  
  // Acceso al último mensaje utilizando la propiedad "length"
  const lastMessage1 = conversation[conversation.length - 1];
  console.log("Último mensaje de la conversación:", lastMessage1);
  
  // Acceso al último mensaje utilizando el método "at()"
  const lastMessage2 = conversation.at(-1);
  console.log("Último mensaje de la conversación:", lastMessage2);
  
  // Ejemplo 2: Lista de tareas pendientes
  const tasks = [
    "Comprar víveres",
    "Enviar el informe",
    "Llamar al cliente",
    "Preparar presentación"
  ];
  
  // Acceso a la última tarea utilizando la propiedad "length"
  const lastTask1 = tasks[tasks.length - 1];
  console.log("Última tarea pendiente:", lastTask1);
  
  // Acceso a la última tarea utilizando el método "at()"
  const lastTask2 = tasks.at(-1);
  console.log("Última tarea pendiente:", lastTask2);
  