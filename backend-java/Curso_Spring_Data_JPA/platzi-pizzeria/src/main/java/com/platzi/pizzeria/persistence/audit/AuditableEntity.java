package com.platzi.pizzeria.persistence.audit;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;


import java.time.LocalDateTime;

@MappedSuperclass
public class AuditableEntity {
    @Column(name = "created_at")
    @CreatedDate
    private LocalDateTime createdDate;
    @Column(name = "modified_at")
    @LastModifiedDate
    private LocalDateTime modifiedDate;

}
