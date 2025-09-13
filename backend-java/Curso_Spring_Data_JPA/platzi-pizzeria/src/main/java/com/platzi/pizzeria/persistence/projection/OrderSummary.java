package com.platzi.pizzeria.persistence.projection;

import java.time.LocalDateTime;

public interface OrderSummary {
    Integer getIdOrder();

    String getCustomerName();

    LocalDateTime getOrderDate();

    Double getOrderTotalPrice();

    String getPizzaNames();
}
