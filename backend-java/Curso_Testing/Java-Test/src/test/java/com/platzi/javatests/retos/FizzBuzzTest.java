package com.platzi.javatests.retos;

import org.junit.Test;

import static org.junit.Assert.*;

public class FizzBuzzTest {
    private int[] numbers = new int[1000];

    @Test
    public void caseReturnFizz() {

        for (int i = 2; i < numbers.length; i += 2) {
            if (i % 3 == 0 && i % 5 != 0) {
                assertEquals("Fizz", FizzBuzz.fizzBuzz(i));
            }
        }

    }
    @Test
    public void caseReturnBuzz() {
        for (int i = 2; i <numbers.length; i += 2) {
            if (i % 3 != 0 && i % 5 == 0) {
                assertEquals("Buzz", FizzBuzz.fizzBuzz(i));
            }
        }

    }
    @Test
    public void caseReturnFizzBuzz() {
        for (int i = 2; i < numbers.length; i += 2) {
            if (i % 3 == 0 && i % 5 == 0) {
                assertEquals("FizzBuzz", FizzBuzz.fizzBuzz(i));
            }
        }

    }
}