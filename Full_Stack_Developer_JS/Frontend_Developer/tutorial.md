# Cómo crear animaciones con Keyframes en CSS

¡Hola Platzinautas! 🚀

Hoy quiero mostrarte cómo puedes crear animaciones en CSS usando keyframes. Esto puede ayudarte a dar vida a tus sitios web y mejorar la experiencia del usuario. Vamos a ver cómo funciona paso a paso.

## 🚀Primera parte.

### 🥉Aprendiz

**¿Qué son las Keyframes en CSS?**

Las keyframes son una característica de CSS3 que nos permiten crear animaciones complejas y personalizadas definiendo varios estados de una animación y cómo se debe animar entre ellos.

**Estructura básica de una animación con keyframes**

La estructura básica de una animación con keyframes se ve así:

```css
@keyframes nombreDeLaAnimacion {
  0% {
    /* Propiedades al inicio de la animación */
  }

  50% {
    /* Propiedades a la mitad de la animación */
  }

  100% {
    /* Propiedades al final de la animación */
  }
}
```

## 🚀Segunda parte.

### 🥈Profesional

**Cómo crear una animación con Keyframes**

Vamos a crear una animación básica que cambia el color de fondo de un div.

1. Primero, define la animación con keyframes.

```css
@keyframes cambioColor {
  0% {
    background-color: red;
  }

  50% {
    background-color: green;
  }

  100% {
    background-color: blue;
  }
}
```

2. Luego, aplica esta animación a un elemento. Vamos a aplicarla a un div con la clase "miDiv".

```css
.miDiv {
  animation: cambioColor 3s infinite;
}
```

Esto hará que el div cambie su color de fondo de rojo a verde a azul en un ciclo de 3 segundos, y luego repita la animación indefinidamente.

## 🚀Tercera parte.

### 🎖️ Medalla al Mérito

**Animación avanzada con Keyframes**

Ahora que sabes cómo crear una animación básica, puedes experimentar y crear animaciones más complejas. Por ejemplo, puedes combinar varias propiedades a la vez:

```css
@keyframes animacionAvanzada {
  0% {
    background-color: red;
    transform: rotate(0deg);
  }

  50% {
    background-color: green;
    transform: rotate(180deg);
  }

  100% {
    background-color: blue;
    transform: rotate(360deg);
  }
}
```

Y luego aplicarlo a un div:

```css
.miDiv {
  animation: animacionAvanzada 3s infinite;
}
```

¡Felicidades Platzinauta!👩‍🚀👨‍🚀 Aprendiste cómo usar keyframes en CSS para crear animaciones y has ascendido a 🥇Oficial.

¡No olvides practicar y experimentar con diferentes animaciones!

No olvides compartir tus ejemplos y experimentos en los comentarios y dejarme un 💚 si te gustó este tutorial.

¡Hasta la próxima aventura! 🚀

## Referencias y Recursos adicionales

- [Animaciones y Transiciones CSS - MDN](https://developer.mozilla.org/es/docs/Web/CSS/animation)
- [Una guía para crear animaciones con CSS - CSS-Tricks](https://css-tricks.com/almanac/properties/a/animation/)
- [Curso de Animaciones Web - Platzi](https://platzi.com/cursos/animaciones-web/)
