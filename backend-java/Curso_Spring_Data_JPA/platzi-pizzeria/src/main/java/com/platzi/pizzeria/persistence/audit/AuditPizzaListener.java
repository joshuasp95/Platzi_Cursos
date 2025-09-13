package com.platzi.pizzeria.persistence.audit;

import com.platzi.pizzeria.persistence.entity.PizzaEntity;
import jakarta.persistence.PostLoad;
import jakarta.persistence.PostPersist;
import jakarta.persistence.PostUpdate;
import jakarta.persistence.PreRemove;
import org.springframework.util.SerializationUtils;

public class AuditPizzaListener {
    private PizzaEntity currentValue;


    @PostLoad
    public void postLoad(PizzaEntity pizza) {
        System.out.println("POST LOAD");
        this.currentValue = SerializationUtils.clone(pizza);
    }

    @PostPersist
    @PostUpdate
    public void onPostPersist(PizzaEntity pizza) {
        System.out.println("POST PERSIST OR UPDATE");
        System.out.println("OLD VALUE: " + this.currentValue);
        System.out.print("NEW VALUE: ");
        System.out.println(pizza.toString());
    }

    @PreRemove
    public void onPreDelete(PizzaEntity pizza) {
        System.out.println(pizza.toString());
    }

}
