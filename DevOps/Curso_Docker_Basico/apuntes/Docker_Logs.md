# Tutorial de Docker para Principiantes (Parte 2)

Este tutorial continúa con los comandos de Docker y te enseñará a ejecutar un contenedor de Nginx y trabajar con los registros de contenedores.

## Comandos de Docker (Parte 2)

### 1. Verificar la versión de Docker

Para verificar la versión de Docker instalada en tu sistema, utiliza el siguiente comando:

```bash
docker version
```

Este comando te proporcionará información sobre la versión de Docker Engine y Docker Client.

### 2. Ejecutar un contenedor de Nginx

Para ejecutar un contenedor de Nginx y exponerlo en el puerto 8070 de tu máquina, utiliza el siguiente comando:

```bash
docker run --name proxy -p 8070:80 nginx
```

Este comando crea un contenedor llamado "proxy" que ejecuta el servidor web Nginx y mapea el puerto 80 del contenedor al puerto 8070 de tu host.

### 3. Eliminar un contenedor

Si necesitas eliminar un contenedor, utiliza el siguiente comando, reemplazando `<nombre_del_contenedor>` por el nombre del contenedor que deseas eliminar:

```bash
docker rm <nombre_del_contenedor>
```

### 4. Ejecutar un contenedor de Nginx en segundo plano

Si deseas ejecutar el contenedor de Nginx en modo daemon (segundo plano), utiliza el siguiente comando:

```bash
docker run --name proxy -d -p 8070:80 nginx
```

### 5. Verificar el estado de los contenedores

Puedes verificar el estado de todos los contenedores utilizando el siguiente comando:

```bash
docker ps -a
```

Este comando mostrará una lista de todos los contenedores en tu sistema, incluyendo los que no están en ejecución.

### 6. Verificar los contenedores en ejecución

Para ver solo los contenedores en ejecución, utiliza el siguiente comando:

```bash
docker ps
```

### 7. Ver los registros de un contenedor

Puedes ver los registros (logs) de un contenedor utilizando el siguiente comando, reemplazando `<nombre_del_contenedor>` por el nombre del contenedor:

```bash
docker logs <nombre_del_contenedor>
```

### 8. Seguir los registros en tiempo real

Para seguir los registros de un contenedor en tiempo real, utiliza el siguiente comando:

```bash
docker logs -f <nombre_del_contenedor>
```

### 9. Limitar la cantidad de registros a mostrar

Si deseas limitar la cantidad de registros a mostrar, puedes usar la opción `--tail`. Por ejemplo, para ver los últimos 10 registros:

```bash
docker logs -f <nombre_del_contenedor> --tail 10
```

### 10. Mostrar registros antiguos

Para ver registros antiguos, puedes usar la opción `--tail` con un número grande, como 1000:

```bash
docker logs -f <nombre_del_contenedor> --tail 1000
```

¡Eso es todo! Ahora tienes una comprensión más profunda de Docker y cómo ejecutar contenedores, trabajar con registros y gestionar contenedores. Puedes seguir explorando Docker para aprender más sobre sus características avanzadas.

Recuerda reemplazar `<nombre_del_contenedor>` con el nombre del contenedor específico que estás utilizando en tu sistema.

¡Diviértete experimentando con Docker!

```

Este tutorial te proporciona información adicional sobre el uso de Docker y cómo trabajar con registros de contenedores. Asegúrate de ajustar los nombres y los valores según tu entorno específico.
```
