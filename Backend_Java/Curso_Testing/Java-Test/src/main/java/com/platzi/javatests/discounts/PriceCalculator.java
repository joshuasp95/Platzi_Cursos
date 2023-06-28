package com.platzi.javatests.discounts;

import java.util.ArrayList;
import java.util.List;

public class PriceCalculator {

    private List<Double> prices = new ArrayList<>();
    private double discount;

    public void addPrice(double price) {
        prices.add(price);
    }

    public void setDiscount(double discount) {
        this.discount = discount;
    }

    public double getTotal() {
        double resultado = 0.00;
        for (Double price : prices) {
            resultado += price;
        }
        if (this.discount >= 0) {
            resultado = resultado - (resultado * this.discount / 100);
        }
        return resultado;
    }


}
