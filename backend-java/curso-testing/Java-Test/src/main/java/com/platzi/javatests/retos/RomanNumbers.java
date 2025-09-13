package com.platzi.javatests.retos;

public class RomanNumbers {

    public static String arabicToRoman(int number) {
        String romanNumber = "";

        while (number >= 1000) {
            romanNumber += "M";
            number -= 1000;
        }
        if (number >= 900) {
            romanNumber += "CM";
            number -= 900;
        }
        if (number >= 500) {
            romanNumber += "D";
            number -= 500;
        }
        if (number >= 400) {
            romanNumber += "CD";
            number -= 400;
        }
        while (number >= 100) {
            romanNumber += "C";
            number -= 100;
        }
        if (number >= 90) {
            romanNumber += "XC";
            number -= 90;
        }
        if (number >= 50) {
            romanNumber += "L";
            number -= 50;
        }
        if (number >= 40) {
            romanNumber += "XL";
            number -= 40;
        }
        while (number >= 10) {
            romanNumber += "X";
            number -= 10;
        }
        if (number >= 9) {
            romanNumber += "IX";
            number -= 9;
        }
        if (number >= 5) {
            romanNumber += "V";
            number -= 5;
        }
        if (number >= 4) {
            romanNumber += "IV";
            number -= 4;
        }
        while (number >= 1) {
            romanNumber += "I";
            number -= 1;
        }


        return romanNumber;
    }
}
