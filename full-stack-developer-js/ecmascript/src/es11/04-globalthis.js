// Mostrar información sobre diferentes objetos globales en JavaScript

// El objeto 'window' es un objeto global en navegadores web, que representa la ventana del navegador.
// Contiene propiedades y métodos relacionados con la ventana y el entorno del navegador.
console.log("Objeto 'window':");
console.log(window);

// El objeto 'global' es un objeto global en Node.js, que proporciona un contexto global para los módulos.
// Contiene propiedades y métodos relacionados con el entorno de ejecución de Node.js.
console.log("Objeto 'global' en Node.js:");
console.log(global);

// El objeto 'self' es un objeto global disponible tanto en navegadores web como en entornos de trabajadores web.
// En navegadores, es similar a 'window', pero en trabajadores web es el objeto global del trabajador.
console.log("Objeto 'self' en navegadores y trabajadores web:");
console.log(self);

// El objeto 'globalThis' es un objeto global introducido en ECMAScript 2020.
// Proporciona un acceso estándar a la variable global en diferentes entornos (navegadores, Node.js, etc.).
console.log("Objeto 'globalThis' (estándar global) en todos los entornos:");
console.log(globalThis);

// Accediendo a la URL actual del navegador utilizando el objeto 'window'
const currentURL = window.location.href;
console.log("URL actual:", currentURL);

// Accediendo a la variable de entorno utilizando el objeto 'global'
const environment = global.process.env.NODE_ENV || "development";
console.log("Entorno de ejecución:", environment);


// En un contexto de trabajador web, utilizando el objeto 'self' para comunicarse con el hilo principal
self.addEventListener("message", (event) => {
    const message = event.data;
    console.log("Mensaje recibido en el trabajador:", message);
  });
  
// Utilizando 'globalThis' para acceder a la variable global en diferentes entornos
const globalVar = globalThis.navigator ? globalThis.navigator.userAgent : "Entorno desconocido";
console.log("Información del agente de usuario:", globalVar);
