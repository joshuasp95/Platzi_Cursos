// En tu archivo "06-dynamic-import.js"

// Obtén referencias a los elementos del DOM
const button = document.getElementById("btn");
const form = document.getElementById("form");

// Agrega un evento de clic al botón
button.addEventListener("click", async function () {
  // Utiliza el dynamic import para cargar el módulo "module.js"
  const module = await import("./module.js");
  console.log(module);
  module.hello(); // Llama a la función "hello" del módulo
});

// Agrega un evento de envío al formulario
form.addEventListener("submit", async function (event) {
  event.preventDefault();
  
  // Utiliza el dynamic import para cargar el módulo "form-handler.js"
  const formModule = await import("./form-handler.js");
  const formData = new FormData(form);
  formModule.handleFormSubmission(formData);
});
