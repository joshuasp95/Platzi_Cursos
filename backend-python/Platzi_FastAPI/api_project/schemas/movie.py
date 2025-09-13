from fastapi import APIRouter
from fastapi import Path, Query, Depends
from pydantic import BaseModel, Field
from typing import Optional


# Definir un modelo de datos para la película
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
