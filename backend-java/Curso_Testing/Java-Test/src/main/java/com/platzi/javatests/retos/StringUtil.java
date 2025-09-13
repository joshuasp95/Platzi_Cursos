package com.platzi.javatests.retos;

public class StringUtil {
    public static boolean isEmpty(String str) {
        // si es null devolvemos true
        if (str == null) {
            return true;
        }
        //Eliminamos los espacios al principio y al final de la cadena de texto
        str = str.trim();

        if (str.equals("")) {
            return true;
        }
        return false;
    }
}
