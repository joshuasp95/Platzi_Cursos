package com.mensajes_app;

public class Mensajes {

	private int id_mensaje;
	private String mensaje;
	private String autor;
	private String fecha;

	public Mensajes() {
		super();
		this.id_mensaje = 0;
		this.mensaje = "";
		this.autor = "";
		this.fecha = "";
	}

	public Mensajes(String mensaje, String autor, String fecha) {
		super();
		this.mensaje = mensaje;
		this.autor = autor;
		this.fecha = fecha;
	}

	public Mensajes(int id_mensaje, String mensaje, String autor, String fecha) {
		super();
		this.id_mensaje = id_mensaje;
		this.mensaje = mensaje;
		this.autor = autor;
		this.fecha = fecha;
	}

	public int getId_mensaje() {
		return id_mensaje;
	}

	public String getMensaje() {
		return mensaje;
	}

	public String getAutor() {
		return autor;
	}

	public String getFecha() {
		return fecha;
	}

	public void setId_mensaje(int id_mensaje) {
		this.id_mensaje = id_mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}

	public void setAutor(String autor) {
		this.autor = autor;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	@Override
	public String toString() {
		return "Mensajes [id_mensaje=" + id_mensaje + ", mensaje=" + mensaje + ", autor=" + autor + ", fecha=" + fecha
				+ "]";
	}

}
