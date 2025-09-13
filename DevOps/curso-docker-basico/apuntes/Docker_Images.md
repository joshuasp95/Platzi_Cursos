## Imágenes en Docker

Las imágenes en Docker son como **plantillas o moldes** que se utilizan para crear contenedores. Imagina una imagen como un **"plan"** que describe cómo debe ser un contenedor. Cuando creas un contenedor a partir de una imagen, obtienes una instancia en ejecución de esa imagen.

### ¿Qué contiene una imagen?

- **Sistema Operativo Base**: Cada imagen se basa en un sistema operativo, como Linux o Windows.

- **Aplicaciones y Bibliotecas**: La imagen incluye las aplicaciones y bibliotecas necesarias para ejecutar una aplicación específica.

- **Configuración**: Puede contener configuraciones predefinidas, variables de entorno y otros ajustes que se utilizarán cuando se cree un contenedor.

### ¿Cómo se crea una imagen?

1. **Dockerfile**: Para crear una imagen, se utiliza un archivo llamado **"Dockerfile"**. Este archivo contiene instrucciones sobre cómo construir la imagen, como qué sistema operativo usar, qué aplicaciones instalar y cómo configurarlas.

2. **Construcción de la Imagen**: Cuando ejecutas el comando `docker build`, Docker sigue las instrucciones del Dockerfile y crea una imagen a partir de esas instrucciones.

### ¿Cómo se utiliza una imagen?

1. **Descarga**: Antes de poder utilizar una imagen, debes descargarla desde un registro de Docker, como Docker Hub. Esto se hace con el comando `docker pull`. Las imágenes descargadas se almacenan en tu sistema para su uso posterior.

2. **Creación de Contenedores**: Para crear un contenedor a partir de una imagen, usas el comando `docker run`. Esto toma la imagen y crea un contenedor en base a esa imagen.

### Ejemplo Visual

```
+----------------+       +-------------------------+       +----------------------+
|   Dockerfile   |  -->  | Construcción de Imagen  |  -->  |       Imagen         |
+----------------+       +-------------------------+       +----------------------+
                                                       /         |         \
                                                      /          |          \
                                                 Descarga    Creación de   Creación de
                                                 de Imagen    Contenedor    Contenedor
                                                   (pull)       (run)         (run)
```

### Resumen

En resumen, las imágenes en Docker son plantillas que describen cómo se debe crear un contenedor. Se basan en un sistema operativo y contienen aplicaciones, bibliotecas y configuraciones necesarias. Puedes crear imágenes personalizadas utilizando Dockerfiles y compartirlas a través de registros públicos como Docker Hub. Las imágenes son la base para crear contenedores, que son las unidades en ejecución que alojan aplicaciones y servicios.
