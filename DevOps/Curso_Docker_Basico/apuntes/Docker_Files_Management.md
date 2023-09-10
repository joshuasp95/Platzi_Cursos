# Comandos de Docker - Host, Bind Mount, Volume y TMPFS Mount

En esta lección, aprenderemos sobre diferentes métodos de almacenamiento en Docker y cómo interactuar con ellos, junto con una explicación de cada enfoque.

## Conceptos de Almacenamiento en Docker

### Host

- **Descripción**: En el enfoque "Host", los archivos se almacenan en el sistema host donde Docker está instalado. Esto significa que los datos no se encapsulan en un contenedor y son visibles desde fuera del contenedor.
- **Persistencia**: Los datos son persistentes en el host incluso después de eliminar el contenedor.
- **Seguridad**: No es seguro ya que los datos son accesibles directamente en el host.

### Bind Mount

- **Descripción**: En un Bind Mount, se especifica una ruta en el sistema host y se monta en un contenedor. Los archivos son compartidos entre el host y el contenedor.
- **Persistencia**: Los datos son persistentes en el host y visibles desde el contenedor. Los cambios en cualquiera de los lados se reflejan en el otro.
- **Seguridad**: No es tan seguro como los volúmenes, ya que los archivos son accesibles desde fuera del contenedor.

### Volume

- **Descripción**: Un volumen es una forma de almacenar datos en el área administrada por Docker, separada del sistema host. Se utilizan para garantizar la persistencia de datos y permiten una mejor administración y respaldo de datos.
- **Persistencia**: Los datos son persistentes y seguros, incluso si el contenedor se elimina.
- **Seguridad**: Más seguro que el enfoque "Host" y "Bind Mount" porque los datos no son visibles en el sistema host.

### TMPFS Mount

- **Descripción**: TMPFS es un sistema de archivos basado en la memoria RAM del contenedor. Los datos se almacenan temporalmente y se eliminan cuando el contenedor se detiene o se elimina.
- **Persistencia**: Los datos son temporales y se pierden cuando el contenedor se detiene o se elimina. Útil para datos efímeros.
- **Seguridad**: Adecuado para datos temporales, pero no para datos críticos.

## Comandos de Docker

A continuación, se presentan los comandos utilizados para demostrar estos conceptos:

1. Listar contenedores en ejecución:

```shell
docker ps
```

Este comando muestra una lista de los contenedores que se están ejecutando actualmente en Docker.

2. Obtener información detallada sobre un contenedor (en este caso, "mongodb"):

```shell
docker inspect mongodb
```

Este comando proporciona información detallada sobre un contenedor, incluidos los volúmenes y las configuraciones asociadas.

3. Eliminar un contenedor (en este caso, "mongodb"):

```shell
docker rm -f mongodb
```

Este comando fuerza la eliminación de un contenedor en ejecución.

4. Ejecutar un contenedor Ubuntu en segundo plano:

```shell
docker run -d --name test ubuntu tail -f /dev/null
```

Este comando crea un contenedor de Ubuntu llamado "test" en segundo plano.

5. Acceder a un contenedor Ubuntu:

```shell
docker exec -it ubuntu bash
```

Este comando abre una terminal interactiva dentro del contenedor Ubuntu llamado "ubuntu".

6. Copiar un archivo desde el sistema host al contenedor (en este caso, "prueba.txt" al contenedor "test"):

```shell
docker cp prueba.txt test:/testing/test.txt
```

Este comando copia un archivo desde el sistema host al sistema de archivos del contenedor.

7. Acceder a un contenedor (en este caso, "test"):

```shell
docker exec -it test bash
```

Este comando abre una terminal interactiva dentro del contenedor "test".

8. Copiar un archivo desde el contenedor al sistema host (en este caso, desde el contenedor "test" al directorio "localtesting" en el sistema host):

```shell
docker cp test:/testing localtesting
```

Este comando copia archivos desde el sistema de archivos del contenedor al sistema host.

