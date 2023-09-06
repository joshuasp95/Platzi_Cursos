# Configuración de Docker en Windows, Linux y macOS

Docker es una plataforma de contenedores que te permite crear, distribuir y ejecutar aplicaciones en contenedores. Aquí aprenderás cómo configurar Docker en los sistemas operativos Windows, Linux y macOS.

## Requisitos Previos

Antes de comenzar, asegúrate de tener una cuenta de administrador o permisos suficientes en tu sistema. Además, asegúrate de que tu computadora cumple con los requisitos mínimos de Docker. Visita [la página oficial de requisitos de Docker](https://docs.docker.com/get-docker/) para obtener información detallada.

## Instalación de Docker

### Windows

1. Descarga Docker Desktop para Windows desde [el sitio web oficial de Docker](https://www.docker.com/products/docker-desktop).
2. Ejecuta el archivo descargado y sigue las instrucciones del instalador.
3. Docker Desktop se ejecutará automáticamente después de la instalación. Inicia sesión con tu cuenta de Docker o crea una si aún no tienes una.

### Linux

#### Ubuntu

1. Abre una terminal.
2. Actualiza el índice de paquetes: `sudo apt-get update`.
3. Instala los paquetes necesarios para permitir a APT usar un repositorio HTTPS: `sudo apt-get install apt-transport-https ca-certificates curl software-properties-common`.
4. Agrega la clave GPG oficial de Docker: `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`.
5. Agrega el repositorio de Docker a las fuentes de APT: `sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"`.
6. Actualiza el índice de paquetes nuevamente: `sudo apt-get update`.
7. Instala Docker: `sudo apt-get install docker-ce`.
8. Inicia y habilita Docker para que se inicie automáticamente en el arranque: `sudo systemctl start docker` y `sudo systemctl enable docker`.
9. Agrega tu usuario al grupo `docker` para ejecutar Docker sin sudo: `sudo usermod -aG docker $USER`.
10. Cierra y vuelve a abrir la terminal para que los cambios surtan efecto.

#### Otras Distribuciones de Linux

Los pasos pueden variar según la distribución. Consulta [la documentación oficial de Docker](https://docs.docker.com/install/linux/docker-ce/) para obtener instrucciones específicas.

### macOS

1. Descarga Docker Desktop para macOS desde [el sitio web oficial de Docker](https://www.docker.com/products/docker-desktop).
2. Ejecuta el archivo descargado y sigue las instrucciones del instalador.
3. Docker Desktop se ejecutará automáticamente después de la instalación. Inicia sesión con tu cuenta de Docker o crea una si aún no tienes una.

## Verificación de la Instalación

Para verificar que Docker se ha instalado correctamente en tu sistema, abre una terminal y ejecuta el siguiente comando:

```bash
docker --version
```
