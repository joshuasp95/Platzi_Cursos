package com.cats_api;

import java.awt.Image;
import java.io.IOException;
import java.net.URL;

import javax.imageio.ImageIO;
import javax.swing.ImageIcon;
import javax.swing.JOptionPane;

import com.google.gson.Gson;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;

public class CatsService {

	public static void showCats() throws IOException {
		// Crear un cliente HTTP para realizar solicitudes a la API
		OkHttpClient client = new OkHttpClient();

		// Construir la solicitud HTTP GET con la URL de la API y el cuerpo de la
		// solicitud
		Request request = new Request.Builder().url("https://api.thecatapi.com/v1/images/search?limit=10").get()
				.build();

		// Ejecutar la solicitud HTTP y obtener la respuesta
		Response response = client.newCall(request).execute();

		// Extraer la respuesta en formato JSON como String
		String respJSON = response.body().string();

		// Imprimir la respuesta JSON en la consola
		System.out.println(respJSON);

		// Crear un objeto Gson para manejar la serialización/deserialización de JSON
		Gson gson = new Gson();

		// Deserializar la respuesta JSON a un array de objetos Cats
		Cats[] catsArray = gson.fromJson(respJSON, Cats[].class);

		for (Cats cats : catsArray) {

			// Crear una variable para almacenar la imagen
			Image img = null;

			try {
				// Crear un objeto URL a partir de la URL de la imagen en la respuesta JSON
				URL url = new URL(cats.getUrl());

				// Leer la imagen desde la URL
				img = ImageIO.read(url);

				// Crear un ImageIcon con la imagen obtenida
				ImageIcon catBackground = new ImageIcon(img);

				// Si el ancho de la imagen es mayor a 800, redimensionarla
				if (catBackground.getIconWidth() > 800) {
					Image background = catBackground.getImage();
					Image newBackground = background.getScaledInstance(800, 600, java.awt.Image.SCALE_SMOOTH);
					catBackground = new ImageIcon(newBackground);
				}

				String menu = "Opciones:\n" + "1- Ver otra imagen\n" + "2- Favoritos\n" + "3- Volver";

				String[] botones = { "ver otra imagen", "favoritos", "volver" };

				String idCat = cats.getId();

				String opcion = (String) JOptionPane.showInputDialog(null, menu, idCat, JOptionPane.INFORMATION_MESSAGE,
						catBackground, botones, botones[0]);

				int seleccion = -1;

				for (int i = 0; i < botones.length; i++) {
					if (opcion.equals(botones[i])) {
						seleccion = i;
					}
				}

				switch (seleccion) {
				case 0:
					showCats();
					break;
				case 1:
					favoriteCat(cats);
					break;
				case 2:
					break;
				default:
					System.out.println("Opcion no valida");
					break;
				}
				break;

			} catch (Exception e) {
				// Imprimir un mensaje de error si hay algún problema al formatear la imagen
				System.out.println("Error al formatear imagen");
			}
		}
	}

	public static void favoriteCat(Cats cat) {

	}
}
