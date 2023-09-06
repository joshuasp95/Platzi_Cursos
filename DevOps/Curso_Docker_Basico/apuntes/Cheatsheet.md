
# Road to SRE
## Docker Cheat Sheet

En este documento, encontrarás una lista de comandos y ejemplos prácticos de Docker.

Si nunca antes has usado Docker, te recomiendo visitar primero esta pequeña infografía.

Y si tienes alguna duda o quieres proporcionar feedback, no dudes en dejarme un tweet.

¡Ahora, comencemos con el código!

## Comandos

### Levantando contenedores

#### Arrancar un contenedor:

```bash
docker run <image_container>
```

Ejemplo:

```bash
docker run hello-world
```

#### Arrancar un contenedor asignándole un nombre:

```bash
docker run --name <name_container> <image_container>
```

Ejemplo:

```bash
docker run --name contenedor_test ubuntu
```

#### Arrancar un contenedor con una terminal interactiva. Pasándole una shell para acceder al contenedor:

```bash
docker run -it <image_container> <shell>
```

Ejemplo:

```bash
docker run -it ubuntu bash
```

#### Arrancar un contenedor mapeando un puerto del host a un puerto del contenedor:

```bash
docker run -p <host_port>:<container_port> <image_container>
```

Ejemplo:

```bash
docker run -p 8080:80 nginx
```

Igual que el ejemplo anterior pero dejándolo en segundo plano:

```bash
docker run -p 8080:80 -d nginx
```

#### Arrancar un contenedor que, tras terminar su período de vida, será eliminado automáticamente:

```bash
docker run --rm <image_container>
```

Ejemplo:

```bash
docker run -p 8080:80 -d --rm nginx
```

#### Arrancar un contenedor con un volumen:

```bash
docker run -v <volume_name>:<mount_point>:<options> <image_container>
```

Ejemplo:

```bash
Volume -> test
Punto de montaje en el contenedor -> /apps
Opciones -> rw (Lectura y escritura)
docker run -v test:/apps:rw nginx
```

#### Arrancar un contenedor con un bind mount:

```bash
docker run -v <shared_folder>:<mount_point>:<options> <image_container>
```

Ejemplo:

```bash
Ruta del host a compartir -> /home/application
Punto de montaje en el contenedor -> /apps
Opciones -> ro (Solo lectura)
docker run -v /home/application:/apps:ro ubuntu
```

#### Arrancar un contenedor con tmpfs:

```bash
docker run \
--mount type=tmpfs,destination=<mount_point>,tmpfs-mode=<permisos>,tmpfs-size=<bytes_size> \
<image_container>
```

Ejemplo:

```bash
Punto de montaje en el contenedor -> /temporal
Permisos -> Todos los permisos solo para el propietario.
Tamaño del FS -> 21474836480 bytes = 20G
docker run \
--mount type=tmpfs,destination=/temporal,tmpfs-mode=700,tmpfs-size=21474836480 \
nginx
```

### Listando contenedores

#### Lista de los contenedores activos:

```bash
docker ps
```

#### Lista de todos los contenedores activos e inactivos del sistema:

```bash
docker ps -a
```

#### Lista los ID de todos los contenedores:

```bash
docker ps -aq
```

### Debugging

#### Inspeccionar la data de un contenedor (por ID o por nombre):

```bash
docker inspect <id_container>
```

o

```bash
docker inspect <name_container>
```

Aplicando filtros, por ejemplo, buscando las variables de entorno:

```bash
docker inspect -f '{{ json .Config.Env }}' <name_container>
```

#### Ver los logs del contenedor:

```bash
docker logs <name_container>
```

### Eliminando contenedores

#### Eliminar un contenedor que no esté arriba (por nombre o por ID):

```bash
docker rm <name_container>
```

#### Eliminar un contenedor aunque esté arriba, forzándolo (por nombre o por ID):

```bash
docker rm -f <id_container>
```

#### Eliminar todos los contenedores que no estén arriba a la vez:

```bash
docker rm $(docker ps -aq)
```

Hace casi 3 años
Barck Code
Enlaces en esta nota ↗
   gist.github.com/BarckCode/35e2360fa49555382dabe1bfe356a064
   twitter.com/barckcode
Crea una página como esta →

```

Asegúrate de reemplazar `URL_DE_LA_IMAGEN` con la URL de la imagen que desees utilizar en tu documento Markdown. Puedes copiar y pegar este texto en un archivo `.md` y ajustarlo según tus necesidades.
```
