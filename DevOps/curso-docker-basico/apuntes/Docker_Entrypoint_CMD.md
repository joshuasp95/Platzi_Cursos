# Uso de ENTRYPOINT y Paso de Parámetros en Docker

## Introducción

La clase se centró en el uso de `ENTRYPOINT` como una manera de configurar un contenedor que se ejecuta como un ejecutable. Se comparó con el uso de `CMD` y se mostró cómo ambos pueden trabajar juntos para permitir la flexibilidad en la ejecución de comandos dentro de contenedores Docker.

## Creación de la Imagen Docker

Se comenzó con un `Dockerfile` que especifica un comando `CMD` para ejecutar `ping` a `localhost`:

```Dockerfile
FROM ubuntu:trusty
CMD ["/bin/ping", "-c", "3", "localhost"]
```

Este `Dockerfile` se utilizó para construir una imagen llamada `ping`:

```bash
docker build -t ping .
```

Al ejecutar un contenedor usando esta imagen, se realizó un `ping` a `localhost`:

```bash
docker run --name pinger ping
```

## Modificación a ENTRYPOINT

Luego, se modificó el `Dockerfile` para usar `ENTRYPOINT` en lugar de `CMD`, permitiendo el paso de parámetros al contenedor:

```Dockerfile
FROM ubuntu:trusty
ENTRYPOINT ["/bin/ping", "-c", "3"]
CMD ["localhost"]
```

Con esta configuración, el `ENTRYPOINT` especifica el comando a ejecutar (`ping`), y `CMD` proporciona los parámetros por defecto. Sin embargo, los parámetros de `CMD` pueden ser sobrescritos al ejecutar el contenedor:

```bash
docker run --name pinger ping google.es
```

En este caso, `google.es` reemplaza el parámetro por defecto (`localhost`), demostrando cómo se pueden pasar parámetros al contenedor.

## Ventajas de Usar ENTRYPOINT

- **Comportamiento Ejecutable:** Configura el contenedor para ejecutarse como un ejecutable, permitiendo que el contenedor se use como si fuera el comando `ping` directamente.
- **Flexibilidad:** Permite a los usuarios pasar parámetros adicionales al comando definido en `ENTRYPOINT` sin tener que especificar el comando completo.
- **Claridad:** Especifica claramente el propósito del contenedor y el comando principal que se ejecutará.

## Limpieza

Para limpiar los contenedores e imágenes utilizados durante la clase, se utilizaron los siguientes comandos:

```bash
docker rm -f pinger
docker rmi ping
```

## Conclusión

La clase demostró cómo `ENTRYPOINT` y `CMD` pueden usarse juntos para crear imágenes de contenedores que son flexibles y fáciles de usar, permitiendo a los usuarios pasar parámetros al contenedor de manera intuitiva. Esta técnica es especialmente útil para crear imágenes de contenedores que sirven como "wrappers" para herramientas de línea de comandos o aplicaciones.

