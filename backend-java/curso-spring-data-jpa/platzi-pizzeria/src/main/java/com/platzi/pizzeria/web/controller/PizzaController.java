package com.platzi.pizzeria.web.controller;

import com.platzi.pizzeria.persistence.entity.PizzaEntity;
import com.platzi.pizzeria.service.PizzaService;
import com.platzi.pizzeria.service.dto.UpdatePizzaPriceDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pizzas")
public class PizzaController {

    private final PizzaService pizzaService;

    @Autowired
    public PizzaController(PizzaService pizzaService) {
        this.pizzaService = pizzaService;
    }

    @GetMapping
    public ResponseEntity<Page<PizzaEntity>> getAll(@RequestParam(defaultValue = "0") int page,
                                                    @RequestParam(defaultValue = "8") int elements) {
        return ResponseEntity.ok(this.pizzaService.getAll(page, elements));
    }

    @GetMapping("/{idPizza}")
    public ResponseEntity<PizzaEntity> get(@PathVariable int idPizza) {
        return this.pizzaService.exists(idPizza) ?
                ResponseEntity.ok(this.pizzaService.get(idPizza))
                : ResponseEntity.notFound().build();
    }

    @GetMapping("/available")
    public ResponseEntity<List<PizzaEntity>> getAvailable() {
        return ResponseEntity.ok(this.pizzaService.getAvailable());
    }

    @GetMapping("/availablePage")
    public ResponseEntity<Page<PizzaEntity>> getAvailablePage(@RequestParam(defaultValue = "0") int page,
                                                              @RequestParam(defaultValue = "8") int elements,
                                                              @RequestParam(defaultValue = "price") String sortBy,
                                                              @RequestParam(defaultValue = "ASC") String sortDirection) {
        return ResponseEntity.ok(this.pizzaService.getAvailablePage(page, elements, sortBy, sortDirection));
    }

    @GetMapping("/singleName/{name}")
    public ResponseEntity<PizzaEntity> getSingle(@PathVariable String name) {
        PizzaEntity pizza = this.pizzaService.getByNameSingle(name);
        if (pizza != null) {
            return ResponseEntity.ok(this.pizzaService.getByNameSingle(name));
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @GetMapping("/name/{name}")
    public ResponseEntity<PizzaEntity> get(@PathVariable String name) {
        return ResponseEntity.ok(this.pizzaService.getByName(name));

    }

    @GetMapping("/with/{ingredient}")
    public ResponseEntity<List<PizzaEntity>> getWith(@PathVariable String ingredient) {
        return ResponseEntity.ok(this.pizzaService.getWith(ingredient));
    }

    @GetMapping("/without/{ingredient}")
    public ResponseEntity<List<PizzaEntity>> getWithout(@PathVariable String ingredient) {
        return ResponseEntity.ok(this.pizzaService.getWithout(ingredient));
    }

    @GetMapping("/vegan")
    public ResponseEntity<Integer> getNumTotalVegan() {
        return ResponseEntity.ok(this.pizzaService.getNumTotalVegan());
    }

    @GetMapping("/cheapest/{price}")
    public ResponseEntity<List<PizzaEntity>> getCheapest(@PathVariable double price) {
        return ResponseEntity.ok(this.pizzaService.getCheapest(price));
    }

    @PostMapping("/save")
    public ResponseEntity<PizzaEntity> add(@RequestBody PizzaEntity pizza) {
        if (pizza.getIdPizza() == null || !this.pizzaService.exists(pizza.getIdPizza())) {
            return ResponseEntity.ok(this.pizzaService.save(pizza));
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/save")
    public ResponseEntity<PizzaEntity> update(@RequestBody PizzaEntity pizza) {
        return pizza.getIdPizza() != null &&
                this.pizzaService.exists(pizza.getIdPizza()) ?
                ResponseEntity.ok(this.pizzaService.save(pizza)) :
                ResponseEntity.badRequest().build();
    }

    @PutMapping("/update")
    public ResponseEntity<Void> updatePrice(@RequestBody UpdatePizzaPriceDto dto) {
        if (this.pizzaService.exists(dto.getPizzaId())) {
            this.pizzaService.updatePrice(dto);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/{idPizza}")
    public ResponseEntity<Void> delete(@PathVariable int idPizza) {
        if (this.pizzaService.exists(idPizza)) {
            this.pizzaService.delete(idPizza);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}
