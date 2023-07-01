package com.platzi.market.persistence.crud;

import com.platzi.market.persistence.entity.Producto;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface ProductoCrudRepository extends CrudRepository<Producto, Integer> {

    List<Producto> findByIdCategoriaOrderByNombreAsc(int idCategoria);

    Optional<List<Producto>> findByCantidadStockLessThanAndEstado(int cantidadStock, boolean estado);

    List<Producto> findByPrecioVentaGreaterThan(double cantidad);

    // Buscar productos por su estado
    List<Producto> findByEstado(boolean estado);

    //Usando sentencias SQL

    /*@Query(value = "SELECT* FROM productos WHERE id_categoria = ?", nativeQuery = true)
    List<Producto> getProductoByCategoria(int idCategoria);*/

}
