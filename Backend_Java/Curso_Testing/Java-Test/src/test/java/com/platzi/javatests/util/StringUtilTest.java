package com.platzi.javatests.util;


import org.junit.Assert;
import org.junit.Test;

public class StringUtilTest {

    @Test
    public void RepeatZero() {
        Assert.assertEquals("", StringUtil.repeat("hola", 0));
    }

    @Test
    public void RepeatOnce() {
        Assert.assertEquals("hola", StringUtil.repeat("hola", 1));
    }

    @Test
    public void RepeatMoreThanOnce() {
        Assert.assertEquals("holaholahola", StringUtil.repeat("hola", 3));
    }

    @Test(expected = IllegalArgumentException.class)
    public void RepeatNegative() {
        StringUtil.repeat("hola", -1);
    }


}