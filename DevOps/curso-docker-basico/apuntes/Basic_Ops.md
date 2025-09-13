# Tutorial de Docker para Principiantes

Este tutorial te guiará a través de los conceptos básicos de Docker utilizando los comandos que has utilizado hasta ahora.

## Introducción a Docker

Docker es una plataforma de contenedores que facilita la creación, distribución y ejecución de aplicaciones en entornos aislados llamados contenedores. A continuación, aprenderemos algunos comandos esenciales de Docker.

## Comandos de Docker

### 1. Ver contenedores en ejecución

```bash
docker ps
```

Este comando muestra una lista de los contenedores en ejecución en tu sistema.

### 2. Ver todos los contenedores

```bash
docker ps -a
```

Este comando muestra una lista de todos los contenedores, incluyendo los que no están en ejecución.

### 3. Crear un contenedor

Para crear un contenedor, puedes usar el comando `docker run`. Por ejemplo, para ejecutar un contenedor de Ubuntu:

```bash
docker run ubuntu
```

### 4. Acceder a un contenedor en ejecución

Puedes acceder a un contenedor en ejecución utilizando el comando `docker exec`. Por ejemplo:

```bash
docker exec -it <nombre_del_contenedor> bash
```

### 5. Detener un contenedor

Para detener un contenedor en ejecución, usa el comando `docker stop` seguido del nombre o ID del contenedor:

```bash
docker stop <nombre_del_contenedor>
```

### 6. Eliminar un contenedor

Para eliminar un contenedor, utiliza el comando `docker rm` seguido del nombre o ID del contenedor:

```bash
docker rm <nombre_del_contenedor>
```

### 7. Limpiar contenedores no utilizados

Puedes limpiar todos los contenedores no utilizados (detenidos) con el siguiente comando:

```bash
docker container prune
```

### 8. Inspeccionar un contenedor

Puedes obtener información detallada sobre un contenedor utilizando el comando `docker inspect`. Por ejemplo:

```bash
docker inspect <nombre_o_ID_del_contenedor> > inspect_outputs/ubuntu.json
```

### 9. Ejecutar un contenedor en segundo plano

Para ejecutar un contenedor en segundo plano (modo daemon), puedes usar el siguiente comando:

```bash
docker run -d ubuntu tail -f /dev/null
```

### 10. Obtener el PID de un contenedor

Para obtener el ID del proceso (PID) de un contenedor, puedes usar el comando `docker inspect` con formato:

```bash
docker inspect --format '{{.State.Pid}}' <nombre_del_contenedor>
```

### 11. Eliminar un contenedor forzadamente

Si necesitas eliminar un contenedor que no responde, puedes usar el comando `kill` seguido del PID del contenedor:

```bash
kill -9 <PID_del_contenedor>
```

### 12. Cambiar el nombre de un contenedor

Puedes cambiar el nombre de un contenedor utilizando el comando `docker rename`:

```bash
docker rename <nombre_anterior> <nuevo_nombre>
```

¡Eso es todo! Ahora tienes una introducción básica a Docker y algunos comandos esenciales. Puedes continuar explorando Docker y sus características avanzadas para mejorar tu comprensión.

Recuerda reemplazar `<nombre_del_contenedor>`, `<nombre_anterior>`, `<nuevo_nombre>`, `<ID_del_contenedor>`, y `<PID_del_contenedor>` con los valores correspondientes en tu sistema.
