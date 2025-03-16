package com.app.oop;

import java.util.ArrayList;
import java.util.Date;

/**
 * Clase que representa a un doctor en la aplicación médica.
 */
public class Doctor extends User {
    // Atributos
    private String speciality;  // Especialidad médica del doctor

    public Doctor(String name, String email, String speciality) {
        super(name, email);
        this.speciality = speciality;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
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

    @Override
    public String toString() {
        return super.toString() + "Doctor{" +
                "speciality='" + speciality + '\'' +
                ", availableAppointments=" + availableAppointments +
                "} ";
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

        @Override
        public String toString() {
            return "AvailableAppointment{" +
                    "id=" + id +
                    ", date=" + date +
                    ", time='" + time + '\'' +
                    '}';
        }
    }
}
