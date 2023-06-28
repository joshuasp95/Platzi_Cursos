package com.platzi.javatests.player;

import org.junit.Test;
import org.mockito.Mockito;

import static org.junit.Assert.*;

public class PlayerTest {

    @Test
    public void player_loses_under_min_number() {
        // Mock del objeto Dice
        Dice dice = Mockito.mock(Dice.class);

        // Configuración del comportamiento del mock para devolver un número 2 al tirar el dado
        Mockito.when(dice.roll()).thenReturn(2);

        // Creación del objeto Player con el número mínimo para ganar mayor que el número que se obtiene al tirar el dado
        Player player = new Player(dice, 3);

        // Verificación de que el resultado es falso, lo que indica que el jugador pierde
        assertFalse(player.play());
    }

    @Test
    public void player_loses_bigger_min_number() {
        // Mock del objeto Dice
        Dice dice = Mockito.mock(Dice.class);

        // Configuración del comportamiento del mock para devolver un número 4 al tirar el dado
        Mockito.when(dice.roll()).thenReturn(4);

        // Creación del objeto Player con el número mínimo para ganar menor que el número que se obtiene al tirar el dado
        Player player = new Player(dice, 3);

        // Verificación de que el resultado es verdadero, lo que indica que el jugador gana
        assertTrue(player.play());
    }
}
