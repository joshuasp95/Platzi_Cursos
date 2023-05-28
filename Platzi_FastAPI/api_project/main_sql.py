from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from config.database import engine, Base
from middlewares.error_handler import ErrorHandler
from routers.movie import movie_router
from routers.user import user_router

# Crear una instancia de FastAPI
app = FastAPI(title="Fast API Project", version="0.0.1")
app.add_middleware(ErrorHandler)
app.include_router(movie_router)
app.include_router(user_router)

# Crear las tablas en la base de datos si no existen
Base.metadata.create_all(bind=engine)


# Datos de ejemplo para las películas
movies = [
    {
        'id': 1,
        'title': 'Avatar',
        'overview': "En un exhuberante planeta llamado Pandora viven los Na'vi, seres que ...",
        'year': '2009',
        'rating': 7.8,
        'category': 'Acción'
    },
    {
        'id': 2,
        'title': 'The Godfather',
        'overview': "El poderoso patriarca de una familia de la mafia italoamericana...",
        'year': '1972',
        'rating': 9.2,
        'category': 'Drama'
    },
    {
        'id': 3,
        'title': 'The Shawshank Redemption',
        'overview': "Andy Dufresne es un banquero joven y exitoso cuya vida toma...",
        'year': '1994',
        'rating': 9.3,
        'category': 'Drama'
    },
    {
        'id': 4,
        'title': 'Inception',
        'overview': "Dom Cobb es un ladrón hábil, el mejor en el peligroso arte...",
        'year': '2010',
        'rating': 8.8,
        'category': 'Acción'
    },
    {
        'id': 5,
        'title': 'Forrest Gump',
        'overview': "Forrest Gump, un hombre con un coeficiente intelectual de 75...",
        'year': '1994',
        'rating': 8.8,
        'category': 'Drama'
    }
]


# Endpoint para la página principal de la aplicación
@app.get('/', tags=['home'])
def message():
    return HTMLResponse("<h2>Fast API Project</h2><h3>Learning Backend with Python")
