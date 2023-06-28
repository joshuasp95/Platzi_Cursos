package com.platzi.javatests.movies.service;

import com.platzi.javatests.movies.data.MovieRepository;
import com.platzi.javatests.movies.model.Genre;
import com.platzi.javatests.movies.model.Movie;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import static org.junit.Assert.*;

public class MovieServiceTest {
    private MovieRepository movieRepo;
    private MovieService movieservice;

    @Before
    public void setUp() throws Exception {
        movieRepo = Mockito.mock(MovieRepository.class);

        Movie movie1 = new Movie(1, "The Avengers", 143, Genre.ACTION);
        Movie movie2 = new Movie(2, "The Hangover", 100, Genre.COMEDY);
        Movie movie3 = new Movie(3, "The Shawshank Redemption", 142, Genre.DRAMA);
        Movie movie4 = new Movie(4, "The Conjuring", 112, Genre.HORROR);
        Movie movie5 = new Movie(5, "Inception", 148, Genre.THRILLER);
        Movie movie6 = new Movie(6, "Blade Runner 2049", 163, Genre.SCIFI);
        Movie movie7 = new Movie(7, "Duck Soup", 110, Genre.COMEDY);

        Mockito.when(movieRepo.findAll()).thenReturn(Arrays.asList(
                movie1, movie2, movie3, movie4, movie5, movie6, movie7
        ));


        movieservice = new MovieService(movieRepo);
    }

    @Test
    public void return_movies_by_genre() {

        Collection<Movie> movies = movieservice.findMoviesByGenre(Genre.COMEDY);

        List<Integer> movieIds = getIntegers(movies);

        assertEquals(Arrays.asList(2, 7), movieIds);
    }

    @Test
    public void return_movies_by_time() {

        Collection<Movie> movies = movieservice.findMoviesByTime(120);

        List<Integer> movieIds = getIntegers(movies);

        assertEquals(Arrays.asList(2, 4, 7), movieIds);
    }

    private static List<Integer> getIntegers(Collection<Movie> movies) {
        List<Integer> movieIds = movies.stream().map(movie -> movie.getId()).collect(Collectors.toList());
        return movieIds;
    }
}