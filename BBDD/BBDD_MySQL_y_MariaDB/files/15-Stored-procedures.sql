use metro_cdmx;

DELIMITER // -- para sentencias sql que usan begin y end

CREATE PROCEDURE CALCULATE_DISTANCE_BETWEEN_LINES(IN 
ESTACION_1 POINT, IN ESTACION_2 POINT, IN METERS BOOLEAN
) BEGIN 
	IF meters THEN
	SELECT
	    ST_Distance_Sphere(ESTACION_1, ESTACION_2) as "Distance in meters";
	ELSE
	SELECT
	    ST_Distance_Sphere(ESTACION_1, ESTACION_2) / 1000 as "Distance in kilometers";
	END IF;
	END // 


DELIMITER ;