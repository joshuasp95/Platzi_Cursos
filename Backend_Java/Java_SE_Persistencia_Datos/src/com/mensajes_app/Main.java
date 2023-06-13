package com.mensajes_app;

import java.sql.SQLException;
import java.util.Scanner;

import com.mensajes_app.exceptions.ErrorConexion;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);

		int opcion = 1;

		do {
			System.out.println("-----------APP MENSAJES-------------");
			System.out.println("--- MENU PRINCIPAL ----");
			System.out.println("1- Crear mensaje");
			System.out.println("2- Listar mensajes");
			System.out.println("3- Editar mensaje");
			System.out.println("4- Eliminar mensaje");
			System.out.println("0- Salir de la aplicacion");

			// Obtener opcion de usuario
			opcion = Integer.parseInt(sc.next());

			switch (opcion) {
			case 1:
				System.out.println("Opcion 1");
				try {
					MensajesService.crearMensaje();
				} catch (SQLException e) {
					System.out.println();
					e.printStackTrace();
				}
				break;
			case 2:
				System.out.println("Opcion 2");
				try {
					MensajesService.listarMensajes();
				} catch (SQLException e) {
					System.out.println("Error al leer mensajes...");
					e.printStackTrace();
				}
				break;
			case 3:
				System.out.println("Opcion 3");
				try {
					MensajesService.editarMensaje();
				} catch (SQLException e) {
					System.out.println("Error al actualizar el mensaje...");
					e.printStackTrace();
				}
				break;
			case 4:
				System.out.println("Opcion 4");
				try {
					MensajesService.borrarMensaje();
				} catch (SQLException e) {
					System.out.println("Error al borrar el mensaje...");
					e.printStackTrace();
				}
				break;
			case 0:
				System.out.println("Hasta luego!");
				break;
			default:
				System.out.println("Opcion no valida");
			}

		} while (opcion != 0);

		Conexion con = new Conexion();

	}

}
