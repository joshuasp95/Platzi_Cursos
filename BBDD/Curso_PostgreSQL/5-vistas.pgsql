-- CREAR VISTAS VOLATILES

-- Las vistas son una forma conveniente de agrupar consultas que se usan frecuentemente para poder ser reutilizadas.
-- Una vista siempre muestra datos frescos porque la consulta se ejecuta cada vez que se accede a la vista.

-- Crear una vista que muestre todos los pasajeros que tienen más de 25 años.

CREATE VIEW pasajeros_mayores_25 AS 
SELECT * FROM pasajero
WHERE date_part('year', AGE(fecha_nacimiento)) > 25;

-- Ahora puedes seleccionar de esta vista como si fuera una tabla regular.

SELECT * FROM pasajeros_mayores_25;


-- CREAR VISTAS MATERIALIZADAS

-- Las vistas materializadas son similares a las vistas regulares pero almacenan el resultado de la consulta en el disco como una tabla física para un acceso más rápido.
-- Dado que los resultados se almacenan, los datos no siempre son frescos. Para refrescar los datos, necesitas refrescar la vista materializada.

-- Crear una vista materializada que muestre todos los pasajeros que tienen más de 25 años.

CREATE MATERIALIZED VIEW pasajeros_mayores_25_mat AS 
SELECT * FROM pasajero
WHERE date_part('year', AGE(fecha_nacimiento)) > 25;

-- Para refrescar los datos en la vista materializada, utiliza REFRESH MATERIALIZED VIEW.

REFRESH MATERIALIZED VIEW pasajeros_mayores_25_mat;

-- Ahora puedes seleccionar de esta vista materializada como si fuera una tabla regular.

SELECT * FROM pasajeros_mayores_25_mat;
