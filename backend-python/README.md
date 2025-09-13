# 🐍 Backend Python - Cursos de Platzi

Esta carpeta contiene todos los proyectos y ejercicios relacionados con el desarrollo backend en Python, desde fundamentos hasta frameworks avanzados.

## 📚 Cursos Incluidos

### 1. [Curso Fundamentos Python](./curso-fundamentos-python/)
**Bases del lenguaje Python**
- Variables y tipos de datos
- Estructuras de control
- Funciones
- Módulos y paquetes
- Manejo de archivos

### 2. [Comprehensions, Funciones y Errores](./comprehensions-funciones-errores/)
**Python Avanzado**
- List, dict y set comprehensions
- Funciones lambda
- High order functions
- Manejo de errores y excepciones
- Decoradores

### 3. [Curso Python PIP y Entornos Virtuales](./curso-python-pip-y-entornos-virtuales/)
**Gestión de dependencias**
- Instalación y uso de PIP
- Creación de entornos virtuales (venv)
- requirements.txt
- Buenas prácticas de desarrollo

### 4. [OOP Python y Algoritmos](./oop-python-y-algoritmos/)
**Programación Orientada a Objetos y Algoritmos**
- Clases y objetos en Python
- Herencia y polimorfismo
- Algoritmos de búsqueda y ordenamiento
- Complejidad algorítmica
- Estructuras de datos

### 5. [Platzi Django](./platzi-django/)
**Framework Django**
- MVT (Model-View-Template)
- ORM de Django
- Sistema de autenticación
- Django Admin
- Test Driven Development
- **Proyecto:** PremiosPlatziApp - Sistema de votación

### 6. [Platzi FastAPI](./platzi-fastapi/)
**API REST con FastAPI**
- Creación de APIs modernas
- Validación con Pydantic
- Documentación automática (Swagger)
- Autenticación JWT
- Async/await
- **Proyecto:** API de gestión de usuarios y productos

## 🛠️ Tecnologías Utilizadas

- **Python:** 3.8+
- **Frameworks:** Django 4.0+, FastAPI
- **ORMs:** Django ORM, SQLAlchemy
- **Bases de Datos:** SQLite, PostgreSQL
- **Testing:** pytest, unittest
- **Otros:** Pydantic, JWT, uvicorn

## 🚀 Configuración General

### Prerrequisitos
```bash
# Python 3.8 o superior
python --version

# PIP
pip --version

# Virtualenv (recomendado)
pip install virtualenv
```

### Crear entorno virtual
```bash
# Crear entorno
python -m venv venv

# Activar en Windows
venv\Scripts\activate

# Activar en Linux/Mac
source venv/bin/activate
```

### Variables de Entorno
Crea un archivo `.env` en cada proyecto:
```env
# Django
SECRET_KEY=tu_secret_key_django
DEBUG=True
DATABASE_URL=sqlite:///db.sqlite3

# FastAPI
DATABASE_URL=postgresql://user:password@localhost/dbname
JWT_SECRET_KEY=tu_jwt_secret
```

## 📦 Proyectos Destacados

### PremiosPlatziApp (Django)
```bash
cd platzi-django/premiosplatziapp
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
Sistema de votación con preguntas y respuestas, desarrollado con TDD.

### API Project (FastAPI)
```bash
cd platzi-fastapi/api_project
pip install -r requirements.txt
uvicorn main:app --reload
```
API REST moderna con documentación automática en `/docs`.

## 📝 Estructura de Proyectos

### Django Project Structure
```
platzi-django/
├── manage.py
├── project/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── apps/
│   └── polls/
│       ├── models.py
│       ├── views.py
│       ├── urls.py
│       └── tests.py
└── requirements.txt
```

### FastAPI Project Structure
```
platzi-fastapi/
├── main.py
├── models/
├── schemas/
├── routers/
├── database.py
└── requirements.txt
```

## 🧪 Testing

### Ejecutar tests en Django
```bash
python manage.py test
```

### Ejecutar tests en FastAPI
```bash
pytest
```

## 📚 Recursos de Aprendizaje

### Conceptos Clave Aprendidos
- **Comprehensions:** Forma pythónica de crear listas, diccionarios y sets
- **Decoradores:** Funciones que modifican el comportamiento de otras funciones
- **Async/Await:** Programación asíncrona en Python
- **ORM:** Object-Relational Mapping para bases de datos
- **TDD:** Test Driven Development

## 🔗 Enlaces Útiles

- [Python Documentation](https://docs.python.org/3/)
- [Django Documentation](https://docs.djangoproject.com/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Real Python](https://realpython.com/)
- [Python Package Index (PyPI)](https://pypi.org/)

## 🎯 Próximos Pasos

- [ ] Completar proyecto Django con despliegue
- [ ] Implementar microservicios con FastAPI
- [ ] Explorar Celery para tareas asíncronas
- [ ] Aprender Flask como alternativa

---

⬅️ [Volver al README principal](../README.md)