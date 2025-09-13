# Guía Básica de Construcción de Imágenes Docker para Principiantes

## Introducción

Docker permite crear imágenes personalizadas mediante un archivo de texto llamado `Dockerfile`. Este archivo contiene todas las instrucciones necesarias para construir la imagen, incluyendo la base de la imagen, comandos para ejecutar, archivos para copiar, y más.

## `Dockerfile` Explicado

### `FROM`

Esta instrucción define la imagen base sobre la cual se construirá tu propia imagen. Por ejemplo, `FROM node:12` indica que la imagen se basará en la imagen oficial de Node.js versión 12.

### `COPY`

`COPY` se usa para copiar archivos y directorios desde el sistema de archivos del host a la imagen. Por ejemplo, `COPY ["package.json", "package-lock.json", "/usr/src/"]` copia los archivos `package.json` y `package-lock.json` al directorio `/usr/src/` dentro de la imagen.

### `WORKDIR`

Establece el directorio de trabajo para cualquier instrucción `RUN`, `CMD`, `ENTRYPOINT`, `COPY` y `ADD` que siga en el `Dockerfile`. Por ejemplo, `WORKDIR /usr/src` establece `/usr/src` como el directorio de trabajo.

### `RUN`

Ejecuta comandos dentro de la imagen. Por ejemplo, `RUN npm install` ejecuta `npm install` para instalar las dependencias definidas en `package.json`.

### `EXPOSE`

Indica los puertos en los que un contenedor escucha conexiones. Esto es solo una declaración para quien ejecute el contenedor; para que el puerto sea realmente accesible, el contenedor debe ser ejecutado con la opción `-p`. Por ejemplo, `EXPOSE 3000` sugiere que el contenedor escuchará en el puerto 3000.

### `CMD`

Proporciona los comandos por defecto para la ejecución de un contenedor. Puede ser sobrescrito al iniciar el contenedor. En el ejemplo, `CMD ["npx", "nodemon", "index.js"]` indica que el contenedor por defecto ejecutará `nodemon` para reiniciar automáticamente la aplicación Node.js cuando los archivos fuente cambien.

## Multi-stage Builds

Los multi-stage builds permiten crear imágenes más pequeñas y eficientes al dividir la construcción en varias etapas. Por ejemplo, puedes tener una etapa para construir la aplicación y otra para ejecutarla, copiando solo los artefactos necesarios de una etapa a otra.

### Ejemplo de Multi-stage Build

```Dockerfile
# Etapa de construcción
FROM node:12 as builder
COPY ["package.json", "package-lock.json", "/usr/src/"]
WORKDIR /usr/src
RUN npm install --only=production
COPY [".", "/usr/src/"]
RUN npm run build

# Etapa de producción
FROM node:12
COPY --from=builder ["/usr/src/build", "/usr/src/build"]
WORKDIR /usr/src
EXPOSE 3000
CMD ["node", "build/index.js"]
```

En este ejemplo, la primera etapa llamada `builder` construye la aplicación, y la segunda etapa crea la imagen de producción, copiando solo el directorio `build` de la primera etapa.



# Ejemplo Avanzado de Construcción de Imágenes Docker

## Introducción

El comando `docker build` crea imágenes Docker a partir de un `Dockerfile` y un contexto de construcción. El contexto es el conjunto de archivos en el directorio especificado en el comando `docker build`. Este proceso permite automatizar la creación de imágenes Docker, asegurando que sean reproducibles y fáciles de compartir.

## Problemas que Soluciona

1. **Consistencia:** Garantiza que la aplicación se ejecutará en un entorno consistente, independientemente del entorno de desarrollo o producción.
2. **Dependencias:** Maneja las dependencias de la aplicación de forma aislada, evitando conflictos con otras aplicaciones.
3. **Despliegue:** Simplifica el proceso de despliegue al encapsular la aplicación y sus dependencias en una sola entidad.

## Ejemplo Avanzado: Aplicación Node.js

Consideremos una aplicación Node.js que necesita compilar assets estáticos y luego ser empaquetada para producción con sus dependencias mínimas necesarias.

### `Dockerfile` Avanzado

```Dockerfile
# Etapa de construcción
FROM node:14 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción
FROM node:14-slim
WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /app/package*.json ./
RUN npm install --only=production
EXPOSE 3000
CMD ["node", "build/index.js"]
```

### Explicación

- **Multi-stage Build:** Este `Dockerfile` utiliza un multi-stage build para separar las etapas de construcción y producción. Esto reduce el tamaño final de la imagen al no incluir herramientas de desarrollo o dependencias innecesarias en el entorno de producción.
- **Optimización de Capas:** Al copiar primero `package.json` y ejecutar `npm install` antes de copiar el resto del código fuente, se aprovecha la caché de Docker. Si `package.json` no cambia, Docker usará la caché para esta capa, acelerando las construcciones subsiguientes.
- **Minimización del Contexto de Construcción:** Es importante minimizar los archivos enviados como contexto de construcción. Esto se puede lograr con un `.dockerignore` bien configurado, excluyendo archivos innecesarios (como `node_modules`, logs, directorios temporales, etc.).

## Mejoras y Prácticas Recomendadas

1. **Uso de Imágenes Oficiales y Ligeras:** Preferir versiones `slim` o `alpine` de imágenes base para reducir el tamaño y la superficie de ataque.
2. **Minimización de Capas:** Agrupar comandos `RUN` usando `&&` para reducir el número de capas y el tamaño de la imagen.
3. **Seguridad:** Actualizar regularmente las imágenes base y las dependencias para mitigar vulnerabilidades.
4. **Variables de Entorno:** Utilizar variables de entorno para configuraciones que puedan cambiar entre entornos, permitiendo una mayor flexibilidad.
5. **Puertos y Volúmenes:** Especificar puertos con `EXPOSE` y utilizar volúmenes para datos persistentes o compartidos.

## Conclusión

`docker build` es una herramienta poderosa que, cuando se combina con buenas prácticas y optimizaciones, puede mejorar significativamente el flujo de trabajo de desarrollo y despliegue. Al comprender y aplicar técnicas avanzadas, como los multi-stage builds y la optimización de capas, los desarrolladores pueden crear imágenes Docker eficientes, seguras y fáciles de mantener.

Crear imágenes Docker eficientes y optimizadas es crucial para el despliegue de aplicaciones. Al entender y utilizar correctamente las instrucciones en los `Dockerfile`s, puedes controlar el proceso de construcción de imágenes para tus aplicaciones, mejorando la eficiencia y la portabilidad.
