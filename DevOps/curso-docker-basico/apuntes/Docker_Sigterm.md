# Manejo de SIGTERM en Docker

## Introducción

En esta clase, exploramos cómo Docker maneja las señales de salida, específicamente el SIGTERM, y cómo podemos personalizar el comportamiento de nuestros contenedores frente a estas señales. Utilizamos un ejemplo práctico con un script de shell (`loop.sh`) que se ejecuta indefinidamente hasta que recibe una señal SIGTERM.

## Configuración del Entorno

Nuestro entorno consiste en un contenedor Docker que ejecuta un script de bash en un bucle infinito. Este script está diseñado para detenerse de manera limpia al recibir la señal SIGTERM.

### Dockerfile

El `Dockerfile` utilizado para crear la imagen de nuestro contenedor es el siguiente:

```Dockerfile
FROM ubuntu:trusty
COPY ["loop.sh", "/"]
CMD ["/loop.sh"]
```

Este `Dockerfile` se basa en la imagen `ubuntu:trusty` y copia el script `loop.sh` al sistema de archivos del contenedor, para luego ejecutarlo.

### Script `loop.sh`

El script `loop.sh` es un bucle infinito que captura la señal SIGTERM y termina de manera limpia:

```bash
#!/usr/bin/env bash
trap 'exit 0' SIGTERM
while true; do :; done
```

## Comandos Docker Utilizados

Durante la clase, ejecutamos varios comandos Docker para demostrar la creación, ejecución y manejo de contenedores, así como la respuesta a señales:

1. **Construir la Imagen Docker:**

   ```bash
   docker build -t loop .
   ```
2. **Ejecutar el Contenedor en Modo Detachado:**

   ```bash
   docker run -d --name looper loop
   ```
3. **Listar los Contenedores en Ejecución:**

   ```bash
   docker ps
   ```
4. **Detener el Contenedor de Manera Limpia:**

   ```bash
   docker stop looper
   ```

## Manejo de SIGTERM

Al ejecutar el comando `docker stop looper`, Docker envía una señal SIGTERM al proceso principal del contenedor (`PID 1`). El script `loop.sh`, al recibir esta señal, ejecuta la instrucción `trap` especificada, que termina el script de manera limpia.

## Limpieza

Después de detener el contenedor, podemos eliminarlo con el comando:

```bash
docker rm looper
```

Y para eliminar la imagen creada, usamos:

```bash
docker rmi loop
```

## Conclusión

En esta clase, aprendimos la importancia de manejar adecuadamente las señales de salida en contenedores Docker, específicamente el SIGTERM. Esto nos permite asegurar una terminación limpia y ordenada de los procesos dentro de nuestros contenedores.


# Diferencia entre CMD con y sin la sintaxis `exec`

## Forma de `exec`

Cuando se utiliza `CMD` con la sintaxis `exec` (por ejemplo, `CMD ["ejecutable", "param1", "param2"]`), especificas el comando y sus argumentos en formato JSON. Esta es la forma de `exec`. Docker ejecuta el comando especificado directamente, sin pasar por una shell. Esto tiene varias implicaciones:

- **Variables de entorno:** No se expanden si se definen en el comando. Necesitarías utilizar la forma de shell o manejar la expansión de variables en tu aplicación.
- **Señales:** El proceso iniciado recibe señales UNIX directamente. Esto es importante para aplicaciones que necesitan manejar señales específicas de manera personalizada.
- **No hay shell intermedio:** Al no invocar una shell, comportamientos como la expansión de comodines (por ejemplo, `*`) o la redirección de salida (por ejemplo, `>`, `|`) no funcionan a menos que el comando ejecutado sea una shell que interprete estos caracteres.

## Forma de `shell`

Cuando `CMD` se utiliza sin la sintaxis `exec` (por ejemplo, `CMD comando param1 param2`), se invoca a través de una shell (`/bin/sh -c` en Linux). Esto se conoce como la forma de shell. Las principales diferencias son:

- **Expansión de variables:** La shell expande las variables de entorno. Por ejemplo, puedes usar `CMD echo $HOME`.
- **Comportamiento de shell:** Permite la redirección de salida, uso de tuberías (pipes), comodines, y otras características de shell.
- **Señales:** Las señales UNIX son manejadas por la shell, no por el proceso iniciado directamente, lo que puede afectar cómo se manejan las señales dentro de tu aplicación.

## Conclusión

La elección entre usar `CMD` en la forma de `exec` o en la forma de shell depende de tus necesidades específicas. Si necesitas que tu aplicación maneje señales UNIX directamente o evites la intervención de una shell por razones de seguridad o simplicidad, usa la forma de `exec`. Si necesitas la flexibilidad de una shell para la expansión de variables, redirección, y otras características, entonces la forma de shell será más apropiada.
