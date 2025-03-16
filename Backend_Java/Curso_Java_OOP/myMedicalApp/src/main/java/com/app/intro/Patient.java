package com.app.intro;

/**
 * Clase que representa a un paciente en la aplicación médica.
 */
public class Patient {
    private int id;             // Identificador del paciente
    private String name;        // Nombre del paciente
    private String email;       // Correo electrónico del paciente
    private String address;     // Dirección del paciente
    private String phoneNumber; // Número de teléfono del paciente
    private String birthday;    // Fecha de nacimiento del paciente
    private double weight;      // Peso del paciente en kilogramos
    private double height;      // Altura del paciente en metros
    private String blood;       // Tipo de sangre del paciente

    /**
     * Constructor de Patient que recibe el nombre y el correo electrónico del paciente.
     *
     * @param name  Nombre del paciente.
     * @param email Correo electrónico del paciente.
     */
    public Patient(String name, String email) {
        this.name = name;
        this.email = email;
    }

    /**
     * Método para obtener el ID del paciente.
     *
     * @return Identificador del paciente.
     */
    public int getId() {
        return id;
    }

    /**
     * Método para establecer el ID del paciente.
     *
     * @param id Identificador a establecer.
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * Método para obtener el nombre del paciente.
     *
     * @return Nombre del paciente.
     */
    public String getName() {
        return name;
    }

    /**
     * Método para establecer el nombre del paciente.
     *
     * @param name Nombre a establecer.
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Método para obtener el correo electrónico del paciente.
     *
     * @return Correo electrónico del paciente.
     */
    public String getEmail() {
        return email;
    }

    /**
     * Método para establecer el correo electrónico del paciente.
     *
     * @param email Correo electrónico a establecer.
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Método para obtener la dirección del paciente.
     *
     * @return Dirección del paciente.
     */
    public String getAddress() {
        return address;
    }

    /**
     * Método para establecer la dirección del paciente.
     *
     * @param address Dirección a establecer.
     */
    public void setAddress(String address) {
        this.address = address;
    }

    /**
     * Método para obtener el número de teléfono del paciente.
     *
     * @return Número de teléfono del paciente.
     */
    public String getPhoneNumber() {
        return phoneNumber;
    }

    /**
     * Método para establecer el número de teléfono del paciente.
     *
     * @param phoneNumber Número de teléfono a establecer.
     */
    public void setPhoneNumber(String phoneNumber) {
        if (phoneNumber.length() > 8) {
            System.out.println("El número de teléfono debe tener 8 dígitos como máximo.");
        } else if (phoneNumber.length() == 8) {
            this.phoneNumber = phoneNumber;
        }
    }

    /**
     * Método para obtener la fecha de nacimiento del paciente.
     *
     * @return Fecha de nacimiento del paciente.
     */
    public String getBirthday() {
        return birthday;
    }

    /**
     * Método para establecer la fecha de nacimiento del paciente.
     *
     * @param birthday Fecha de nacimiento a establecer.
     */
    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    /**
     * Método para obtener el peso del paciente en formato "kg".
     *
     * @return Peso del paciente en formato "kg".
     */
    public String getWeight() {
        return weight + "kg";
    }

    /**
     * Método para establecer el peso del paciente.
     *
     * @param weight Peso a establecer en kilogramos.
     */
    public void setWeight(double weight) {
        this.weight = weight;
    }

    /**
     * Método para obtener la altura del paciente en formato "m".
     *
     * @return Altura del paciente en formato "m".
     */
    public String getHeight() {
        return height + "m";
    }

    /**
     * Método para establecer la altura del paciente.
     *
     * @param height Altura a establecer en metros.
     */
    public void setHeight(double height) {
        this.height = height;
    }

    /**
     * Método para obtener el tipo de sangre del paciente.
     *
     * @return Tipo de sangre del paciente.
     */
    public String getBlood() {
        return blood;
    }

    /**
     * Método para establecer el tipo de sangre del paciente.
     *
     * @param blood Tipo de sangre a establecer.
     */
    public void setBlood(String blood) {
        this.blood = blood;
    }
}
