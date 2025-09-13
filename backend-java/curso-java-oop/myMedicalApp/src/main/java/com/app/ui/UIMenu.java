package com.app.ui;

import java.util.Scanner;

public class UIMenu {

    public final static String[] MONTHS = {"Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"
            , "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"};

    public static void showMenu() {

        System.out.println("*** Welcome ***");
        System.out.println("Selecciona una opcion");

        Scanner sc = new Scanner(System.in);

        int response = 0;

        do {
            System.out.println("1. Doctor");
            System.out.println("2. Patient");
            System.out.println("0. Salir");

            response = Integer.valueOf(sc.nextLine());

            switch (response) {
                case 1:
                    System.out.println("Doctor");
                    break;

                case 2:
                    response = 0;
                    showPatientMenu();
                    break;
                case 0:
                    System.out.println("Goodbye!");
                    break;
                default:
                    System.out.println("Please select a correct option");

            }


        } while (response != 0);
    }

    public static void showPatientMenu() {
        int response = 0;

        Scanner sc = new Scanner(System.in);

        do {
            System.out.println("\n");
            System.out.println("Patient");
            System.out.println("1. Book an appointment");
            System.out.println("2. My appointments");
            System.out.println("0. Return");

            response = Integer.valueOf(sc.nextLine());

            switch (response) {
                case 1:
                    System.out.println("::Book an appointment");
                    bookAppointment();
                    break;
                case 2:
                    System.out.println("::My appointments");
                    break;
                case 0:
                    showMenu();
                    break;
                default:
                    System.out.println("Select a correct option");
                    break;
            }

        } while (response != 0);

    }

    static void bookAppointment() {
        int i = 0;
        for (String month : MONTHS) {
            i++;
            System.out.println(i + "." + month);
            if (i == 3) {
                break;
            }
        }
    }
}
