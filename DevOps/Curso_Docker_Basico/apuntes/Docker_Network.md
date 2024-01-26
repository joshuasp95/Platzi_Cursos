
# Redes en Docker

El sistema de redes de Docker permite que los contenedores se comuniquen entre sí y con el mundo exterior. Docker proporciona varios drivers de red para diferentes casos de uso, desde la comunicación simple entre contenedores en el mismo host hasta redes más complejas que abarcan múltiples hosts en un clúster.

## Drivers de Red en Docker

Docker soporta varios drivers de red, cada uno diseñado para un tipo específico de comportamiento de red:

- **bridge**: El driver predeterminado que se usa para contenedores que necesitan comunicarse en el mismo host.
- **host**: Para escenarios que requieren un rendimiento de red alto, elimina el aislamiento entre los contenedores y la red del host, permitiendo que los contenedores accedan directamente a la red del host.
- **overlay**: Utilizado en clústeres Docker Swarm, permite que los contenedores en diferentes hosts se comuniquen como si estuvieran en el mismo host.
- **macvlan**: Permite asignar una dirección MAC a un contenedor, haciéndolo aparecer como un dispositivo físico en la red.
- **none**: Desactiva la red para el contenedor, utilizado en casos muy específicos donde el contenedor no necesita comunicarse con otros contenedores o el host.

## Creación y Gestión de Redes

Para crear una red en Docker, se utiliza el comando `docker network create`, especificando el driver con la opción `--driver`:

```bash
docker network create --driver <driver> <nombre-de-la-red>
```

Para listar todas las redes disponibles en Docker:

```bash
docker network ls
```

Y para inspeccionar los detalles de una red específica:

```bash
docker network inspect <nombre-de-la-red>
```

## Conexión de Contenedores a Redes

Al crear un contenedor, puedes conectarlo directamente a una red existente utilizando la opción `--network`:

```bash
docker run --network <nombre-de-la-red> -d <imagen>
```

También puedes conectar o desconectar contenedores de redes existentes después de su creación:

```bash
docker network connect <nombre-de-la-red> <nombre-del-contenedor>
docker network disconnect <nombre-de-la-red> <nombre-del-contenedor>
```

## Comunicación entre Contenedores

Los contenedores dentro de la misma red pueden comunicarse usando los nombres de los contenedores como nombres de host, gracias al DNS interno de Docker. Esto simplifica la configuración de aplicaciones distribuidas.

## Publicación de Puertos

Para hacer accesible un servicio de contenedor al mundo exterior, necesitas publicar uno o más de sus puertos:

```bash
docker run -p <puerto-host>:<puerto-contenedor> -d <imagen>
```

Este comando mapea un puerto del host a un puerto del contenedor, permitiendo el acceso externo al servicio.

## Seguridad en Redes Docker

La configuración de la red debe hacerse con consideración a la seguridad. Algunas recomendaciones incluyen:

- Limitar la exposición de puertos solo a los necesarios.
- Utilizar el driver `overlay` con cifrado para aplicaciones distribuidas sobre redes no confiables.
- Evitar el uso del driver `host` a menos que sea estrictamente necesario, debido a las implicaciones de seguridad de proporcionar a los contenedores acceso directo a la red del host.


### Conexión a Redes Múltiples

Un contenedor de Docker puede estar conectado a múltiples redes simultáneamente. Al conectar tu contenedor `app` a la red `platzinet`, le permites comunicarse directamente con otros contenedores en esa red, como tu contenedor `db` de MongoDB. Esto se hace sin exponer el contenedor `db` directamente a tu red local, manteniendo un alto nivel de seguridad y aislamiento.

### Mapeo de Puertos al Host

Cuando inicias un contenedor con una opción de mapeo de puertos (por ejemplo, `-p 3000:3000`), Docker configura el enrutamiento de red necesario para que cualquier tráfico dirigido al puerto 3000 de tu máquina host se reenvíe al puerto 3000 del contenedor. Este mapeo de puertos hace que tu aplicación sea accesible desde tu red local o incluso desde internet, si así lo configuras, sin importar a qué redes internas de Docker esté conectado el contenedor.

### ¿Cómo Funciona?

Docker utiliza iptables (parte del subsistema de filtrado de paquetes del kernel de Linux) para gestionar el enrutamiento de red y el aislamiento. Cuando mapeas un puerto, Docker agrega reglas a iptables para redirigir el tráfico entrante en el puerto especificado del host al puerto correspondiente en el contenedor. Esto es independiente de la configuración de la red interna de Docker para ese contenedor.

### Beneficios de esta Configuración

1. **Aislamiento** : Tu contenedor `db` puede estar aislado de accesos no autorizados desde fuera de su red `platzinet`, reduciendo la superficie de ataque y aumentando la seguridad de la base de datos.
2. **Comunicación Segura Interna** : `app` y `db` pueden comunicarse de manera segura dentro de la red `platzinet`, asegurando que los datos sensibles no sean expuestos innecesariamente.
3. **Accesibilidad** : Al mismo tiempo, tu contenedor `app` es accesible desde tu red local o incluso desde internet, facilitando el acceso a tu aplicación mientras mantienes protegidos los componentes internos.
4. **Flexibilidad** : Esta configuración te permite configurar, probar y ajustar la comunicación interna entre contenedores en desarrollo sin afectar cómo los usuarios acceden a la aplicación desde fuera.

## Conclusión

Entender y utilizar efectivamente las redes en Docker es crucial para el despliegue seguro y eficiente de contenedores, especialmente en aplicaciones complejas y distribuidas. La elección del driver de red adecuado y una configuración cuidadosa pueden optimizar la comunicación entre contenedores y con el mundo exterior, garantizando al mismo tiempo la seguridad de la aplicación.
