## Imágenes en Docker con Comandos Docker

En Docker, las imágenes son como plantillas que se utilizan para crear contenedores. Puedes crear, descargar y gestionar imágenes utilizando comandos específicos de Docker. A continuación, te explicaremos cómo trabajar con imágenes utilizando estos comandos.

### Listar las imágenes disponibles

Para ver las imágenes disponibles en tu sistema, puedes usar el siguiente comando:

```shell
docker image ls
```

Este comando muestra una lista de todas las imágenes que tienes en tu sistema.

### Descargar una imagen desde un registro

Para descargar una imagen desde un registro de Docker, como Docker Hub, puedes utilizar el comando `docker pull`. Por ejemplo, para descargar la imagen de Ubuntu 20.04, puedes ejecutar:

```shell
docker pull ubuntu:20.04
```

Este comando descargará la imagen de Ubuntu 20.04 desde Docker Hub y la almacenará en tu sistema para su uso posterior.

### Crear un contenedor a partir de una imagen

Una vez que tienes una imagen, puedes crear un contenedor a partir de ella utilizando el comando `docker run`. Por ejemplo, para crear un contenedor a partir de la imagen de Ubuntu 20.04, puedes ejecutar:

```shell
docker run -it --name mi_contenedor ubuntu:20.04 bash
```

Este comando creará un contenedor interactivo basado en la imagen de Ubuntu 20.04 y ejecutará un shell bash dentro de él.

### Eliminar una imagen

Si deseas eliminar una imagen de tu sistema, puedes utilizar el siguiente comando:

```shell
docker image rm nombre_de_la_imagen
```

Reemplaza `nombre_de_la_imagen` con el nombre o ID de la imagen que deseas eliminar.

### Ejemplo Visual

```
+------------------------------------------+
|                                          |
|       Registro de Docker (Docker Hub)    |
|                                          |
+------------------------------------------+
                   |
                   | (docker pull)
                   |
+------------------------------------------+
|                                          |
|              Imagen Descargada           |
|           (por ejemplo, Ubuntu)          |
|                                          |
+------------------------------------------+
                   |
                   | (docker run)
                   |
+------------------------------------------+
|                                          |
|             Contenedor en Ejecución      |
|                                          |
+------------------------------------------+
```

