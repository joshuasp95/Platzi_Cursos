use metro_cdmx;

DELIMITER / / --DEVOLVER ESTACIONES DE UNA LINEA

CREATE PROCEDURE GET_LINE_STATIONS(IN LINE_NAME VARCHAR
(15)) BEGIN 
	-- Guardar valores de una consulta dentro de una variable
	DECLARE LINE_ID BIGINT(20);
	SELECT id INTO LINE_ID
	FROM lineas
	WHERE
	    NAME = LINE_NAME COLLATE UTF8MB4_UNICODE_CI;
	-- Esta es otra forma de guardar valores dentro de una variable
	SET
	    @sql = CONCAT(
	        "SELECT lineas_estaciones.ID AS RELATION_ID,
													    lineas.NAME AS LINE_NAMES, estaciones.NAME AS STATION_NAME FROM lineas_estaciones
													    INNER JOIN estaciones ON estaciones.ID = lineas_estaciones.PIVOT_ESTACION_ID
													    INNER JOIN lineas ON lineas.ID = lineas_estaciones.PIVOT_LINEA_ID
												        WHERE lineas_estaciones.PIVOT_LINEA_ID = ",
	        LINE_ID,
	        ";"
	    );
	PREPARE stmt FROM @sql;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;
	END / / 


DELIMITER ;