# Tutorial para Platzi

## Título del tutorial:

Cómo Crear un Reloj Digital Dinámico con JavaScript

### Breve Introducción:

En este tutorial, aprenderemos cómo crear un reloj digital en una página web utilizando solo HTML, CSS y JavaScript. Este proyecto es perfecto si estás comenzando a aprender JavaScript y quieres crear algo práctico y visualmente atractivo. ¡Vamos a darle vida al tiempo!

#### Requisitos:

- Conocimientos básicos de HTML y CSS.
- Un editor de texto (como Visual Studio Code, Sublime Text, etc.).
- Un navegador web.

## Paso a Paso:

### Paso 1: Configurar el Archivo HTML

**Descripción:** Comienza creando un nuevo archivo HTML y configúralo con la estructura básica. Agrega un contenedor para mostrar el reloj.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reloj Digital</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div id="clock" class="clock"></div>

    <script src="script.js"></script>
  </body>
</html>
```

### Paso 2: Estilizar con CSS

**Descripción:** Crea un archivo CSS para darle estilo al reloj. Centra el reloj en la página y elige una fuente y un tamaño que te gusten.

```css
/* styles.css */
body,
html {
  height: 100%;
  margin: 0;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  font-family: "Arial", sans-serif;
}

.clock {
  font-size: 5em;
  color: #ffffff;
}
```

### Paso 3: Añadir Funcionalidad con JavaScript

**Descripción:** Ahora es momento de darle vida al reloj. Crea un archivo JavaScript y escribe una función que actualice el tiempo cada segundo.

```javascript
// script.js
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById("clock").innerText = timeString;
}

setInterval(updateClock, 1000);
```

### Paso 4: Probar tu Reloj Digital

**Descripción:** Abre tu archivo HTML en un navegador web y deberías ver tu reloj digital en acción, actualizándose cada segundo.

¡Felicidades! Has creado un reloj digital dinámico con JavaScript. Puedes jugar con los estilos en CSS y hacerlo más personalizado.

## Al cerrar este módulo

Recomiendo intentar agregar funcionalidades adicionales, como cambiar entre un formato de 12 y 24 horas, o mostrar la fecha actual junto con la hora. Estos retos adicionales te ayudarán a mejorar tus habilidades en JavaScript.

Por favor, comparte el enlace a tu proyecto en los comentarios de esta clase. ¡Estoy emocionado de ver lo que has creado!
