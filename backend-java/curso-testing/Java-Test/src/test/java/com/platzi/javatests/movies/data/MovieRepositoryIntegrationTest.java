package com.platzi.javatests.movies.data;

import com.platzi.javatests.movies.model.Genre;
import com.platzi.javatests.movies.model.Movie;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.core.io.ClassPathResource;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.jdbc.datasource.init.ScriptUtils;

import javax.sql.DataSource;

import java.sql.SQLException;
import java.sql.Statement;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import static org.junit.Assert.*;

public class MovieRepositoryIntegrationTest {
    private DataSource dataSource;
    private JdbcTemplate jdbcTemplate;

    private MovieRepository mr;

    @Before
    public void setUp() throws Exception {
        dataSource = new DriverManagerDataSource("jdbc:h2:mem:test;MODE=MYSQL", "sa", "sa");

        ScriptUtils.executeSqlScript(dataSource.getConnection(), new ClassPathResource("sql-scripts/test-movies.sql"));

        jdbcTemplate = new JdbcTemplate(dataSource);

        mr = new MovieRepositoryJDBC(jdbcTemplate);
    }

    @After
    public void tearDown() throws Exception {
        final Statement st = dataSource.getConnection().createStatement();
        st.execute("drop all objects delete files");
    }

    @Test
    public void load_all_movies() throws SQLException {


        Collection<Movie> movies = mr.findAll();

        assertEquals(Arrays.asList(
                new Movie(1, "The Avengers", 143, Genre.ACTION),
                new Movie(2, "The Hangover", 100, Genre.COMEDY),
                new Movie(3, "The Shawshank Redemption", 142, Genre.DRAMA),
                new Movie(4, "The Conjuring", 112, Genre.HORROR),
                new Movie(5, "Inception", 148, Genre.THRILLER),
                new Movie(6, "Blade Runner 2049", 163, Genre.SCIFI),
                new Movie(7, "Duck Soup", 110, Genre.COMEDY)
        ), movies);
    }

    @Test
    public void load_movies_by_id() throws SQLException {

        Movie movie = mr.findById(2);

        assertEquals(
                new Movie(2, "The Hangover", 100, Genre.COMEDY)
                , movie);
    }

    @Test
    public void insert_movie_in_db() {

        Movie movie = new Movie(30, "Transformers", 150, Genre.ACTION);

        mr.saveOrUpdate(movie);

        Movie movieFromDB = mr.findById(30);

        assertEquals(movie, movieFromDB);
    }

    @Test
    public void load_movies_by_name() {
        Collection<Movie> movies = mr.findByName("The");
        List<Integer> movieIds = getIntegers(movies);
        assertEquals(Arrays.asList(1, 2, 3, 4), movieIds);

    }

    private static List<Integer> getIntegers(Collection<Movie> movies) {
        List<Integer> movieIds = movies.stream().map(movie -> movie.getId()).collect(Collectors.toList());
        return movieIds;
    }
}