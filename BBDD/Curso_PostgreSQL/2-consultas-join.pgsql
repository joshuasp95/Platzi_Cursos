SELECT
    *
FROM
    pasajero
    JOIN viaje ON (viaje.id_pasajero = pasajero.id);

SELECT
    *
FROM
    pasajero
    LEFT JOIN viaje ON (viaje.id_pasajero = pasajero.id)
WHERE
    viaje.id IS NULL;

-- 1. Consulta para obtener todos los viajes realizados por un pasajero específico
SELECT
    *
FROM
    pasajero
    JOIN viaje ON viaje.id_pasajero = pasajero.id -- Unir la tabla de viajes con la de pasajeros usando la clave foránea
WHERE
    pasajero.nombre LIKE '%o%';

-- Filtrar los resultados por nombre del pasajero
-- 2. Consulta para obtener todos los viajes realizados en un tren específico
SELECT
    *
FROM
    tren
    JOIN trayecto ON trayecto.id_tren = tren.id -- Unir la tabla de trayectos con la de trenes usando la clave foránea
    JOIN viaje ON viaje.id_trayecto = trayecto.id -- Unir la tabla de viajes con la de trayectos usando la clave foránea
WHERE
    tren.modelo LIKE '%u%';

-- Filtrar los resultados por el modelo del tren
-- 3. Consulta para obtener todas las estaciones en las que ha parado un tren específico
SELECT DISTINCT
    estacion.* -- Usamos DISTINCT para evitar duplicados
FROM
    tren
    JOIN trayecto ON trayecto.id_tren = tren.id -- Unir la tabla de trayectos con la de trenes usando la clave foránea
    JOIN estacion ON trayecto.id_estacion = estacion.id -- Unir la tabla de estaciones con la de trayectos usando la clave foránea
WHERE
    tren.modelo LIKE '%a%';

-- Filtrar los resultados por el modelo del tren
-- 4. Consulta para obtener todos los pasajeros que han viajado en un tren específico
SELECT DISTINCT
    pasajero.* -- Usamos DISTINCT para evitar duplicados
FROM
    tren
    JOIN trayecto ON trayecto.id_tren = tren.id -- Unir la tabla de trayectos con la de trenes usando la clave foránea
    JOIN viaje ON viaje.id_trayecto = trayecto.id -- Unir la tabla de viajes con la de trayectos usando la clave foránea
    JOIN pasajero ON viaje.id_pasajero = pasajero.id -- Unir la tabla de viajes con la de pasajeros usando la clave foránea
WHERE
    tren.capacidad > 5000;

-- Filtrar los resultados por la capacidad del tren
-- 5. Consulta para obtener todos los trayectos de una estación en particular
SELECT
    *
FROM
    estacion
    JOIN trayecto ON trayecto.id_estacion = estacion.id -- Unir la tabla de trayectos con la de estaciones usando la clave foránea
WHERE
    estacion.nombre LIKE '%iso%';

-- Filtrar los resultados por el nombre de la estación
