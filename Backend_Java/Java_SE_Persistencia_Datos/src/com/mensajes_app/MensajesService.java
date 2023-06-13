package com.mensajes_app;

import java.sql.SQLException;
import java.util.Scanner;

public class MensajesService {

	public static void crearMensaje() throws SQLException {
		Scanner sc = new Scanner(System.in);

		System.out.println("Introduce el mensaje que quieres escribir");
		String mensajeTxt = sc.nextLine();

		System.out.println("Introduce el autor del mensaje");
		String autor = sc.nextLine();

		Mensajes mensaje = new Mensajes();

		mensaje.setMensaje(mensajeTxt);
		mensaje.setAutor(autor);

		MensajesDAO.crearMensajeDB(mensaje);

	}

	public static void listarMensajes() throws SQLException {
		MensajesDAO.leerMensajesDB();

	}

	public static void borrarMensaje() throws SQLException {
		Scanner sc = new Scanner(System.in);

		System.out.println("Introduce el id del mensaje que quieres borrar: ");
		int id_mensaje = Integer.parseInt(sc.nextLine());

		MensajesDAO.borrarMensajesDB(id_mensaje);

	}

	public static void editarMensaje() throws SQLException {
		Scanner sc = new Scanner(System.in);

		System.out.println("Selecciona el ID del mensaje: ");
		int id_mensaje = Integer.parseInt(sc.nextLine());

		System.out.println("Introduce el nuevo mensaje:");
		String mensajeTxt = sc.nextLine();

		Mensajes mensaje = new Mensajes();

		mensaje.setId_mensaje(id_mensaje);
		mensaje.setMensaje(mensajeTxt);

		MensajesDAO.actualizarMensajesDB(mensaje);

	}

}
