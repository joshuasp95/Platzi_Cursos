from fastapi import FastAPI, Body, Path, Query
from fastapi.responses import HTMLResponse
from pydantic import BaseModel, Field
from typing import Optional

app = FastAPI(title="Fast API Project", version="0.0.1")


class Movie(BaseModel):
    id: Optional[int] = None
    title: str = Field(..., min_length=5, max_length=15,
                       description="Title of the movie")
    overview: str = Field(..., min_length=15, max_length=50,
                          description="Brief overview of the movie")
    year: int = Field(..., le=2022, description="Year of movie release")
    rating: float = Field(..., ge=0, le=10,
                          description="Movie rating from 0 to 10")
    category: str = Field(..., min_length=5, max_length=15,
                          description="Movie category (e.g., comedy, drama)")

    class Config:
        schema_extra = {
            "example": {
                "id": 1,
                "title": "MyMovie",
                "overview": "This is a brief overview of my favorite movie.",
                "year": 2022,
                "rating": 8.9,
                "category": "Comedy"
            }
        }


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


# Decorador para el endpoint raíz de la aplicación.
@app.get('/', tags=['home'])
def message():
    return HTMLResponse("<h2>Fast API Project</h2>")  # Respuesta HTML básica.


@app.get('/movies', tags=['movies'])  # Decorador para el endpoint /movies.
def get_movies():
    return movies  # Devuelve la lista de películas completa.


# Decorador para el endpoint /movies/{id}.
@app.get('/movies/{id}', tags=['movies'])
def get_movie(id: int = Path(ge=1, le=2000)):
    for movie in movies:  # Bucle a través de cada película en la lista de películas.
        # Si el id de la película coincide con el parámetro pasado a la función...
        if movie["id"] == id:
            return movie  # Devuelve la película correspondiente.
    # Devuelve un mensaje de error si no se encuentra la película.
    return {"message": "Movie not found"}


# Decorador para el endpoint /movies/category/{category}.
@app.get('/movies/', tags=['movies'])
def get_movies_category(category: str = Query(min_length=5, max_length=20)):
    # Crea una nueva lista que contiene todas las películas en la categoría dada.
    category_movies = [
        movie for movie in movies if movie["category"].lower() == category.lower()]
    if category_movies:  # Si la lista contiene películas...
        # Devuelve la lista de películas correspondiente a la categoría.
        return category_movies
    # Devuelve un mensaje de error si no se encuentran películas en la categoría.
    return {"message": "No movies found in this category"}


# Endpoint POST para crear una nueva película
@app.post('/movies', tags=['movies'])
def create_movie(movie: Movie):
    # Añade la nueva película al listado de películas
    movies.append(movie)
    # Devuelve la lista de películas actualizada
    return movies


# Endpoint PUT para actualizar una película existente
@app.put('/movies/{id}', tags=['movies'])
def update_movie(id: int, movie: Movie):
    for item in movies:
        if item["id"] == id:
            item["title"] = movie.title
            item["overview"] = movie.overview
            item["year"] = movie.year
            item["rating"] = movie.rating
            item["category"] = movie.category

    # Devuelve la lista de películas actualizada
    return movies


# Endpoint DELETE para eliminar una película existente
@app.delete('/movies/{id}', tags=['movies'])
def delete_movie(id: int):
    # Encuentra la primera película con el ID proporcionado y la almacena en id_movie
    id_movie = [movie for movie in movies if movie["id"] == id][0]

    # Obtiene el índice de la película encontrada en la lista de películas
    index = movies.index(id_movie)

    # Elimina la película de la lista de películas utilizando el índice encontrado
    movies.pop(index)

    # Devuelve la lista de películas actualizada
    return movies
