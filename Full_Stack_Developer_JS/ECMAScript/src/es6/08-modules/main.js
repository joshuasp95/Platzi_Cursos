import hello from "./module.js";

hello();

// Importación de un módulo

// Una vez que hemos creado un módulo, podemos importarlo en otro módulo para utilizar sus funcionalidades.

// main.js
// Importamos la función y la constante del módulo mymodule.js
import { saludar, PI } from "./mymodule.js";

// Utilizamos la función y la constante importadas
saludar("Juan");
console.log(`El valor de PI es: ${PI}`);

// En el ejemplo anterior, creamos un archivo main.js donde importamos la función saludar y la constante PI desde el módulo mymodule.js.
// Utilizamos la sintaxis import { funcionalidad } from 'ruta-del-modulo' para importar elementos específicos del módulo.

// En el ejemplo anterior, creamos un módulo math.js que exporta una función sumar(a, b) como exportación predeterminada.
// Utilizamos la palabra clave export default seguida de la funcionalidad que deseamos exportar por defecto desde el módulo.

// main.js
// Importamos la exportación predeterminada del módulo math.js
import sumar from "./math.js";

// Utilizamos la función importada
const resultado = sumar(2, 3);
console.log(`El resultado de la suma es: ${resultado}`);

// En el ejemplo anterior, importamos la exportación predeterminada del módulo math.js utilizando la sintaxis import nombre from 'ruta-del-modulo'.
// La funcionalidad exportada predeterminada se asigna a la variable sumar, y podemos utilizarla en nuestro módulo main.js.

// Uso de módulos en navegadores

// Es importante destacar que el uso de módulos en JavaScript estándar en navegadores requiere el uso del atributo type="module" en la etiqueta <script> que carga el archivo JavaScript.

// index.html
// <!DOCTYPE html>
// <html>
//   <body>
//     <script type="module" src="main.js"></script>
//   </body>
// </html>

// Al especificar type="module", indicamos al navegador que el archivo JavaScript es un módulo y debe interpretarse como tal.

// Conclusiones

// Los módulos en JavaScript permiten organizar y reutilizar el código de manera modular y separada en diferentes archivos.
// A través de la exportación e importación de funcionalidades, podemos utilizar módulos en nuestro código y mejorar su mantenibilidad y reutilización.

// Recuerda que, además de la sintaxis utilizada en este tutorial, existen otras formas de exportar e importar funcionalidades, como la importación de todo un módulo con import * as nombre from 'ruta-del-modulo'.
// Puedes explorar más sobre este tema en la documentación oficial de JavaScript.

// ¡Espero que este tutorial te haya sido útil! Si tienes alguna otra pregunta, ¡no dudes en preguntar!
