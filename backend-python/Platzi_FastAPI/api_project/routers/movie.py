from fastapi import APIRouter
from fastapi import Path, Query, Depends
from fastapi.responses import JSONResponse
from typing import List
from config.database import Session
from models.movie import Movie as MovieModel
from fastapi.encoders import jsonable_encoder
from middlewares.jwt_bearer import JWTBearer
from services.movie import MovieService
from schemas.movie import Movie


movie_router = APIRouter()


# Endpoint para obtener todas las películas
@movie_router.get('/movies', tags=['movies'], response_model=List[Movie], status_code=200, dependencies=[Depends(JWTBearer())])
def get_movies() -> List[Movie]:
    # Crear una sesión de base de datos
    db = Session()
    # Realizar una consulta para obtener todas las películas
    result = MovieService(db).get_movies()
    # Retornar la lista de películas como respuesta en formato JSON
    return JSONResponse(status_code=200, content=jsonable_encoder(result))


# Endpoint para obtener una película por su ID
@movie_router.get('/movies/{id}', tags=['movies'], response_model=Movie)
def get_movie(id: int = Path(ge=1, le=2000)) -> Movie:
    # Crear una sesión de base de datos
    db = Session()
    # Realizar una consulta para obtener la película con el ID especificado
    result = MovieService(db).get_movie_id(id)
    # Verificar si la película existe y retornarla como respuesta en formato JSON
    if not result:
        return JSONResponse(status_code=404, content={'message': 'NO encontrado'})
    return JSONResponse(status_code=200, content=jsonable_encoder(result))


# Endpoint para obtener películas por categoría
@movie_router.get('/movies/', tags=['movies'], response_model=List[Movie])
def get_movies_category(category: str = Query(min_length=5, max_length=20)) -> List[Movie]:
    # Crear una sesión de base de datos
    db = Session()
    # Realizar una consulta para obtener las películas en la categoría especificada
    result = MovieService(db).get_movie_category(category)
    # Verificar si hay películas en la categoría y retornarlas como respuesta en formato JSON
    if not result:
        return JSONResponse(status_code=404, content={'message': 'Categoria no encontrada'})
    return JSONResponse(status_code=200, content=jsonable_encoder(result))


# Endpoint para crear una nueva película
@movie_router.post('/movies', tags=['movies'], response_model=dict, status_code=201)
def create_movie(movie: Movie) -> dict:
    # Crear una sesión de base de datos
    db = Session()
    MovieService(db).create_movie(movie)
    # Retornar una respuesta exitosa
    return JSONResponse(status_code=201, content={"message": "Pelicula registrada"})


# Endpoint para actualizar una película existente
@movie_router.put('/movies/{id}', tags=['movies'], response_model=dict, status_code=200)
def update_movie(id: int, movie: Movie) -> dict:
    # Crear una sesión de base de datos
    db = Session()
    # Realizar una consulta para obtener la película con el ID especificado
    result = MovieService(db).get_movie_id(id)
    # Verificar si la película existe y actualizar sus datos
    if not result:
        return JSONResponse(status_code=404, content={'message': 'ID no encontrado'})
    MovieService(db).update_movie(id, movie)
    # Retornar una respuesta exitosa
    return JSONResponse(status_code=200, content={"message": "Pelicula modificada"})


# Endpoint para eliminar una película existente
@movie_router.delete('/movies/{id}', tags=['movies'], response_model=dict, status_code=200)
def delete_movie(id: int) -> dict:
    # Crear una sesión de base de datos
    db = Session()
    # Realizar una consulta para obtener la película con el ID especificado
    result = db.query(MovieModel).filter(MovieModel.id == id).first()
    # Verificar si la película existe y eliminarla de la base de datos
    if not result:
        return JSONResponse(status_code=404, content={'message': 'ID no encontrado'})
    MovieService(db).delete_movie(id)
    # Retornar una respuesta exitosa
    return JSONResponse(status_code=200, content={"message": "Pelicula eliminada"})
