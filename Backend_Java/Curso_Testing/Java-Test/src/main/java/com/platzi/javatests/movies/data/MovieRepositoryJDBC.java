package com.platzi.javatests.movies.data;

import com.platzi.javatests.movies.model.Genre;
import com.platzi.javatests.movies.model.Movie;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;

public class MovieRepositoryJDBC implements MovieRepository {

    private JdbcTemplate jdbcTemplate;

    public MovieRepositoryJDBC(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Movie findById(long id) {
        Object[] args = {id};
        return jdbcTemplate.queryForObject("select * from movies where id = ?", args, movieMapper);
    }

    @Override
    public Collection<Movie> findAll() {
        return jdbcTemplate.query("select * from movies", movieMapper);

    }

    @Override
    public void saveOrUpdate(Movie movie) {

        jdbcTemplate.update("insert into movies values (?,?,?,?)", movie.getId(),
                movie.getName(), movie.getMinutes(), movie.getGenre().toString());


    }

    @Override
    public Collection<Movie> findByName(String name) {
        Object[] args = {"%" + name.toLowerCase() + "%"};
        return jdbcTemplate.query("select * from movies where LOWER(name) LIKE ?", args, movieMapper);
    }

    private static RowMapper<Movie> movieMapper = (rs, rowNum) -> new Movie(rs.getInt("id"), rs.getString("name"),
            rs.getInt("minutes"), Genre.valueOf(rs.getString("genre")));

}
