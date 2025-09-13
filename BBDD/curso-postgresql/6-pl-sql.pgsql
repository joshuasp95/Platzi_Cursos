-- Funciones en PL/pgSQL

-- Una función básica en PL/pgSQL. Esta función devuelve la cantidad de pasajeros en la tabla pasajero.

CREATE OR REPLACE FUNCTION contar_pasajeros() 
RETURNS INTEGER AS $$
DECLARE
    cant_pasajeros INTEGER;
BEGIN
    SELECT COUNT(*) INTO cant_pasajeros FROM pasajero;
    RETURN cant_pasajeros;
END; $$
LANGUAGE plpgsql;

-- Para llamar a la función que acabamos de crear:

SELECT contar_pasajeros();

-- Obtener cantidad viajes por tren
CREATE OR REPLACE FUNCTION contar_viajes_tren(tren_id INTEGER)
RETURNS INTEGER AS $$
DECLARE
    cant_viajes_tren INTEGER;
BEGIN
    SELECT COUNT(*) INTO cant_viajes_tren
    FROM viaje 
    JOIN trayecto ON trayecto.id = viaje.id_trayecto
    WHERE trayecto.id_tren = tren_id;
    RETURN cant_viajes_tren;
END; $$
LANGUAGE plpgsql;

-- Obtener capacidad total de todos los trenes
CREATE OR REPLACE FUNCTION capacidad_total_trenes()
RETURNS INTEGER AS $$
DECLARE 
    capacidad_total INTEGER;
BEGIN
    SELECT SUM(capacidad) INTO capacidad_total
    FROM tren:
    RETURN capacidad_total;
END; $$
LANGUAGE plpgsql;

-- Obtener cantidad de estaciones por las que pasa un tren
CREATE OR REPLACE FUNCTION cantidad_estaciones_tren(tren_id INTEGER)
RETURNS INTEGER AS $$
DECLARE 
    cant_estaciones_tren INTEGER;
BEGIN
-- Para evitar duplicadades se pone distinct
    SELECT COUNT(DISTINCT id_estacion) INTO cant_estaciones_tren
    FROM trayecto
    WHERE id_tren = tren_id;
    RETURN cant_estaciones_tren; 
END; $$
LANGUAGE plpgsql;

-- Desencadenantes (Triggers) en PL/pgSQL

-- Un trigger se utiliza para ejecutar una función cuando ocurre un evento particular en la tabla.
-- Vamos a crear un trigger que registra los cambios en la tabla pasajero.

-- Primero, creamos la tabla para almacenar los registros de auditoría:

CREATE TABLE auditoria_pasajero (
    operacion CHAR(1) NOT NULL,
    fecha TIMESTAMP NOT NULL,
    id_pasajero INTEGER NOT NULL,
    nombre_pasajero VARCHAR(100),
    direccion_pasajero VARCHAR,
    fecha_nacimiento_pasajero DATE
);

-- Ahora creamos una función que se ejecutará cuando se active el trigger.

CREATE OR REPLACE FUNCTION auditoria_pasajero_func() RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'DELETE') THEN
        INSERT INTO auditoria_pasajero SELECT 'D', now(), OLD.*;
        RETURN OLD;
    ELSIF (TG_OP = 'UPDATE') THEN
        INSERT INTO auditoria_pasajero SELECT 'U', now(), NEW.*;
        RETURN NEW;
    ELSIF (TG_OP = 'INSERT') THEN
        INSERT INTO auditoria_pasajero SELECT 'I', now(), NEW.*;
        RETURN NEW;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Finalmente, creamos el trigger que llamará a la función anterior cuando se realice una operación en la tabla pasajero.

CREATE TRIGGER auditoria_pasajero_trig
AFTER INSERT OR UPDATE OR DELETE ON pasajero
FOR EACH ROW EXECUTE PROCEDURE auditoria_pasajero_func();



-- Función para contar los viajes de un pasajero especifico.
-- Esta función toma el ID del pasajero como argumento y devuelve la cantidad de viajes que ha realizado.

CREATE OR REPLACE FUNCTION contar_viajes(pasajero_id INTEGER) 
RETURNS INTEGER AS $$
DECLARE
    cant_viajes INTEGER;
BEGIN
    SELECT COUNT(*) INTO cant_viajes FROM viaje WHERE id_pasajero = pasajero_id;
    RETURN cant_viajes;
END; $$
LANGUAGE plpgsql;

-- Para llamar a la función y contar los viajes realizados por el pasajero con ID 1, por ejemplo, puedes usar el siguiente comando:

SELECT contar_viajes(1);
