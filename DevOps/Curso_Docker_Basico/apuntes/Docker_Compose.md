# Docker Compose: Una Guía Completa

Docker Compose es una herramienta para definir y ejecutar aplicaciones Docker multi-contenedor. Utiliza archivos YAML para configurar los servicios de tu aplicación y ofrece un comando único para iniciar y detener todos los servicios relacionados con tu proyecto.

## ¿Qué es Docker Compose?

Docker Compose permite a los desarrolladores y operadores de sistemas orquestar múltiples contenedores de Docker para que trabajen juntos como una aplicación compuesta. Con Compose, puedes gestionar el ciclo de vida completo de una aplicación multi-contenedor: construir imágenes, iniciar y detener servicios, escalar servicios y más.

## ¿Para Qué Sirve?

* **Desarrollo** : Simplifica el proceso de desarrollo al permitir que los desarrolladores creen un entorno local que imita una pila de aplicación completa simplemente usando un archivo de configuración.
* **Pruebas** : Facilita la ejecución de suites de pruebas automatizadas en un entorno que simula la producción o cualquier otro entorno deseado.
* **Despliegue** : Aunque Docker Compose está diseñado principalmente para el desarrollo y las pruebas, también se puede utilizar en ciertos escenarios de despliegue, especialmente en entornos simples.

## ¿Qué Soluciona?

* **Dependencias entre Contenedores** : Gestiona fácilmente las dependencias entre servicios, asegurando que los contenedores se inicien en el orden correcto.
* **Diferencias de Entorno** : Reduce las diferencias entre entornos de desarrollo, pruebas y producción, asegurando la coherencia a través de los entornos.
* **Configuración en Código** : Permite versionar y compartir la configuración de tu aplicación, mejorando la colaboración y seguimiento de cambios.

## ¿Qué Mejora?

* **Eficiencia en el Desarrollo** : Minimiza el tiempo necesario para realizar cambios y ver resultados, mejorando la eficiencia del desarrollo.
* **Facilidad de Uso** : Ofrece una interfaz de línea de comandos simple para gestionar el ciclo de vida de la aplicación.
* **Escalabilidad y Flexibilidad** : Facilita la escalabilidad de servicios y la adaptación del entorno a diferentes configuraciones o limitaciones.

## Operaciones Básicas

### Instalación

Docker Compose viene incluido en las instalaciones de Docker para Windows y Mac. Para Linux, puedes instalarlo descargando el binario correspondiente:

<pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg>Copy code</button></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
</code></div></div></pre>

### Archivo de Configuración `docker-compose.yml`

El corazón de Docker Compose es el archivo `docker-compose.yml`, donde defines los servicios, redes y volúmenes.

Ejemplo básico:

<pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>yaml</span><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg>Copy code</button></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-yaml">version: '3.8'
services:
  web:
    image: nginx:latest
    ports:
      - "80:80"
  db:
    image: mongo:latest
</code></div></div></pre>

### Comandos Comunes

* **Iniciar Servicios** : `docker-compose up`
* **Detener Servicios** : `docker-compose down`
* **Reconstruir Servicios** : `docker-compose up --build`
* **Escalar Servicios** : `docker-compose up --scale web=3`

## Manejo Avanzado

### Variables de Entorno

Puedes utilizar un archivo `.env` para definir variables de entorno que Docker Compose leerá al ejecutar los comandos.

### Dependencias entre Servicios

Utiliza `depends_on` para gestionar las dependencias entre servicios, asegurando que se inicien en el orden correcto.

### Volumenes y Redes Personalizadas

Define volúmenes y redes personalizadas en tu archivo `docker-compose.yml` para persistir datos y gestionar la comunicación entre contenedores.

### Despliegue

Aunque Docker Compose se utiliza principalmente para desarrollo, también puedes usarlo para desplegar aplicaciones en entornos de producción simplificados, utilizando opciones de configuración avanzadas como `deploy` en tu archivo `docker-compose.yml`.
