# ☕ Backend Java - Cursos de Platzi

Esta carpeta contiene todos los proyectos y ejercicios relacionados con el desarrollo backend en Java, incluyendo Spring Framework, persistencia de datos y testing.

## 📚 Cursos Incluidos

### 1. [Curso Java OOP](./curso-java-oop/)
**Programación Orientada a Objetos con Java**
- Clases y objetos
- Herencia y polimorfismo
- Interfaces y clases abstractas
- Modularidad
- Collections Framework
- **Proyecto:** Sistema de gestión médica (MyMedicalApp)

### 2. [Curso Java Spring](./curso-java-spring/)
**Spring Framework y Spring Boot**
- Arquitectura de aplicaciones Spring
- Inyección de dependencias
- API REST con Spring Boot
- Spring Data JPA
- MapStruct para mapeo de objetos
- **Proyecto:** Platzi Market - E-commerce API REST

### 3. [Curso Spring Data JPA](./curso-spring-data-jpa/)
**Persistencia avanzada con JPA**
- Entidades y relaciones
- Query methods
- Paginación y ordenamiento
- Transacciones
- Auditoría de entidades
- **Proyecto:** Platzi Pizzería - Sistema de gestión de pizzería

### 4. [Curso Testing](./curso-testing/)
**Testing en Java**
- JUnit 5
- Mockito
- Test Driven Development (TDD)
- Pruebas de integración
- **Proyecto:** Sistema de películas con tests

### 5. [Java SE Persistencia de Datos](./java-se-persistencia-datos/)
**JDBC y conexiones a bases de datos**
- Conexión con MySQL
- CRUD con JDBC
- Patrón DAO
- **Proyecto:** Sistema de mensajes

### 6. [Java SE Persistencia de Datos API](./java-se-persistencia-datos-api/)
**API REST con persistencia**
- Consumo de APIs externas
- Creación de API REST
- Persistencia de datos

## 🛠️ Tecnologías Utilizadas

- **Java:** 11, 17
- **Spring Boot:** 2.7.x, 3.x
- **Build Tools:** Maven, Gradle
- **Bases de Datos:** MySQL, PostgreSQL, H2
- **Testing:** JUnit 5, Mockito
- **Otros:** MapStruct, Lombok, Spring Data JPA

## 🚀 Configuración General

### Prerrequisitos
```bash
# Java 11 o superior
java -version

# Maven
mvn -version

# Gradle (opcional)
gradle -version
```

### Variables de Entorno
Copia el archivo `.env.example` en la raíz del repositorio y configura:
```env
# Base de datos MySQL
DB_URL=jdbc:mysql://localhost:3306/
DB_NAME=tu_base_de_datos
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña

# Base de datos PostgreSQL
POSTGRES_URL=jdbc:postgresql://localhost:5432/tu_db
POSTGRES_USER=tu_usuario
POSTGRES_PASSWORD=tu_contraseña
```

## 📦 Proyectos Destacados

### Platzi Market (Spring Boot)
```bash
cd curso-java-spring/platzi-market
./gradlew bootRun
```
API REST completa para e-commerce con categorías, productos y órdenes.

### Platzi Pizzería (Spring Data JPA)
```bash
cd curso-spring-data-jpa/platzi-pizzeria
./gradlew bootRun
```
Sistema de gestión con auditoría, procedimientos almacenados y transacciones.

### MyMedicalApp (Java OOP)
```bash
cd curso-java-oop/myMedicalApp
mvn clean install
mvn exec:java
```
Aplicación de gestión médica aplicando conceptos de POO.

## 📝 Notas de Aprendizaje

- Cada carpeta de curso contiene su propia documentación y apuntes
- Los proyectos incluyen archivos de configuración de ejemplo
- Se han removido todas las credenciales hardcodeadas por seguridad

## 🔗 Enlaces Útiles

- [Spring Initializr](https://start.spring.io/)
- [Spring Guides](https://spring.io/guides)
- [Baeldung Java](https://www.baeldung.com/)
- [Java Documentation](https://docs.oracle.com/en/java/)

---

⬅️ [Volver al README principal](../README.md)