# 📚 Repositorio de Cursos - Platzi

<div align="center">

![Platzi](https://img.shields.io/badge/Platzi-98CA3F?style=for-the-badge&logo=platzi&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

</div>

## 📖 Tabla de Contenidos

- [� Repositorio de Cursos - Platzi](#-repositorio-de-cursos---platzi)
  - [📖 Tabla de Contenidos](#-tabla-de-contenidos)
  - [🚀 Configuración Inicial](#-configuración-inicial)
    - [Prerrequisitos](#prerrequisitos)
    - [Instalación](#instalación)
  - [📁 Estructura del Repositorio](#-estructura-del-repositorio)
  - [💻 Rutas de Aprendizaje](#-rutas-de-aprendizaje)
    - [☕ Backend Java](#-backend-java)
    - [🐍 Backend Python](#-backend-python)
    - [🗄️ Bases de Datos](#️-bases-de-datos)
    - [🌐 Full Stack JavaScript](#-full-stack-javascript)
    - [📊 Data Analyst](#-data-analyst)
    - [🚀 DevOps](#-devops)
    - [🅰️ Angular](#️-angular)
  - [🔒 Seguridad](#-seguridad)
    - [Medidas Implementadas](#medidas-implementadas)
    - [Buenas Prácticas de Seguridad](#buenas-prácticas-de-seguridad)
  - [🛠️ Herramientas y Scripts](#️-herramientas-y-scripts)
    - [Scripts Disponibles](#scripts-disponibles)
    - [Comandos Útiles](#comandos-útiles)
  - [📚 Recursos Adicionales](#-recursos-adicionales)
    - [Enlaces Útiles](#enlaces-útiles)
    - [Herramientas Recomendadas](#herramientas-recomendadas)
  - [🤝 Contribuciones](#-contribuciones)
    - [Para uso personal:](#para-uso-personal)
  - [📝 Licencia](#-licencia)
  - [👤 Autor](#-autor)
    - [⭐ Si encuentras útil este repositorio, considera darle una estrella](#-si-encuentras-útil-este-repositorio-considera-darle-una-estrella)

## 🚀 Configuración Inicial

### Prerrequisitos

- **Git** 2.x o superior
- **Node.js** 16.x o superior (para proyectos JavaScript)
- **Python** 3.8 o superior (para proyectos Python)
- **Java** 11 o superior (para proyectos Java)
- **Docker** (opcional, para contenedores)
- **PostgreSQL** / **MySQL** (para bases de datos)

### Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/platzi-cursos.git
   cd platzi-cursos
   ```

2. **Configurar variables de entorno:**
   ```bash
   cp .env.example .env
   # Editar .env con tus credenciales reales
   ```

3. **Verificar seguridad del repositorio:**
   ```bash
   python utils/security-check.py
   ```

## 📁 Estructura del Repositorio

```
platzi-cursos/
│
├── 📂 backend-java/               # Cursos de Backend con Java
│   ├── curso-java-oop/            # Programación Orientada a Objetos
│   ├── curso-java-spring/         # Spring Framework
│   ├── curso-spring-data-jpa/     # Spring Data JPA
│   ├── curso-testing/             # Testing con JUnit y Mockito
│   ├── java-se-persistencia-datos/       # Persistencia de Datos
│   └── java-se-persistencia-datos-api/   # API REST con persistencia
│
├── 📂 backend-python/              # Cursos de Backend con Python
│   ├── curso-fundamentos-python/  # Fundamentos de Python
│   ├── comprehensions-funciones-errores/  # Python Avanzado
│   ├── curso-python-pip-y-entornos-virtuales/  # PIP y Entornos
│   ├── oop-python-y-algoritmos/   # POO y Algoritmos
│   ├── platzi-django/             # Framework Django
│   └── platzi-fastapi/            # FastAPI
│
├── 📂 bbdd/                       # Cursos de Bases de Datos
│   ├── curso-introduccion-bbdd/   # Introducción a BBDD
│   ├── bbdd-mysql-y-mariadb/     # MySQL y MariaDB
│   ├── curso-postgresql/          # PostgreSQL
│   └── curso-practico-sql/        # SQL Práctico
│
├── 📂 full-stack-developer-js/    # Ruta Full Stack JavaScript
│   ├── curso-basico-js/           # JavaScript Básico
│   ├── curso-practico-js/         # JavaScript Práctico
│   ├── ecmascript/                # ECMAScript 6+
│   ├── frontend-developer/        # Frontend Development
│   └── frontend-developer-practico/  # Frontend Práctico
│
├── 📂 data-analyst/               # Ruta de Data Analyst
│   ├── data-science-python/       # Data Science con Python
│   └── manipulacion-transformacion-datos-python/  # ETL con Python
│
├── 📂 devops/                     # Cursos de DevOps
│   └── curso-docker-basico/       # Docker Básico
│
├── 📂 curso-angular-basico/       # Angular Framework
│   └── my-store/                  # Proyecto de tienda online
│
├── 📂 fundamentos-js/             # Fundamentos de JavaScript
│   └── fundamentos-javascript/    # Conceptos básicos
│
├── 📂 utils/                      # Scripts y utilidades
│   └── security-check.py          # Verificador de seguridad
│
├── 📄 .env.example                # Plantilla de variables de entorno
├── 📄 .gitignore                  # Archivos ignorados por Git
└── 📄 README.md                   # Este archivo
```

## 💻 Rutas de Aprendizaje

### ☕ Backend Java

Desarrollo backend empresarial con Java y Spring Framework.

| Curso | Descripción | Tecnologías | Estado |
|-------|-------------|-------------|--------|
| [Java OOP](./backend-java/curso-java-oop/) | Programación Orientada a Objetos con Java | Java 11+, Maven | ✅ Completo |
| [Spring Framework](./backend-java/curso-java-spring/) | API REST con Spring Boot | Spring Boot 2.7, Gradle | ✅ Completo |
| [Spring Data JPA](./backend-java/curso-spring-data-jpa/) | Persistencia con JPA y Hibernate | JPA, Hibernate, H2 | ✅ Completo |
| [Testing Java](./backend-java/curso-testing/) | Pruebas unitarias e integración | JUnit 5, Mockito | ✅ Completo |
| [Persistencia de Datos](./backend-java/java-se-persistencia-datos/) | JDBC y conexiones a BD | JDBC, MySQL | ✅ Completo |

**Proyecto destacado:** [Platzi Market](./backend-java/curso-java-spring/platzi-market/) - E-commerce API REST

### 🐍 Backend Python

Desarrollo backend moderno con Python y sus frameworks.

| Curso | Descripción | Tecnologías | Estado |
|-------|-------------|-------------|--------|
| [Fundamentos Python](./backend-python/curso-fundamentos-python/) | Bases del lenguaje | Python 3.8+ | ✅ Completo |
| [Python Avanzado](./backend-python/comprehensions-funciones-errores/) | Comprehensions y manejo de errores | Python 3.8+ | ✅ Completo |
| [PIP y Entornos](./backend-python/curso-python-pip-y-entornos-virtuales/) | Gestión de dependencias | pip, venv | ✅ Completo |
| [POO y Algoritmos](./backend-python/oop-python-y-algoritmos/) | POO y estructuras de datos | Python 3.8+ | ✅ Completo |
| [Django](./backend-python/platzi-django/) | Framework web completo | Django 4.0+ | 🚧 En progreso |
| [FastAPI](./backend-python/platzi-fastapi/) | API REST moderna y rápida | FastAPI, Pydantic | 🚧 En progreso |

**Proyecto destacado:** [Premios Platzi App](./backend-python/platzi-django/) - Sistema de votación con Django

### 🗄️ Bases de Datos

Gestión y diseño de bases de datos relacionales.

| Curso | Descripción | Tecnologías | Estado |
|-------|-------------|-------------|--------|
| [Introducción BBDD](./bbdd/curso-introduccion-bbdd/) | Fundamentos y modelado | SQL, ERD | ✅ Completo |
| [MySQL y MariaDB](./bbdd/bbdd-mysql-y-mariadb/) | Administración y optimización | MySQL 8.0 | ✅ Completo |
| [PostgreSQL](./bbdd/curso-postgresql/) | Base de datos avanzada | PostgreSQL 14 | ✅ Completo |
| [SQL Práctico](./bbdd/curso-practico-sql/) | Consultas complejas y optimización | SQL | ✅ Completo |

### 🌐 Full Stack JavaScript

Desarrollo web completo con JavaScript moderno.

| Curso | Descripción | Tecnologías | Estado |
|-------|-------------|-------------|--------|
| [JavaScript Básico](./full-stack-developer-js/curso-basico-js/) | Fundamentos del lenguaje | ES6+ | ✅ Completo |
| [JavaScript Práctico](./full-stack-developer-js/curso-practico-js/) | Proyectos prácticos | DOM, APIs | ✅ Completo |
| [ECMAScript](./full-stack-developer-js/ecmascript/) | Características modernas | ES2015-ES2022 | ✅ Completo |
| [Frontend Developer](./full-stack-developer-js/frontend-developer/) | HTML, CSS y JS | HTML5, CSS3 | ✅ Completo |

### 📊 Data Analyst

Análisis de datos y visualización.

| Curso | Descripción | Tecnologías | Estado |
|-------|-------------|-------------|--------|
| [Data Science Python](./data-analyst/data-science-python/) | Análisis con Python | Pandas, NumPy | ✅ Completo |
| [ETL con Python](./data-analyst/manipulacion-transformacion-datos-python/) | Transformación de datos | Pandas, SQL | ✅ Completo |

### 🚀 DevOps

Prácticas y herramientas DevOps.

| Curso | Descripción | Tecnologías | Estado |
|-------|-------------|-------------|--------|
| [Docker Básico](./devops/curso-docker-basico/) | Contenedores y microservicios | Docker, Docker Compose | ✅ Completo |

### 🅰️ Angular

Desarrollo de aplicaciones SPA con Angular.

| Curso | Descripción | Tecnologías | Estado |
|-------|-------------|-------------|--------|
| [Angular Básico](./curso-angular-basico/) | Fundamentos del framework | Angular 14+, TypeScript | 🚧 En progreso |

## 🔒 Seguridad

### Medidas Implementadas

| Medida | Descripción | Estado |
|--------|-------------|--------|
| Variables de entorno | Todas las credenciales usan `.env` | ✅ Implementado |
| `.gitignore` actualizado | Excluye archivos sensibles | ✅ Implementado |
| Script de verificación | `security-check.py` para auditorías | ✅ Implementado |
| Sin hardcoding | Credenciales removidas del código | ✅ Implementado |

### Buenas Prácticas de Seguridad

1. **Antes de cada commit:**
   ```bash
   python utils/security-check.py
   git status
   git diff --staged
   ```

2. **Configuración de variables de entorno:**
   ```bash
   # Ejemplo de .env
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña_segura
   API_KEY=tu_api_key
   ```

3. **Si expones accidentalmente credenciales:**
   - Regenera inmediatamente las credenciales
   - Elimina el commit del historial
   - Notifica a los servicios afectados

## 🛠️ Herramientas y Scripts

### Scripts Disponibles

| Script | Descripción | Uso |
|--------|-------------|-----|
| `security-check.py` | Verifica credenciales expuestas | `python utils/security-check.py` |

### Comandos Útiles

```bash
# Verificar seguridad
python utils/security-check.py

# Buscar archivos grandes
find . -type f -size +50M

# Limpiar archivos temporales
find . -name "*.pyc" -delete
find . -name "__pycache__" -type d -delete
find . -name "node_modules" -type d -prune -exec rm -rf {} +
```

## 📚 Recursos Adicionales

### Enlaces Útiles

- 🎓 [Platzi](https://platzi.com) - Plataforma de educación online
- 📖 [Documentación Java](https://docs.oracle.com/javase/8/docs/)
- 📖 [Documentación Python](https://docs.python.org/3/)
- 📖 [MDN Web Docs](https://developer.mozilla.org/)
- 📖 [Spring Documentation](https://spring.io/guides)
- 📖 [Django Documentation](https://docs.djangoproject.com/)
- 📖 [FastAPI Documentation](https://fastapi.tiangolo.com/)

### Herramientas Recomendadas

- **IDEs:** IntelliJ IDEA, PyCharm, VS Code
- **Base de Datos:** DBeaver, pgAdmin, MySQL Workbench
- **API Testing:** Postman, Insomnia
- **Version Control:** Git, GitHub Desktop
- **Contenedores:** Docker Desktop

## 🤝 Contribuciones

Este repositorio es de uso personal para documentar mi progreso en los cursos de Platzi. No se aceptan contribuciones externas.

### Para uso personal:

1. Mantén el código limpio y documentado
2. Sigue las convenciones de cada lenguaje
3. Actualiza la documentación al agregar nuevos cursos
4. Ejecuta el script de seguridad antes de cada push

## 📝 Licencia

Este proyecto es de uso educativo personal. Los cursos y contenidos originales pertenecen a [Platzi](https://platzi.com).

El código desarrollado durante los cursos está disponible para referencia y aprendizaje.

## 👤 Autor

**Joshua Sainz**

- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)

---

<div align="center">

### ⭐ Si encuentras útil este repositorio, considera darle una estrella

Hecho con ❤️ mientras aprendo en [Platzi](https://platzi.com)

</div>