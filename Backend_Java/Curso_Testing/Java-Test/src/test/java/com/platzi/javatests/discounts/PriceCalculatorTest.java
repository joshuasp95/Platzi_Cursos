package com.platzi.javatests.discounts;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class PriceCalculatorTest {
    private static final double DELTA = 1e-9;
    PriceCalculator calculator;

    @Before
    public void setup() {
        calculator = new PriceCalculator();

    }

    @Test
    public void total_zero_where_no_products() {

        assertEquals(0.00, calculator.getTotal(), DELTA);

    }

    @Test

    public void total_sum_of_all_products() {
        calculator.addPrice(10.90);
        calculator.addPrice(15.00);

        assertEquals(25.90, calculator.getTotal(), DELTA);
    }

    @Test
    public void apply_discount_to_prices() {
        calculator.addPrice(12.20);
        calculator.addPrice(25.50);

        calculator.setDiscount(25);

        assertEquals(28.275, calculator.getTotal(), DELTA);
    }
}