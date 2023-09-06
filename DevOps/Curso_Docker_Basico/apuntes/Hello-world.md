# Tutorial Docker: Hello World

Este tutorial te guiará a través de los primeros pasos en Docker con el clásico ejemplo "Hello World". Docker es una herramienta que te permite crear y ejecutar aplicaciones en contenedores.

## Paso 1: Instalación de Docker

Antes de comenzar, debes asegurarte de que Docker esté instalado en tu sistema. Si no lo has hecho, sigue las instrucciones de instalación para tu sistema operativo en [Docker Install](https://docs.docker.com/get-docker/).

## Paso 2: Ejecutar el Contenedor "Hello World"

Una vez que Docker esté instalado, abre una terminal y ejecuta el siguiente comando:

```bash
docker run hello-world
```

### ¿Qué sucederá?

- Docker buscará la imagen "hello-world" en tu sistema local. Si no la encuentra, la descargará automáticamente desde Docker Hub.
- Docker ejecutará un contenedor basado en la imagen "hello-world".
- Verás un mensaje en la terminal que te dará la bienvenida y te informará que tu instalación de Docker está funcionando correctamente.

¡Eso es todo! Has ejecutado tu primer contenedor Docker y confirmado que Docker está instalado y en funcionamiento en tu sistema.

Output:

```bash
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

## Conclusión

En este tutorial básico, ejecutaste el contenedor "hello-world" en Docker para verificar la instalación. Docker es una herramienta poderosa que te permite crear, distribuir y ejecutar aplicaciones en entornos aislados. Ahora estás listo para explorar y experimentar más con Docker y sus capacidades.


