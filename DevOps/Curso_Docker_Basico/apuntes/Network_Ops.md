# Guía de Redes en Docker

Esta guía explica las operaciones de red realizadas en Docker, proporcionando contexto y detalles que ayudarán a entender cómo Docker maneja la conectividad de red para contenedores.

## Creación y Uso de Redes Personalizadas

### Crear una Red Personalizada

<pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg>Copy code</button></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">docker network create --attachable platzinet
</code></div></div></pre>

* **Propósito** : Crea una red personalizada llamada `platzinet`. La opción `--attachable` permite que los contenedores se conecten y desconecten de la red de forma dinámica.
* **Beneficios** : Ofrece mayor control sobre la configuración de red de los contenedores, permitiendo una gestión de conectividad más detallada y aislada que con la red predeterminada de Docker.

### Listar Redes Disponibles

<pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg>Copy code</button></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">docker network ls
</code></div></div></pre>

* **Propósito** : Lista todas las redes disponibles en el host Docker.
* **Beneficios** : Permite ver todas las redes existentes, incluyendo las creadas por defecto y las personalizadas, facilitando la gestión y el diagnóstico de redes.

### Inspeccionar una Red

<pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg>Copy code</button></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">docker network inspect platzinet
</code></div></div></pre>

* **Propósito** : Proporciona detalles sobre la red `platzinet`, incluyendo información sobre los contenedores conectados.
* **Beneficios** : Ayuda a entender cómo está configurada la red, qué contenedores están conectados, y sus direcciones IP dentro de la red.

## Conectar Contenedores a Redes

### Crear y Conectar Contenedores a una Red

<pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg>Copy code</button></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">docker run -d --name db mongo
docker network connect platzinet db
</code></div></div></pre>

* **Propósito** : Crea un contenedor llamado `db` usando la imagen `mongo` y luego lo conecta a la red `platzinet`.
* **Beneficios** : Permite la creación de contenedores que luego pueden ser conectados a redes específicas, facilitando una configuración de red dinámica y modular.

### Conectar un Contenedor a una Red Durante su Creación

<pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg>Copy code</button></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">docker run -d --name app -p 3000:3000 --env MONGO_URL=mongodb://db:27017/test platziapp
</code></div></div></pre>

* **Propósito** : Inicia un contenedor llamado `app` desde la imagen `platziapp`, lo conecta a la red predeterminada de Docker, expone el puerto 3000 y establece una variable de entorno para la URL de MongoDB.
* **Beneficios** : Simplifica la configuración al conectar el contenedor a la red predeterminada y configurar la comunicación con otros servicios (como `db`) en una sola operación.

### Conectar Contenedores Adicionales a la Misma Red

<pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg>Copy code</button></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">docker network connect platzinet app
</code></div></div></pre>

* **Propósito** : Conecta el contenedor `app` ya existente a la red `platzinet`.
* **Beneficios** : Permite que `app` se comunique directamente con otros contenedores en la misma red (`platzinet`), como el contenedor `db`.

## Beneficios Generales de las Redes Personalizadas en Docker

* **Aislamiento y Seguridad** : Las redes personalizadas proporcionan aislamiento entre diferentes grupos de contenedores, lo que mejora la seguridad y reduce las posibilidades de conflictos de red.
* **Facilidad de Descubrimiento y Comunicación** : Los contenedores en la misma red pueden descubrirse y comunicarse entre sí por nombre, lo que simplifica la configuración de conexiones entre servicios.
* **Gestión de Configuración de Red** : Permite una configuración de red más detallada y específica según los requerimientos del proyecto o del entorno de desarrollo.



## Estado Final del Entorno de Desarrollo

Al final de tus operaciones, tienes dos contenedores corriendo:

* **`db`** : Un contenedor MongoDB destinado a ser utilizado como base de datos para tu aplicación. Está corriendo sin puertos expuestos al host, lo que significa que solo es accesible desde otros contenedores en la misma red Docker.
* **`app`** : Un contenedor ejecutando tu aplicación `platziapp`, expuesto en los puertos `3000/tcp` del host, lo que permite acceder a la aplicación desde el navegador o cualquier cliente HTTP en tu máquina local o red.

Ambos contenedores están conectados a una red personalizada llamada `platzinet`, que has creado específicamente para este propósito.

## Operaciones Realizadas

### Creación de una Red Personalizada (`platzinet`)

* **Comando** : `docker network create --attachable platzinet`
* **Propósito** : Crear una red que permita la comunicación fluida entre los contenedores de tu aplicación, manteniéndolos aislados de otros contenedores que no pertenezcan a este entorno de desarrollo.
* **Beneficios** :
* **Aislamiento** : Mejora la seguridad al limitar las interacciones solo a contenedores que deberían comunicarse entre sí.
* **Facilidad de Conexión** : Los contenedores pueden comunicarse usando nombres, simplificando la configuración de conexiones entre servicios.

### Inspección de la Red

* **Comando** : `docker network inspect platzinet`
* **Propósito** : Obtener detalles sobre la red y verificar qué contenedores están conectados.
* **Beneficios** :
* **Diagnóstico y Configuración** : Ayuda a asegurar que los contenedores estén correctamente conectados y configurados para comunicarse como se espera.

### Conexión de Contenedores a la Red

* **Comandos** :
* `docker run -d --name db mongo`
* `docker network connect platzinet db`
* `docker run -d --name app -p 3000:3000 --env MONGO_URL=mongodb://db:27017/test platziapp`
* `docker network connect platzinet app`
* **Propósito** : Establecer un entorno donde `app` pueda comunicarse con `db` de manera segura y eficiente.
* **Beneficios** :
* **Comunicación Segura** : Solo los contenedores que necesitan comunicarse están en la misma red.
* **Configuración Simplificada** : Usar el nombre del contenedor `db` como hostname dentro de la variable `MONGO_URL` simplifica la configuración sin necesidad de direcciones IP estáticas.

## Beneficios de Seguir Estas Prácticas

1. **Desarrollo y Pruebas Consistentes** : Al utilizar contenedores, te aseguras de que tu entorno de desarrollo sea lo más cercano posible al entorno de producción, minimizando los problemas de "funciona en mi máquina".
2. **Rapidez en el Despliegue** : La capacidad de construir, probar y desplegar usando contenedores reduce significativamente el tiempo necesario para hacer cambios en producción.
3. **Aislamiento y Seguridad** : La red personalizada asegura que solo los servicios que deben comunicarse entre sí puedan hacerlo, mejorando la seguridad general de tu entorno de desarrollo.
4. **Facilidad de Escalado** : Docker facilita el escalado de tu aplicación al permitirte iniciar más instancias de contenedores según sea necesario sin complicaciones adicionales en la configuración de la red.


## Estado Final del Entorno de Desarrollo

Al final de tus operaciones, tienes dos contenedores corriendo:

* **`db`** : Un contenedor MongoDB destinado a ser utilizado como base de datos para tu aplicación. Está corriendo sin puertos expuestos al host, lo que significa que solo es accesible desde otros contenedores en la misma red Docker.
* **`app`** : Un contenedor ejecutando tu aplicación `platziapp`, expuesto en los puertos `3000/tcp` del host, lo que permite acceder a la aplicación desde el navegador o cualquier cliente HTTP en tu máquina local o red.

Ambos contenedores están conectados a una red personalizada llamada `platzinet`, que has creado específicamente para este propósito.

## Operaciones Realizadas

### Creación de una Red Personalizada (`platzinet`)

* **Comando** : `docker network create --attachable platzinet`
* **Propósito** : Crear una red que permita la comunicación fluida entre los contenedores de tu aplicación, manteniéndolos aislados de otros contenedores que no pertenezcan a este entorno de desarrollo.
* **Beneficios** :
* **Aislamiento** : Mejora la seguridad al limitar las interacciones solo a contenedores que deberían comunicarse entre sí.
* **Facilidad de Conexión** : Los contenedores pueden comunicarse usando nombres, simplificando la configuración de conexiones entre servicios.

### Inspección de la Red

* **Comando** : `docker network inspect platzinet`
* **Propósito** : Obtener detalles sobre la red y verificar qué contenedores están conectados.
* **Beneficios** :
* **Diagnóstico y Configuración** : Ayuda a asegurar que los contenedores estén correctamente conectados y configurados para comunicarse como se espera.

### Conexión de Contenedores a la Red

* **Comandos** :
* `docker run -d --name db mongo`
* `docker network connect platzinet db`
* `docker run -d --name app -p 3000:3000 --env MONGO_URL=mongodb://db:27017/test platziapp`
* `docker network connect platzinet app`
* **Propósito** : Establecer un entorno donde `app` pueda comunicarse con `db` de manera segura y eficiente.
* **Beneficios** :
* **Comunicación Segura** : Solo los contenedores que necesitan comunicarse están en la misma red.
* **Configuración Simplificada** : Usar el nombre del contenedor `db` como hostname dentro de la variable `MONGO_URL` simplifica la configuración sin necesidad de direcciones IP estáticas.

## Beneficios de Seguir Estas Prácticas

1. **Desarrollo y Pruebas Consistentes** : Al utilizar contenedores, te aseguras de que tu entorno de desarrollo sea lo más cercano posible al entorno de producción, minimizando los problemas de "funciona en mi máquina".
2. **Rapidez en el Despliegue** : La capacidad de construir, probar y desplegar usando contenedores reduce significativamente el tiempo necesario para hacer cambios en producción.
3. **Aislamiento y Seguridad** : La red personalizada asegura que solo los servicios que deben comunicarse entre sí puedan hacerlo, mejorando la seguridad general de tu entorno de desarrollo.
4. **Facilidad de Escalado** : Docker facilita el escalado de tu aplicación al permitirte iniciar más instancias de contenedores según sea necesario sin complicaciones adicionales en la configuración de la red.


## Estado Final del Entorno de Desarrollo

Al final de tus operaciones, tienes dos contenedores corriendo:

* **`db`** : Un contenedor MongoDB destinado a ser utilizado como base de datos para tu aplicación. Está corriendo sin puertos expuestos al host, lo que significa que solo es accesible desde otros contenedores en la misma red Docker.
* **`app`** : Un contenedor ejecutando tu aplicación `platziapp`, expuesto en los puertos `3000/tcp` del host, lo que permite acceder a la aplicación desde el navegador o cualquier cliente HTTP en tu máquina local o red.

Ambos contenedores están conectados a una red personalizada llamada `platzinet`, que has creado específicamente para este propósito.

## Operaciones Realizadas

### Creación de una Red Personalizada (`platzinet`)

* **Comando** : `docker network create --attachable platzinet`
* **Propósito** : Crear una red que permita la comunicación fluida entre los contenedores de tu aplicación, manteniéndolos aislados de otros contenedores que no pertenezcan a este entorno de desarrollo.
* **Beneficios** :
* **Aislamiento** : Mejora la seguridad al limitar las interacciones solo a contenedores que deberían comunicarse entre sí.
* **Facilidad de Conexión** : Los contenedores pueden comunicarse usando nombres, simplificando la configuración de conexiones entre servicios.

### Inspección de la Red

* **Comando** : `docker network inspect platzinet`
* **Propósito** : Obtener detalles sobre la red y verificar qué contenedores están conectados.
* **Beneficios** :
* **Diagnóstico y Configuración** : Ayuda a asegurar que los contenedores estén correctamente conectados y configurados para comunicarse como se espera.

### Conexión de Contenedores a la Red

* **Comandos** :
* `docker run -d --name db mongo`
* `docker network connect platzinet db`
* `docker run -d --name app -p 3000:3000 --env MONGO_URL=mongodb://db:27017/test platziapp`
* `docker network connect platzinet app`
* **Propósito** : Establecer un entorno donde `app` pueda comunicarse con `db` de manera segura y eficiente.
* **Beneficios** :
* **Comunicación Segura** : Solo los contenedores que necesitan comunicarse están en la misma red.
* **Configuración Simplificada** : Usar el nombre del contenedor `db` como hostname dentro de la variable `MONGO_URL` simplifica la configuración sin necesidad de direcciones IP estáticas.

## Beneficios de Seguir Estas Prácticas

1. **Desarrollo y Pruebas Consistentes** : Al utilizar contenedores, te aseguras de que tu entorno de desarrollo sea lo más cercano posible al entorno de producción, minimizando los problemas de "funciona en mi máquina".
2. **Rapidez en el Despliegue** : La capacidad de construir, probar y desplegar usando contenedores reduce significativamente el tiempo necesario para hacer cambios en producción.
3. **Aislamiento y Seguridad** : La red personalizada asegura que solo los servicios que deben comunicarse entre sí puedan hacerlo, mejorando la seguridad general de tu entorno de desarrollo.
4. **Facilidad de Escalado** : Docker facilita el escalado de tu aplicación al permitirte iniciar más instancias de contenedores según sea necesario sin complicaciones adicionales en la configuración de la red.
