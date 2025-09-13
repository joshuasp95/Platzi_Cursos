# Tutorial de Introducción al Framework Spring

## Tabla de Contenidos
1. [Introducción](#introducción)
2. [¿Qué es Spring Framework?](#qué-es-spring-framework)
3. [Características principales de Spring](#características-principales-de-spring)
4. [Instalación y configuración](#instalación-y-configuración)
5. [Hola Mundo con Spring](#hola-mundo-con-spring)
6. [Inyección de dependencias](#inyección-de-dependencias)
7. [Spring Boot](#spring-boot)
8. [Conclusión](#conclusión)
9. [Referencias](#referencias)

## Introducción
Este tutorial está diseñado para aquellos que tienen un conocimiento básico de Java y desean aprender a utilizar el Framework Spring.

## ¿Qué es Spring Framework?
Spring es un framework de código abierto para el desarrollo de aplicaciones en Java. En un nivel alto, Spring es un marco de infraestructura que proporciona la forma de desarrollar aplicaciones Java de una manera rápida, flexible y mantenible.

Spring ofrece soporte de infraestructura para desarrollar aplicaciones Java, que se puede usar en cualquier tipo de capa de implementación, como, por ejemplo, programación orientada a aspectos, manejo de transacciones, gestión de seguridad, etc.

## Características principales de Spring
Las características principales de Spring son las siguientes:

1. **Inversión de control (IoC):** Spring se encarga de la creación y gestión de objetos. Esto se hace a través de la inyección de dependencias.

2. **Programación orientada a aspectos (AOP):** Spring soporta características de programación orientada a aspectos, lo que permite a los programadores agregar funcionalidades de corte transversal como la seguridad y la auditoría.

3. **Integración con otras tecnologías:** Spring se integra bien con casi todas las tecnologías Java existentes, incluyendo ORM, JDBC, JEE, JMS, etc.

4. **Soporte de transacciones:** Spring proporciona un marco de trabajo unificado para el manejo de transacciones.

5. **Soporte MVC:** Spring viene con un marco MVC que es separable y puede ser usado para desarrollar aplicaciones web flexibles.

## Instalación y configuración
Para comenzar a trabajar con Spring, necesitarás instalar y configurar lo siguiente en tu máquina:

1. Java JDK
2. Un IDE como Eclipse o IntelliJ IDEA
3. Maven o Gradle para la gestión de dependencias
4. Spring Framework

## Hola Mundo con Spring
A continuación, vamos a crear una aplicación simple de "Hola Mundo" con Spring Framework.

1. **Crear un nuevo proyecto Maven.** En tu IDE, crea un nuevo proyecto Maven y añade la siguiente dependencia al archivo `pom.xml`:

    ```xml
    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>5.3.8</version>
        </dependency>
    </dependencies>
    ```

2. **Crear la clase de mensaje.** Crea una nueva clase Java llamada `Message`:

    ```java
    public class Message {
        private String message;

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }
    }
    ```

3. **Crear

un archivo de configuración de Spring.** Crea un archivo XML llamado `spring-config.xml` en el directorio de recursos:

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <beans xmlns="http://www.springframework.org/schema/beans"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">
        
        <bean id="message" class="com.example.Message">
            <property name="message" value="¡Hola Mundo!"/>
        </bean>
        
    </beans>
    ```

4. **Crear la clase principal.** Finalmente, crea una clase principal para ejecutar la aplicación:

    ```java
    import org.springframework.context.ApplicationContext;
    import org.springframework.context.support.ClassPathXmlApplicationContext;

    public class Main {
        public static void main(String[] args) {
            ApplicationContext context = new ClassPathXmlApplicationContext("spring-config.xml");
            Message message = (Message) context.getBean("message");
            System.out.println(message.getMessage());
        }
    }
    ```

## Inyección de dependencias
La inyección de dependencias (DI) es un patrón de diseño en el que los objetos reciben sus dependencias en lugar de crearlas ellos mismos. Spring Framework utiliza DI en gran medida y lo hace principalmente de dos maneras: a través de constructores y de métodos setter.

## Spring Boot
Spring Boot es un proyecto que se basa en el Spring Framework y simplifica aún más el proceso de creación y configuración de aplicaciones Spring. Con Spring Boot, puedes crear aplicaciones Spring independientes con poco o ningún código de configuración.

## Conclusión
Spring es un poderoso framework que simplifica muchos aspectos del desarrollo de aplicaciones Java. Este tutorial sólo ha arañado la superficie de lo que puedes hacer con Spring, pero esperamos que te haya dado una buena introducción al framework.

## Referencias
1. [Spring Framework Documentation](https://docs.spring.io/spring-framework/docs/current/reference/html/)
2. [Spring Boot Documentation](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/)
