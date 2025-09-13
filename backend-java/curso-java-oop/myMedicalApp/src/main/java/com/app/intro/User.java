package com.app.intro;

/**
 * Clase que representa a un usuario genérico en la aplicación.
 */
public class User {
    private String name;        // Nombre del usuario
    private String email;       // Correo electrónico del usuario
    private String address;     // Dirección del usuario
    private String phoneNumber; // Número de teléfono del usuario

    /**
     * Constructor de User que recibe el nombre y el correo electrónico del usuario.
     *
     * @param name  Nombre del usuario.
     * @param email Correo electrónico del usuario.
     */
    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    /**
     * Método para obtener el nombre del usuario.
     *
     * @return Nombre del usuario.
     */
    public String getName() {
        return name;
    }

    /**
     * Método para establecer el nombre del usuario.
     *
     * @param name Nombre a establecer.
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Método para obtener el correo electrónico del usuario.
     *
     * @return Correo electrónico del usuario.
     */
    public String getEmail() {
        return email;
    }

    /**
     * Método para establecer el correo electrónico del usuario.
     *
     * @param email Correo electrónico a establecer.
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Método para obtener la dirección del usuario.
     *
     * @return Dirección del usuario.
     */
    public String getAddress() {
        return address;
    }

    /**
     * Método para establecer la dirección del usuario.
     *
     * @param address Dirección a establecer.
     */
    public void setAddress(String address) {
        this.address = address;
    }

    /**
     * Método para obtener el número de teléfono del usuario.
     *
     * @return Número de teléfono del usuario.
     */
    public String getPhoneNumber() {
        return phoneNumber;
    }

    /**
     * Método para establecer el número de teléfono del usuario.
     *
     * @param phoneNumber Número de teléfono a establecer.
     */
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
