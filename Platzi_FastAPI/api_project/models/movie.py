from config.database import Base
from sqlalchemy import Column, Integer, String, Float


class Movie(Base):
    """
    Clase que representa una película en la base de datos.

    Esta clase define la estructura y los atributos de una película en la base de datos.
    Utiliza SQLAlchemy para definir las columnas de la tabla 'movies'.

    Uso:
    movie = Movie(id=1, title="Avatar", overview="En un exhuberante planeta llamado Pandora...",
                  year=2009, rating=7.8, category="Acción")

    Args:
        Base: Clase base proporcionada por SQLAlchemy para la definición de modelos.
    """

    __tablename__ = 'movies'

    id = Column(Integer, primary_key=True)
    title = Column(String)
    overview = Column(String)
    year = Column(Integer)
    rating = Column(Float)
    category = Column(String)
