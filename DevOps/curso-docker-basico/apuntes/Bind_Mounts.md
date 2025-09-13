# Comandos de Docker - Montar una Ruta Local para Almacenar Datos de MongoDB

En esta lección, aprenderemos cómo usar el comando `docker run` para crear un contenedor de MongoDB y montar una ruta local para almacenar datos persistentes, lo que nos permite preservar los datos incluso si eliminamos el contenedor.

## Crear un directorio para datos locales

Primero, navega al directorio donde deseas almacenar tus datos de MongoDB:

```shell
cd Curso_Docker_Basico/
mkdir docker_data
cd docker_data/
```

## Ejecutar un contenedor MongoDB sin montar datos locales

Para comprender la importancia de montar una ruta local, primero ejecutamos un contenedor de MongoDB sin montar datos locales:

```shell
docker run -d --name mongodb mongo
```

Este contenedor de MongoDB no preserva los datos cuando se elimina.

## Crear un directorio para datos locales de MongoDB

Ahora, crea un directorio donde almacenaremos los datos de MongoDB en tu sistema local:

```shell
mkdir mongo_data
```

## Eliminar el contenedor MongoDB

Antes de ejecutar el contenedor MongoDB con montaje de datos locales, eliminaremos el contenedor anterior:

```shell
docker rm -f mongodb
```

## Ejecutar un contenedor MongoDB con montaje de datos locales

Finalmente, ejecutamos un contenedor de MongoDB con montaje de datos locales utilizando la opción `-v`:

```shell
docker run -d --name mongodb -v /home/theguardian/GIT/Platzi_Cursos/DevOps/Curso_Docker_Basico/docker_data/mongo_data:/data/db mongo
```

Este comando monta el directorio `mongo_data` de tu sistema local en `/data/db` dentro del contenedor de MongoDB. De esta manera, los datos se almacenan localmente y se mantienen incluso si eliminamos el contenedor.

## Acceder al contenedor MongoDB

Si deseas acceder al contenedor MongoDB en ejecución, puedes hacerlo con el siguiente comando:

```shell
docker exec -it mongodb bash
```

Estos comandos te permiten trabajar con MongoDB en Docker mientras mantienes los datos de forma persistente en tu sistema local.

