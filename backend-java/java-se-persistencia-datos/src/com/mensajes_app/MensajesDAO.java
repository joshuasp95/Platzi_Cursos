package com.mensajes_app;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class MensajesDAO {

	private static Connection con;
	private static final String TABLENAME = "backend_java_mensajes";

	public static void crearMensajeDB(Mensajes mensaje) throws SQLException {
		Conexion conexionDB = new Conexion();

		con = conexionDB.getConnection();

		PreparedStatement ps = null;

		String query = "insert into " + TABLENAME + " (mensaje, autor) values (?,?);";

		ps = con.prepareStatement(query);

		ps.setString(1, mensaje.getMensaje());
		ps.setString(2, mensaje.getAutor());

		ps.executeUpdate();

		System.out.println("Mensaje creado correctamente");

	}

	public static void leerMensajesDB() throws SQLException {

		Conexion conexionDB = new Conexion();

		con = conexionDB.getConnection();

		PreparedStatement ps = null;
		ResultSet rs = null;

		String query = "select * from " + TABLENAME;

		ps = con.prepareStatement(query);

		rs = ps.executeQuery();

		while (rs.next()) {
			System.out.println("ID: " + rs.getInt("id"));
			System.out.println("Mensaje: " + rs.getString("mensaje"));
			System.out.println("Autor: " + rs.getString("autor"));
			System.out.println("Fecha: " + rs.getString("fecha"));
			System.out.println("-------------------------------");
		}

	}

	public static void borrarMensajesDB(int id_mensaje) throws SQLException {

		Conexion conexionDB = new Conexion();

		con = conexionDB.getConnection();

		PreparedStatement ps = null;

		String query = "delete from " + TABLENAME + " where id = ?;";

		ps = con.prepareStatement(query);

		ps.setInt(1, id_mensaje);

		ps.executeUpdate();

		System.out.println("Mensaje borrado correctamente");

	}

	public static void actualizarMensajesDB(Mensajes mensaje) throws SQLException {
		Conexion conexionDB = new Conexion();

		con = conexionDB.getConnection();

		PreparedStatement ps = null;

		String query = "update " + TABLENAME + " set mensaje = ? where id = ?;";

		ps = con.prepareStatement(query);

		ps.setString(1, mensaje.getMensaje());
		ps.setInt(2, mensaje.getId_mensaje());

		ps.executeUpdate();

		System.out.println("Mensaje actualizado correctamente!");

	}

}
