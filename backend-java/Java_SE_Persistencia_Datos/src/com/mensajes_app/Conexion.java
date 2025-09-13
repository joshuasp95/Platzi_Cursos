package com.mensajes_app;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {

	private static final String URL = "jdbc:mysql://localhost:3306/";
	private static final String DB = "platzi_cursos";
	private static final String USER = "joshua_platzi";
	private static final String PASSWORD = "Micontraseñasegura123!";

	public Connection getConnection() throws SQLException {

		Connection connection = null;

		connection = DriverManager.getConnection(URL + DB, USER, PASSWORD);

		return connection;
	}

}
