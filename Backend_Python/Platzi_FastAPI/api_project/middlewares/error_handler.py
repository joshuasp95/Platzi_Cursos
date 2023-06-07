from starlette.middleware.base import BaseHTTPMiddleware
from fastapi import FastAPI
from starlette.requests import Request
from starlette.responses import Response
from fastapi.responses import JSONResponse

# Definición de la clase ErrorHandler que hereda de BaseHTTPMiddleware


class ErrorHandler(BaseHTTPMiddleware):
    """
    Clase de middleware para manejar los errores de manera centralizada.

    Este middleware captura cualquier excepción que ocurra durante el procesamiento
    de las peticiones y devuelve una respuesta JSON con un código de estado 500
    (Internal Server Error) que contiene el mensaje de error.

    Uso:
    app.add_middleware(ErrorHandler)

    Args:
        app (FastAPI): Instancia de la aplicación FastAPI.
    """

    def __init__(self, app: FastAPI) -> None:
        # Constructor de la clase, recibe una instancia de FastAPI
        super().__init__(app)

    # Método dispatch que se ejecuta en cada petición
    async def dispatch(self, request: Request, call_next) -> Response | JSONResponse:
        try:
            # Llama al siguiente middleware o al endpoint
            response = await call_next(request)
            return response
        except Exception as e:
            # Captura cualquier excepción que ocurra durante el procesamiento de la petición
            # y retorna una respuesta JSON con un código de estado 500 (Internal Server Error)
            error_message = str(e)
            error_response = {"error": error_message}
            return JSONResponse(status_code=500, content=error_response)
