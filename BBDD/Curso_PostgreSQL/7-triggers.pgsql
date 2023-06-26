-- TRIGGER para comprobar la capacidad del tren antes de insertar un nuevo viaje: Este "trigger" se activará antes de que se inserte un nuevo viaje en la tabla viaje. Comprobará si el tren tiene capacidad para más pasajeros. Si NO es así,
-- la inserción se cancelará y se lanzará una excepción.


CREATE OR REPLACE FUNCTION verificar_capacidad_tren()
    RETURNS TRIGGER
    AS $$
DECLARE
    capacidad_tren integer;
    ocupacion_actual integer;
BEGIN
    SELECT
        capacidad INTO capacidad_tren
    FROM
        tren
        JOIN trayecto ON (tren.id = trayecto.id_tren)
    WHERE
        trayecto.id = NEW.id_trayecto;
    SELECT
        COUNT(*) INTO ocupacion_actual
    FROM
        viaje
    WHERE
        id_trayecto = NEW.id_trayecto
        AND fin IS NULL;
    IF ocupacion_actual >= capacidad_tren THEN
        RAISE EXCEPTION 'El tren está lleno';
    END IF;
    RETURN NEW;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER comprobar_capacidad_tren
    BEFORE INSERT ON viaje
    FOR EACH ROW
    EXECUTE FUNCTION verificar_capacidad_tren();

-- Trigger para comprobar los registros de pasajeros

-- Elimina la función si ya existe
DROP FUNCTION IF EXISTS public.pasajerospl();

-- Crea o reemplaza la función
CREATE OR REPLACE FUNCTION public.pasajerospl()
    -- Retorna un tipo trigger
    RETURNS trigger
    -- Se declara que el lenguaje utilizado es 'plpgsql'
    LANGUAGE 'plpgsql'
    -- Estima el costo de ejecución de la función
    COST 100
    -- Define la función como VOLATILE, lo que indica que puede tener efectos secundarios y que no puede ser optimizada
    VOLATILE NOT LEAKPROOF
AS $BODY$
DECLARE
    -- Declara las variables
	rec record;
    contador integer := 0;
BEGIN
    -- Entra en un bucle que recorre todos los registros de la tabla pasajero
    FOR rec IN SELECT * FROM pasajero LOOP
        -- Aumenta el contador por cada registro
		contador := contador + 1;
	END LOOP;
	-- Inserta el contador y la hora actual en la tabla cont_pasajeros
	INSERT INTO cont_pasajeros (total, creado) 
	VALUES (contador, now());
	-- Retorna el nuevo registro
	RETURN NEW;
END
$BODY$;

-- Cambia el dueño de la función a 'theguardian'
ALTER FUNCTION public.pasajerospl()
    OWNER TO theguardian;

-- Crea un trigger que se activa después de cada inserción en la tabla 'pasajero'
CREATE TRIGGER trigger_pasajeros
    AFTER INSERT
    ON public.pasajero
    FOR EACH ROW
    -- Llama a la función 'pasajerospl' cada vez que se inserta un registro
    EXECUTE FUNCTION public.pasajerospl();

-- Para llevar el registro de pasajeros eliminados

-- Elimina la función si ya existe
DROP FUNCTION IF EXISTS public.pasajerospl_delete();

-- Crea o reemplaza la función
CREATE OR REPLACE FUNCTION public.pasajerospl_delete()
    -- Retorna un tipo trigger
    RETURNS trigger
    -- Se declara que el lenguaje utilizado es 'plpgsql'
    LANGUAGE 'plpgsql'
    -- Estima el costo de ejecución de la función
    COST 100
    -- Define la función como VOLATILE, lo que indica que puede tener efectos secundarios y que no puede ser optimizada
    VOLATILE NOT LEAKPROOF
AS $BODY$
DECLARE
    -- Declara las variables
	rec record;
    contador integer := 0;
BEGIN
    -- Entra en un bucle que recorre todos los registros de la tabla pasajero
    FOR rec IN SELECT * FROM pasajero LOOP
        -- Aumenta el contador por cada registro
		contador := contador + 1;
	END LOOP;
	-- Inserta el contador y la hora actual en la tabla cont_pasajeros
	INSERT INTO cont_pasajeros (total, creado) 
	VALUES (contador, now());
	-- Retorna el nuevo registro
	RETURN OLD;
END
$BODY$;

-- Cambia el dueño de la función a 'theguardian'
ALTER FUNCTION public.pasajerospl_delete()
    OWNER TO theguardian;

-- Crea un trigger que se activa después de cada DELETE en la tabla 'pasajero'
CREATE TRIGGER trigger_pasajeros_delete
    AFTER DELETE
    ON public.pasajero
    FOR EACH ROW
    -- Llama a la función 'pasajerospl_delete' cada vez que se elimina un registro
    EXECUTE FUNCTION public.pasajerospl_delete();
