package com.cats_api;

import java.io.IOException;

import javax.swing.JOptionPane;

public class Main {

	public static void main(String[] args) {

		int opcion = -1;

		String[] botones = { "1- Ver los gatos", "2- Salir" };

		do {
			// Menu principal
			String opcionUser = (String) JOptionPane.showInputDialog(null, "Java Cats ", "MENU PRINCIPAL",
					JOptionPane.INFORMATION_MESSAGE, null, botones, botones[0]);

			// Validar opcion seleccionada por User
			for (int i = 0; i < botones.length; i++) {
				if (opcionUser.equals(botones[i])) {
					opcion = i;
				}

			}

			switch (opcion) {
			case 0:
				try {
					CatsService.showCats();
				} catch (IOException e) {
					System.out.println("Error en la comunicacion con la API");
					e.printStackTrace();
				}
				break;

			case 1:
				System.out.println("HASTA LUEGO!!");
				break;

			default:
				System.out.println("Opcion no valida");
				break;
			}

		} while (opcion != 1);

	}

}
