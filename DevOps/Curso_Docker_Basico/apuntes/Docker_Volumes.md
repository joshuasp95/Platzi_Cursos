# Comandos de Docker y MongoDB - Uso Básico

En esta lección, aprenderemos cómo usar Docker para ejecutar una base de datos MongoDB de manera sencilla y persistente. Además, introduciremos conceptos clave como contenedores y volúmenes.

## Introducción a Docker

Docker es una plataforma que permite crear, distribuir y ejecutar aplicaciones en contenedores. Un contenedor es una unidad liviana que incluye todo lo necesario para ejecutar una aplicación, incluidos el código, las bibliotecas y las dependencias.

## Listar los volúmenes existentes

Antes de empezar, es importante entender que Docker puede usar volúmenes para almacenar datos de manera persistente, separando los datos de un contenedor. Comencemos viendo la lista de volúmenes disponibles en Docker:

```shell
docker volume ls
```

Los volúmenes son una forma de guardar datos de manera segura y separada de los contenedores.

## Crear un nuevo volumen

Para nuestros datos de MongoDB, vamos a crear un nuevo volumen llamado `dbdata`. Esto se hace de la siguiente manera:

```shell
docker volume create dbdata
```

Un volumen es como un disco duro virtual en el que podemos almacenar datos de forma persistente.

## Ejecutar un contenedor de MongoDB con montaje de volumen

Ahora, vamos a ejecutar un contenedor de MongoDB y conectarlo al volumen `dbdata` que creamos anteriormente:

```shell
docker run -d --name mongodb --mount src=dbdata,dst=/data/db mongo
```

Este comando crea un contenedor llamado `mongodb` que utiliza el volumen `dbdata` para almacenar los datos de MongoDB de manera persistente. Puedes pensar en el volumen como una carpeta especial que vive fuera del contenedor.

## Acceder a la base de datos MongoDB

Para interactuar con nuestra base de datos MongoDB, primero necesitamos ingresar al contenedor. Ejecuta este comando:

```shell
docker exec -it mongodb bash
```

Esto abrirá una terminal dentro del contenedor.

## Operaciones en la base de datos MongoDB

Una vez dentro del contenedor, podemos usar MongoDB. Aquí hay algunos comandos útiles:

### Listar las bases de datos disponibles

```shell
show dbs
```

Esto mostrará una lista de las bases de datos disponibles.

### Crear una nueva base de datos

```shell
use platzi
```

Este comando crea una nueva base de datos llamada "platzi".

### Insertar datos en una colección

```shell
db.users.insert({"nombre": "guido"})
```

Inserta un nuevo documento en una colección llamada "users" con un campo llamado "nombre".

### Consultar los datos en una colección

```shell
db.users.find()
```

Este comando muestra todos los documentos en la colección "users".

## Eliminar y volver a crear el contenedor MongoDB

Para comprobar que los datos persisten incluso cuando eliminamos el contenedor, podemos hacer lo siguiente:

1. Listar los contenedores en ejecución para confirmar que `mongodb` está activo:

```shell
docker ps
```

2. Obtener información detallada sobre el contenedor `mongodb`:

```shell
docker inspect mongodb
```

3. Eliminar el contenedor `mongodb`:

```shell
docker rm -f mongodb
```

4. Volver a ejecutar el contenedor MongoDB, montando el volumen `dbdata`:

```shell
docker run -d --name mongodb --mount src=dbdata,dst=/data/db mongo
```

5. Acceder nuevamente al contenedor MongoDB:

```shell
docker exec -it mongodb bash
```

6. Comprobar que los datos persisten utilizando los comandos de MongoDB mencionados anteriormente.

Estos apuntes ahora incluyen la parte en la que se elimina y se vuelve a crear el contenedor para demostrar que los datos persisten en el volumen incluso cuando se elimina el contenedor.
