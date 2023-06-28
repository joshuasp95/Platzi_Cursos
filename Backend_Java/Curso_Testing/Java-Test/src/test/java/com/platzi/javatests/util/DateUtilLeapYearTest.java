package com.platzi.javatests.util;

import org.junit.Test;

import static org.junit.Assert.*;

public class DateUtilLeapYearTest {

    /*
    All years divisible by 400 ARE Leap years (1600, 2000, 2400)
    All years divisible by 100 but not by 400 are NOT leap years (1700, 1800, 1900),
    All years divisible by 4 but not by 100 ARE 1eap years (1996, 2004, 2008),
    All years not divisible by 4 are NOT Leap years (2017, 2018, 2019)
     */
    @Test
    public void return_true_when_divisible_by_400() {
        //All years divisible by 400 ARE Leap years (1600, 2000, 2400)

        int[] testYears = {1600, 2000, 2400};

        for (int i = 0; i < testYears.length; i++) {
            assertTrue(DateUtilLeapYear.isLeapYear(testYears[i]));
        }
    }

    @Test
    public void return_false_when_divisible_by_100_not_400() {
        //All years divisible by 100 but not by 400 are NOT leap years (1700, 1800, 1900),

        int[] testYears = {1700, 1800, 1900};

        for (int i = 0; i < testYears.length; i++) {
            assertFalse(DateUtilLeapYear.isLeapYear(testYears[i]));
        }
    }


    @Test
    public void return_true_when_divisible_by_4_not_100() {
        //All years divisible by 4 but not by 100 ARE 1eap years (1996, 2004, 2008),

        int[] testYears = {1996, 2004, 2008};

        for (int i = 0; i < testYears.length; i++) {
            assertTrue(DateUtilLeapYear.isLeapYear(testYears[i]));
        }
    }

    @Test
    public void return_false_when_not_divisible_by_4() {
        //All years not divisible by 4 are NOT Leap years (2017, 2018, 2019)

        int[] testYears = {2017, 2018, 2019};

        for (int i = 0; i < testYears.length; i++) {
            assertFalse(DateUtilLeapYear.isLeapYear(testYears[i]));
        }
    }


}