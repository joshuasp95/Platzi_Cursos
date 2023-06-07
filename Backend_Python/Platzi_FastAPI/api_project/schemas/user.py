from pydantic import BaseModel
from typing import Optional


# Definir un modelo de datos para el usuario
class User(BaseModel):
    """
    Clase que representa los datos de un usuario.

    Esta clase define los atributos de un usuario, como el email y la contraseña.
    Utiliza la clase BaseModel de Pydantic para la validación de datos.

    Uso:
    user = User(id=1, email="user@example.com", password="password123")

    Args:
        BaseModel: Clase base proporcionada por Pydantic para la definición de modelos.
    """

    id: Optional[int] = None
    email: str
    password: str

    class Config:
        schema_extra = {
            "example": {
                "id": 1,
                "email": "default@email.com",
                "password": "default"
            }
        }
