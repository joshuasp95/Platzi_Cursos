package com.platzi.pizzeria.web.controller;

import com.platzi.pizzeria.persistence.entity.OrderEntity;
import com.platzi.pizzeria.persistence.projection.OrderSummary;
import com.platzi.pizzeria.service.OrderService;
import com.platzi.pizzeria.service.dto.RandomOrderDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public ResponseEntity<List<OrderEntity>> getAll() {
        return ResponseEntity.ok(this.orderService.getAll());
    }

    @GetMapping("/customer/{idCustomer}")
    public ResponseEntity<List<OrderEntity>> getCustomerOrders(@PathVariable String idCustomer) {
        return ResponseEntity.ok(this.orderService.getCustomerOrders(idCustomer));
    }

    @GetMapping("/today")
    public ResponseEntity<List<OrderEntity>> getTodayOrders() {
        return ResponseEntity.ok(this.orderService.getTodayOrders());
    }

    @GetMapping("/outside")
    public ResponseEntity<List<OrderEntity>> getOutsideOrders() {
        return ResponseEntity.ok(this.orderService.getOutsideOrders());
    }

    @GetMapping("/summary/{idOrder}")
    public ResponseEntity<OrderSummary> getSummary(@PathVariable int idOrder) {
        return ResponseEntity.ok(this.orderService.getSummary(idOrder));
    }

    @PostMapping("/random")
    public ResponseEntity<Boolean> saveRandomOrder(@RequestBody RandomOrderDto dto) {
        return ResponseEntity.ok(this.orderService.saveRandomOrder(dto));
    }

}
