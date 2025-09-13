package com.app.oop;

import com.app.oop.model.Doctor;
import com.app.oop.model.Patient;
import com.app.oop.model.User;

import java.util.Date;

/**
 * Clase principal que contiene el método main para ejecutar la aplicación.
 */
public class Main {
    public static void main(String[] args) {

        System.out.println("**** DOCTOR *****");
        // Creación de una instancia de Doctor con un constructor que recibe nombre y especialidad.
        Doctor doctor = new Doctor("Joshua Sainz Palacios", "jsainz@example.com", "Neurology");
        doctor.showSpeciality();

        // Agregar citas disponibles a objetos Doctor y mostrarlas.
        doctor.addAvailableAppointment(new Date(), "4pm");

        System.out.println(doctor.getAvailableAppointments());

        // Iteración a través de la lista de citas disponibles y mostrarlas.
        for (Doctor.AvailableAppointment availableAppointment : doctor.getAvailableAppointments()) {
            System.out.println(availableAppointment.getDate() + " " + availableAppointment.getTime());
        }

        System.out.println("***** PATIENT *****");
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

        User user = new User("joshua", "jsainz@example.com");
        System.out.println(user);

        Patient patient1 = new Patient("joshua", "jsainz@example.com");
        System.out.println(patient1);

        doctor.addAvailableAppointment(new Date(), "8AM");

        System.out.println(doctor);
    }
}
