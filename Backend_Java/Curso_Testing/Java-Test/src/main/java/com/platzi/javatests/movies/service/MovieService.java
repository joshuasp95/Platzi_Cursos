package com.platzi.javatests.movies.service;

import com.platzi.javatests.movies.data.MovieRepository;
import com.platzi.javatests.movies.model.Genre;
import com.platzi.javatests.movies.model.Movie;

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
}
