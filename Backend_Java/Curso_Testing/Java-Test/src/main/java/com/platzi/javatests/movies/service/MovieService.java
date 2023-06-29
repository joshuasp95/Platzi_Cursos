package com.platzi.javatests.movies.service;

import com.platzi.javatests.movies.data.MovieRepository;
import com.platzi.javatests.movies.model.Genre;
import com.platzi.javatests.movies.model.Movie;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class MovieService {

    private MovieRepository movieRepo;

    public MovieService(MovieRepository movieRepo) {
        this.movieRepo = movieRepo;
    }

    public Collection<Movie> findMoviesByGenre(Genre genre) {
        Collection<Movie> allMovies = movieRepo.findAll();
        List<Movie> moviesGenreFiltered = allMovies.stream().
                filter(movie -> movie.getGenre() == genre).collect(Collectors.toList());
        return moviesGenreFiltered;
    }

    public Collection<Movie> findMoviesByTime(int time) {
        Collection<Movie> allMovies = movieRepo.findAll();
        List<Movie> moviesGenreFiltered = allMovies.stream().
                filter(movie -> movie.getMinutes() <= 120).collect(Collectors.toList());
        return moviesGenreFiltered;
    }

    public Collection<Movie> findMoviesByTemplate(Movie template) {
        // Si todos los atributos del objeto Movie son null, devuelve una lista vacía
        if (template.getMinutes() == null && template.getName() == null && template.getGenre() == null) {
            return new ArrayList<>();
        }
        // Si el atributo ID no es null, devuelve una lista de películas cuyo ID coincide con el ID de la plantilla
        if (template.getId() != null) {
            return movieRepo.findAll().stream().filter(movie -> movie.getId() == template.getId()).collect(Collectors.toList());
        }
        // Si los minutos de la plantilla son null o menores o iguales a cero, lanza una excepción
        if (template.getMinutes() == null || template.getMinutes() <= 0) {
            throw new IllegalArgumentException("Movie time can't be null and must be greater than 0 minutes");
        }
        // Filtra todas las películas del repositorio según los atributos de la plantilla
        // Si un atributo de la plantilla es null, se ignora ese atributo al filtrar las películas
        // Si un atributo de la plantilla no es null, solo las películas con el mismo valor para ese atributo pasan el filtro
        List<Movie> filteredMovies = movieRepo.findAll().stream().filter(movie -> {
            if (template.getMinutes() != null && movie.getMinutes() > template.getMinutes()) {
                return false;
            }
            if (template.getName() != null && !movie.getName().equals(template.getName())) {
                return false;
            }
            if (template.getGenre() != null && !movie.getGenre().equals(template.getGenre())) {
                return false;
            }
            return true; // Si la película pasa todos los filtros, se incluye en la lista filtrada
        }).collect(Collectors.toList());
        return filteredMovies;
    }

}

