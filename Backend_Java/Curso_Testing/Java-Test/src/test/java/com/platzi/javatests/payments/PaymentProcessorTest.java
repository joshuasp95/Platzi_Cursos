package com.platzi.javatests.payments;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

import javax.xml.transform.Result;

import static org.junit.Assert.*;

public class PaymentProcessorTest {

    // Declaración de objetos que se utilizarán en las pruebas
    private PaymentGateway paygateway;
    private PaymentProcessor payprocessor;

    @Before
    public void setup() {
        // Mock del objeto PaymentGateway, se realiza antes de cada prueba
        paygateway = Mockito.mock(PaymentGateway.class);

        // Inicialización del objeto PaymentProcessor con el PaymentGateway mockeado
        payprocessor = new PaymentProcessor(paygateway);
    }

    @Test
    public void payment_is_correct() {
        // Configuración del comportamiento del mock para devolver un estado de pago correcto
        Mockito.when(paygateway.requestPayment(Mockito.any())).thenReturn(new PaymentResponse(PaymentResponse.PaymentStatus.OK));

        // Ejecución del método a probar
        boolean result = payprocessor.makePayment(1000);

        // Verificación de que el resultado es verdadero, lo que indica un pago exitoso
        assertTrue(result);
    }

    @Test
    public void payment_is_wrong() {
        // Configuración del comportamiento del mock para devolver un estado de pago incorrecto
        Mockito.when(paygateway.requestPayment(Mockito.any())).thenReturn(new PaymentResponse(PaymentResponse.PaymentStatus.ERROR));

        // Verificación de que el resultado es falso, lo que indica un pago fallido
        assertFalse(payprocessor.makePayment(1000));
    }
}
