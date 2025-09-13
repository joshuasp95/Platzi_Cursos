package com.app.test;

public class Main {

    public static void main(String[] args) {

        Person person1 = new Person("Joshua", 28);

        Person person2 = new Person("John", 22);

        System.out.println(person1);
        System.out.println(person2);

        System.out.println(person2 == person1);
        System.out.println(person1.equals(person2));


        person1 = person2;
        person1.setAge(25);

        System.out.println(person1);
        System.out.println(person2);

        System.out.println(person2 == person1);
        System.out.println(person1.equals(person2));

        String word1 = "hola" + 2;
        String word2 = "hola" + 2;

        System.out.println(word1 == word2);

        Integer num1 = new Integer(5);
        Integer num2 = new Integer(5);
        System.out.println(num1 == num2);
        // Esto compara las referencias de objeto, no los valores.
        System.out.println(num1.equals(num2));

    }
}
