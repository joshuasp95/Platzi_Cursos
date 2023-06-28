package com.platzi.javatests.retos;

import org.junit.Test;

import static org.junit.Assert.*;

public class RomanNumbersTest {

    @Test
    public void case_number_equals_1() {
        assertEquals("I", RomanNumbers.arabicToRoman(1));
    }
    @Test
    public void case_number_equals_10() {
        assertEquals("X", RomanNumbers.arabicToRoman(10));
    }

    @Test
    public void case_number_equals_100() {
        assertEquals("C", RomanNumbers.arabicToRoman(100));
    }

    @Test
    public void case_number_equals_77() {
        assertEquals("LXXVII", RomanNumbers.arabicToRoman(77));
    }
    @Test
    public void case_number_equals_277() {
        assertEquals("CCLXXVII", RomanNumbers.arabicToRoman(277));
    }

    @Test
    public void case_number_equals_2327() {
        assertEquals("MMCCCXXVII", RomanNumbers.arabicToRoman(2327));
    }

    @Test
    public void case_number_equals_3540() {
        assertEquals("MMMDXL", RomanNumbers.arabicToRoman(3540));
    }

}