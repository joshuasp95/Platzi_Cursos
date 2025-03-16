package com.app.oop;

import java.util.Date;

import static com.app.ui.UIMenu.showMenu;
import static java.lang.Math.PI;

/**
 * Clase principal que contiene el método main para ejecutar la aplicación.
 */
public class Main {
    public static void main(String[] args) {
        // Creación de una instancia de la clase Doctor y asignación de valores a sus atributos.
        Doctor doctor = new Doctor();
        doctor.name = "Joshua Sainz";
        doctor.showName();
        doctor.showId();

        // Creación de otra instancia de Doctor con un constructor que recibe el nombre.
        Doctor doctorTwo = new Doctor("Joshua Sainz Palacios");
        doctorTwo.showName();
        doctorTwo.showId();

        // Acceso a una constante (PI) de la clase Math.
        System.out.println(PI);

        // Llamada a un método estático desde otra clase (UIMenu).
        showMenu();

        // Creación de una instancia de Doctor con un constructor que recibe nombre y especialidad.
        Doctor doctorThree = new Doctor("Joshua Sainz Palacios", "Backend dev");
        doctorThree.showName();
        doctorThree.showSpeciality();
        doctorThree.showId();

        // Agregar citas disponibles a objetos Doctor y mostrarlas.
        doctor.addAvailableAppointment(new Date(), "4pm");
        doctorTwo.addAvailableAppointment(new Date(), "8am");

        System.out.println(doctor.getAvailableAppointments());
        System.out.println(doctorTwo.getAvailableAppointments());

        // Iteración a través de la lista de citas disponibles y mostrarlas.
        for (Doctor.AvailableAppointment availableAppointment : doctor.getAvailableAppointments()) {
            System.out.println(availableAppointment.getDate() + " " + availableAppointment.getTime());
        }
        for (Doctor.AvailableAppointment availableAppointment : doctorTwo.getAvailableAppointments()) {
            System.out.println(availableAppointment.getDate() + " " + availableAppointment.getTime());
        }

        // Creación de una instancia de la clase Patient y establecimiento de sus atributos.
        Patient patient = new Patient("Joshua", "jsainz@example.com");
        System.out.println(patient.getName());
        System.out.println(patient.getEmail());

        // Establecimiento del peso, la altura y el número de teléfono del paciente y mostrarlos.
        patient.setWeight(60.5);
        patient.setHeight(1.65);

        System.out.println(patient.getWeight());
        System.out.println(patient.getHeight());

        // Validación del número de teléfono del paciente antes de establecerlo.
        patient.setPhoneNumber("12345678");
        System.out.println(patient.getPhoneNumber());
    }
}
