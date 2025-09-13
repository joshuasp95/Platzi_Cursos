from fastapi.security import HTTPBearer
from fastapi import Request, HTTPException
from utils.jwt_manager import validate_token

# Clase personalizada que extiende HTTPBearer para validar los tokens JWT
class JWTBearer(HTTPBearer):
    """
    Clase de autenticación para validar tokens JWT.

    Esta clase extiende la clase `HTTPBearer` de FastAPI y proporciona
    una forma de validar los tokens JWT en las peticiones.

    Uso:
    jwt_bearer = JWTBearer()
    # Luego, se puede utilizar como dependencia en una ruta con:
    # Depends(jwt_bearer)

    Args:
        HTTPBearer: Clase base para autenticación Bearer.
    """

    async def __call__(self, request: Request):
        # Llama al método __call__ de la clase base para realizar la autenticación Bearer
        auth = await super().__call__(request)
        
        # Valida el token JWT utilizando la función validate_token del módulo jwt_manager
        data = validate_token(auth.credentials)

        # Verifica si el email del token no coincide con el valor esperado
        if data['email'] != "default@email.com":
            # Si el email no es válido, se lanza una excepción HTTPException con código 403 (Forbidden)
            raise HTTPException(
                status_code=403, detail="Invalid email address")

