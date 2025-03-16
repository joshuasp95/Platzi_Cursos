package com.app.oop.model;

/**
 * Clase que representa a un paciente en la aplicación médica.
 */
public class Patient extends User {

    private String birthday;    // Fecha de nacimiento del paciente
    private double weight;      // Peso del paciente en kilogramos
    private double height;      // Altura del paciente en metros
    private String blood;       // Tipo de sangre del paciente

    /**
     * Constructor de User que recibe el nombre y el correo electrónico del usuario.
     *
     * @param name  Nombre del usuario.
     * @param email Correo electrónico del usuario.
     */
    public Patient(String name, String email) {
        super(name, email);
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

    @Override
    public String toString() {
        return super.toString() + "Patient{" +
                "birthday='" + birthday + '\'' +
                ", weight=" + getWeight() +
                ", height=" + getHeight() +
                ", blood='" + blood + '\'' +
                "} ";
    }
}
