package com.platzi.javatests.util;

import com.platzi.javatests.util.PasswordUtil.SecurityLevel;
import org.junit.Test;

import static org.junit.Assert.*;

public class PasswordUtilTest {

    @Test
    public void weak_less_8_chars() {
        assertEquals(SecurityLevel.WEAK, PasswordUtil.assessPassword("12nums!"));

    }
    @Test
    public void weak_only_letters() {
        assertEquals(SecurityLevel.WEAK, PasswordUtil.assessPassword("sololetrassssssssssssssss"));

    }

    @Test
    public void medium_letters_and_numbers() {
        assertEquals(SecurityLevel.MEDIUM, PasswordUtil.assessPassword("admin1234"));

    }

    @Test
    public void strong_letters_numbers_and_symbols() {
        assertEquals(SecurityLevel.STRONG, PasswordUtil.assessPassword("admin1234_"));

    }

}
