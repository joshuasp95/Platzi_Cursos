package com.app;

import java.util.ArrayList;
import java.util.Date;

/**
 * Clase que representa a un doctor en la aplicación médica.
 */
public class Doctor {
    // Atributos
    static int id = 0; // Identificador autoincremental
    String name;        // Nombre del doctor
    String speciality;  // Especialidad médica del doctor

    // Constructor predeterminado
    Doctor() {
        System.out.println("*** Construyendo objeto Doctor ***");
        id++;
    }

    /**
     * Constructor que recibe el nombre del doctor.
     *
     * @param name Nombre del doctor.
     */
    Doctor(String name) {
        this.name = name;
        System.out.println("El nombre asignado al objeto doctor es ... " + this.name);
        id++;
    }

    /**
     * Constructor que recibe el nombre y la especialidad del doctor.
     *
     * @param name       Nombre del doctor.
     * @param speciality Especialidad médica del doctor.
     */
    Doctor(String name, String speciality) {
        this.name = name;
        this.speciality = speciality;
        System.out.println("El nombre asignado al objeto doctor es ... " + this.name
                + " y la especialidad es ... " + this.speciality);
        id++;
    }

    /**
     * Método para mostrar el nombre del doctor.
     */
    public void showName() {
        System.out.println("Nombre: " + this.name);
    }

    /**
     * Método para mostrar el ID del doctor.
     */
    public void showId() {
        System.out.println("ID del doctor: " + id);
    }

    /**
     * Método para mostrar la especialidad del doctor.
     */
    public void showSpeciality() {
        System.out.println("Especialidad: " + this.speciality);
    }

    // Lista de citas disponibles del doctor
    ArrayList<AvailableAppointment> availableAppointments = new ArrayList<>();

    /**
     * Método para agregar una cita disponible al doctor.
     *
     * @param date Fecha de la cita disponible.
     * @param time Hora de la cita disponible.
     */
    public void addAvailableAppointment(Date date, String time) {
        availableAppointments.add(new AvailableAppointment(date, time));
    }

    /**
     * Método para obtener la lista de citas disponibles del doctor.
     *
     * @return Lista de citas disponibles.
     */
    public ArrayList<AvailableAppointment> getAvailableAppointments() {
        return this.availableAppointments;
    }

    /**
     * Clase interna que representa una cita médica disponible.
     */
    public static class AvailableAppointment {
        private int id;       // Identificador de la cita
        private Date date;    // Fecha de la cita
        private String time;  // Hora de la cita

        /**
         * Constructor de AvailableAppointment.
         *
         * @param date Fecha de la cita.
         * @param time Hora de la cita.
         */
        public AvailableAppointment(Date date, String time) {
            this.date = date;
            this.time = time;
        }


        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public Date getDate() {
            return date;
        }

        public void setDate(Date date) {
            this.date = date;
        }

        public String getTime() {
            return time;
        }

        public void setTime(String time) {
            this.time = time;
        }
    }
}
