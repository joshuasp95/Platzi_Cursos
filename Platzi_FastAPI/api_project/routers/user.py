from fastapi import APIRouter
from fastapi.responses import JSONResponse
from utils.jwt_manager import create_token
from config.database import Session
from models.user import User as UserModel
from schemas.user import User


# Crear un enrutador APIRouter para las rutas relacionadas con el usuario
user_router = APIRouter()


# Endpoint para el inicio de sesión
@user_router.post('/login', tags=['auth'])
def login(user: User):
    """
    Endpoint para iniciar sesión de usuario.

    Este endpoint recibe los datos de un usuario y realiza la validación.
    Si el email y la contraseña coinciden con los valores predeterminados,
    se genera un token JWT utilizando la función create_token del módulo jwt_manager
    y se devuelve como respuesta.

    Args:
        user (User): Datos del usuario proporcionados en el cuerpo de la petición.

    Returns:
        JSONResponse: Respuesta con el token JWT si la autenticación es exitosa.
    """
    db = Session()
    new_user = UserModel(**user.dict())
    db.add(new_user)
    db.commit()
    if user.email == "default@email.com" and user.password == "default":
        token: str = create_token(user.dict())
    return JSONResponse(status_code=200, content=token)


# Endpoint para eliminar una usuario existente
@user_router.delete('/user/{id}', tags=['users'], response_model=dict, status_code=200)
def delete_user(id: int) -> dict:
    # Crear una sesión de base de datos
    db = Session()
    # Realizar una consulta para obtener la usuario con el ID especificado
    result = db.query(UserModel).filter(UserModel.id == id).first()
    # Verificar si la usuario existe y eliminarlo de la base de datos
    if not result:
        return JSONResponse(status_code=404, content={'message': 'ID no encontrado'})
    db.delete(result)
    # Confirmar los cambios en la base de datos
    db.commit()
    # Retornar una respuesta exitosa
    return JSONResponse(status_code=200, content={"message": "Usuario eliminado"})
