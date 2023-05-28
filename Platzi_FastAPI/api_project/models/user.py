from config.database import Base
from sqlalchemy import Column, String, Integer


class User(Base):
    """
    Clase que representa un usuario en la base de datos.

    Esta clase define la estructura y los atributos de un usuario en la base de datos.
    Utiliza SQLAlchemy para definir las columnas de la tabla 'user'.

    Uso:
    user = User(id=1, email="user@example.com", password="password123")

    Args:
        Base: Clase base proporcionada por SQLAlchemy para la definición de modelos.
    """

    __tablename__ = 'user'

    id = Column(Integer, primary_key=True)
    email = Column(String)
    password = Column(String)
