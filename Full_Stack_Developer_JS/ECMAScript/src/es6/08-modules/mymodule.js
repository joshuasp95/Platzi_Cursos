// Tutorial: Módulos en JavaScript

// En JavaScript, los módulos son una forma de organizar y reutilizar el código separándolo en diferentes archivos.
// Cada archivo se considera un módulo y puede exportar e importar funcionalidades para su uso en otros módulos.
// Esto mejora la modularidad y facilita el mantenimiento del código.

// Creación de un módulo

// Para crear un módulo, simplemente creamos un archivo JavaScript con una funcionalidad específica y la exportamos para su uso en otros módulos.

// mymodule.js
// Exportamos una función desde el módulo
export function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
}

// Exportamos una constante desde el módulo
export const PI = 3.1416;

// En el ejemplo anterior, creamos un módulo llamado mymodule.js.
// En este módulo, exportamos una función saludar(nombre) y una constante PI.
// Utilizamos la palabra clave export antes de cada elemento que deseamos exportar desde el módulo.
