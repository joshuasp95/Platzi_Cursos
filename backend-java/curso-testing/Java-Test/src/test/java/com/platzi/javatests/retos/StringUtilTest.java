package com.platzi.javatests.retos;

import org.junit.Test;

import static org.junit.Assert.*;

public class StringUtilTest {

    @Test
    public void empty_string() {
        assertTrue(StringUtil.isEmpty(""));
    }

    @Test
    public void string_no_empty() {
        assertFalse(StringUtil.isEmpty("HolaMundo!"));
    }

    @Test
    public void string_equals_null() {
        assertTrue(StringUtil.isEmpty(null));
    }

    @Test
    public void string_only_spaces() {
        assertTrue(StringUtil.isEmpty("   "));
    }

}