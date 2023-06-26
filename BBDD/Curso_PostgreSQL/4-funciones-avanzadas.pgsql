-- 1. COALESCE: Esta función devuelve el primer valor no NULL en la lista de argumentos.

SELECT COALESCE(nombre, 'Sin nombre') FROM pasajero;
-- Si el nombre es NULL, 'Sin nombre' se mostrará en su lugar.


-- 2. NULLIF: Esta función devuelve NULL si los dos argumentos son iguales, de lo contrario devuelve el primer argumento.

SELECT NULLIF(nombre, 'Sin nombre') FROM pasajero;
-- Si el nombre es 'Sin nombre', el resultado será NULL.


-- 3. GREATEST: Esta función devuelve el mayor de los argumentos.

SELECT GREATEST(1, id) FROM pasajero;
-- Compara el id del pasajero con 1 y devuelve el mayor.


-- 4. LEAST: Esta función devuelve el menor de los argumentos.

SELECT LEAST(1, id) FROM pasajero;
-- Compara el id del pasajero con 1 y devuelve el menor.


-- 5. BLOQUES ANONIMOS: Permiten usar lógica condicional y de control en nuestras consultas SQL.
-- Estos bloques deben ser ejecutados usando una función o procedimiento almacenado, por lo que no pueden ejecutarse directamente en la línea de comandos o en pgAdmin.

DO $$
BEGIN
   IF (SELECT COUNT(*) FROM pasajero) > 0 THEN
      RAISE NOTICE 'Hay pasajeros en la tabla.';
   ELSE
      RAISE NOTICE 'No hay pasajeros en la tabla.';
   END IF;
END $$;
-- Este bloque verificará si hay filas en la tabla 'pasajero'. Si hay, mostrará el mensaje 'Hay pasajeros en la tabla.', de lo contrario, mostrará 'No hay pasajeros en la tabla.'.


-- CONSULTA AVANZADA


SELECT ID,
	NOMBRE, 
	CASE WHEN nombre ILIKE '%a%' then 'Tiene una a en el nombre' 
	WHEN nombre ILIKE '%e%' then 'Tiene una e en el nombre' 
	WHEN nombre ILIKE '%i%' then 'Tiene una i en el nombre' 
	WHEN nombre ILIKE '%o%' then 'Tiene una o en el nombre' 
	WHEN nombre ILIKE '%u%' then 'Tiene una u en el nombre'
	ELSE 'Sin vocales' END AS comienzo, fecha_nacimiento, 
	CASE WHEN (current_date - FECHA_NACIMIENTO) > 9570 then 'Mayor de edad' 
	ELSE 'Menor de edad' 
	END AS mayores
FROM PUBLIC.PASAJERO;