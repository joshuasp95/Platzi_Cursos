package com.platzi.javatests.player;

import java.util.Random;

public class Dice {
    private int sides;

    public Dice(int sides) {
        this.sides = sides;
    }

    public int roll() {
        int randomNumber = new Random().nextInt(sides) + 1;
        System.out.println("Random number value --> " + randomNumber);
        return randomNumber;
    }
}
