package com.mensajes_app;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {

	private static final String URL = System.getenv("DB_URL") != null ? System.getenv("DB_URL") : "jdbc:mysql://localhost:3306/";
	private static final String DB = System.getenv("DB_NAME") != null ? System.getenv("DB_NAME") : "platzi_cursos";
	private static final String USER = System.getenv("DB_USER");
	private static final String PASSWORD = System.getenv("DB_PASSWORD");

	public Connection getConnection() throws SQLException {

		Connection connection = null;

		connection = DriverManager.getConnection(URL + DB, USER, PASSWORD);

		return connection;
	}

}
