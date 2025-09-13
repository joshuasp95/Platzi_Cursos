use metro_cdmx;

-- Registros para la tabla "conductores"

INSERT INTO
    conductores (name, status)
VALUES ('Conductor 1', true), ('Conductor 2', false), ('Conductor 3', true), ('Conductor 4', false), ('Conductor 5', true);

-- Registros para la tabla "conductores_activos"

INSERT INTO conductores_activos (conductor_id) VALUES (1), (3), (5);