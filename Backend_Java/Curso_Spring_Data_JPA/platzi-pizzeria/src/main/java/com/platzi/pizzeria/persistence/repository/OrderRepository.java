package com.platzi.pizzeria.persistence.repository;

import com.platzi.pizzeria.persistence.entity.OrderEntity;
import com.platzi.pizzeria.persistence.projection.OrderSummary;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface OrderRepository extends ListCrudRepository<OrderEntity, Integer> {

    List<OrderEntity> findAllByDateAfter(LocalDateTime date);

    List<OrderEntity> findAllByMethodIn(List<String> methods);

    @Query(value = "select * from pizza_order where id_customer = :idCustomer", nativeQuery = true)
    List<OrderEntity> findCustomersOrders(@Param("idCustomer") String idCustomer);

    @Query(value = "SELECT po.id_order                AS idOrder,          cu.name\n" +
            "       AS customerName,          po.date                    AS orderDate,\n" +
            " po.total                   AS orderTotalPrice,          GROUP_CONCAT(pi.name)\n" +
            " AS pizzaNames     FROM pizza_order po          " +
            "INNER JOIN customer cu ON po.id_customer = cu.id_customer          " +
            "INNER JOIN order_item oi ON po.id_order = oi.id_order          " +
            "INNER JOIN pizza pi ON oi.id_pizza = pi.id_pizza    " +
            "WHERE po.id_order = :orderId GROUP BY po.id_order,          cu.name,          " +
            "po.date,          po.total; \n", nativeQuery = true)
    OrderSummary findSummary(@Param("orderId") int orderId);

    @Procedure(value = "take_random_pizza_order", outputParameterName = "order_taken")
    boolean saveRandomOrder(@Param("id_customer") String idCustomer, @Param("method") String method);

}
