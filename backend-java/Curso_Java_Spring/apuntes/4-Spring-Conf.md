# Spring Framework - Configuración y Características

## Perfiles en Spring

Los perfiles en Spring ofrecen una forma de segmentar partes de la configuración de la aplicación y hacerla disponible solo en ciertos entornos. Los perfiles pueden ser utilizados para cambiar comportamientos en aplicaciones en base al entorno en el que se ejecutan.

Por ejemplo, puedes definir perfiles para diferentes entornos, como `development`, `testing`, `production`, etc.

Para especificar qué perfil debe ser activado, puedes usar la propiedad de configuración `spring.profiles.active` en tu `application.properties` o `application.yml`.

Ejemplo en `application.properties`:

```properties
spring.profiles.active=development
```

También puedes definir valores específicos de propiedad para diferentes perfiles. Por ejemplo, si tienes una base de datos diferente para tus entornos de desarrollo y producción, podrías hacer algo como esto:

`application-development.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost/devDb
```

`application-production.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost/prodDb
```

## application.properties vs application.yml

En Spring, la configuración de la aplicación se puede hacer utilizando archivos `application.properties` o `application.yml`. Ambos sirven al mismo propósito, pero tienen diferentes sintaxis y estructuras.

El archivo `application.properties` usa el formato `.properties` estándar de Java:

```properties
spring.datasource.url=jdbc:mysql://localhost/testDb
spring.datasource.username=root
spring.datasource.password=secret
```

El archivo `application.yml` utiliza el formato YAML, que es más legible y ofrece una mejor estructuración de los datos:

```yml
spring:
  datasource:
    url: jdbc:mysql://localhost/testDb
    username: root
    password: secret
```

## Características Principales de Spring

1. **Inversión de Control (IoC):** Spring maneja la creación y gestión de objetos. Estos objetos, conocidos como beans, se crean mediante metadatos de configuración que suministras a Spring.
2. **Inyección de Dependencias (DI):** Spring promueve la inyección de dependencias a través de beans. Esto significa que puedes declarar todas las dependencias de tus objetos en un archivo de configuración de Spring y Spring se encargará de conectarlos todos.
3. **Configuración Declarativa:** Spring soporta la configuración declarativa para servicios y aplicaciones.
4. **Aspectos:** Spring soporta la programación orientada a aspectos (AOP), lo que permite una clara separación de funcionalidades y permite a los desarrolladores añadir funcionalidades de corte transversal de una forma muy fácil.
5. **Spring MVC:** El framework Spring MVC proporciona un modelo de programación claro, flexible y bien diseñado para construir aplicaciones web robustas.


# Configuración de Puertos en Spring

Spring Boot utiliza el puerto `8080` por defecto para las aplicaciones web. Pero puedes personalizar el puerto en el que se ejecuta la aplicación utilizando el archivo de configuración `application.properties` o `application.yml`.

## application.properties

```properties
server.port=9090
```

En este ejemplo, hemos cambiado el puerto a `9090`.

## application.yml

```yml
server:
  port: 9090
```

Aquí también hemos cambiado el puerto a `9090`, pero utilizando el formato de archivo YAML.

Recuerda que si tienes varias aplicaciones Spring Boot corriendo en el mismo sistema, cada una debe estar configurada para usar un puerto diferente.

Además, asegúrate de que el puerto que elijas no esté siendo utilizado por otro servicio. En general, es buena idea utilizar puertos en el rango de `1024` a `49151`, ya que los puertos de `0` a `1023` están reservados para servicios bien conocidos (como HTTP en el puerto `80`, HTTPS en el puerto `443`, etc.) y los puertos de `49152` a `65535` están reservados para uso privado o dinámico.



# Configuraciones Relevantes de Spring en application.properties

Spring Boot ofrece una gran cantidad de propiedades de configuración para personalizar tu aplicación. Aquí te presento algunas de las más comunes y relevantes.

## 1. Configuración del servidor

```properties
server.port=9090
```

Establece el puerto en el que se ejecutará la aplicación. El valor predeterminado es `8080`.

## 2. Context Path

```properties
server.servlet.context-path=/api
```

Establece el contexto de la aplicación. Esto será la parte inicial de la URL después del nombre de host y el número de puerto.

## 3. Configuración de la base de datos

```properties
spring.datasource.url=jdbc:mysql://localhost/test
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
```

Estas propiedades te permiten configurar los detalles de conexión a tu base de datos. Necesitarás proporcionar la URL de la base de datos, las credenciales de inicio de sesión y la clase del controlador JDBC.

## 4. Configuración de JPA

```properties
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

`spring.jpa.hibernate.ddl-auto` controla la generación automática de esquemas en la base de datos. `spring.jpa.show-sql` habilita la visualización de consultas SQL en la consola.

## 5. Configuración de logging

```properties
logging.level.org.springframework.web=DEBUG
logging.level.org.hibernate=ERROR
```

Estas propiedades controlan el nivel de registro de diferentes paquetes en tu aplicación. Los niveles de registro incluyen `TRACE`, `DEBUG`, `INFO`, `WARN`, `ERROR` y `OFF`.

## 6. Configuración del tiempo de sesión

```properties
server.servlet.session.timeout=30m
```

Esta propiedad establece el tiempo de inactividad máximo de la sesión, después del cual se terminará la sesión.

Estas son solo algunas de las propiedades disponibles en Spring Boot. Puedes encontrar una lista más completa en la documentación oficial de Spring Boot.

Recuerda que todas estas propiedades se pueden sobrescribir en tiempo de ejecución utilizando argumentos de línea de comando, por ejemplo:

```bash
./mvnw spring-boot:run -Dspring-boot.run.arguments=--server.port=9091
```

Esto iniciará la aplicación en el puerto `9091` en lugar del puerto configurado en `application.properties`.
