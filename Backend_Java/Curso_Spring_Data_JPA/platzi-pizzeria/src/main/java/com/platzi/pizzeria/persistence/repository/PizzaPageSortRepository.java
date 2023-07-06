package com.platzi.pizzeria.persistence.repository;

import com.platzi.pizzeria.persistence.entity.PizzaEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.ListPagingAndSortingRepository;

public interface PizzaPageSortRepository extends ListPagingAndSortingRepository<PizzaEntity, Integer> {

    Page<PizzaEntity> findByAvailableTrue(Pageable pageable);

}
