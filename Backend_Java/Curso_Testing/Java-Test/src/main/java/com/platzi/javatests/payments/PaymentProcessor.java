package com.platzi.javatests.payments;

public class PaymentProcessor {
    private PaymentGateway paymentGateway;

    public PaymentProcessor(PaymentGateway paymentGateway) {
        this.paymentGateway = paymentGateway;
    }

    public boolean makePayment(double amount) {
        PaymentResponse payresponse = paymentGateway.requestPayment(new PaymentRequest(amount));
        if (payresponse.getStatus() == PaymentResponse.PaymentStatus.OK) {
            return true;
        } else {
            return false;
        }
    }

}
