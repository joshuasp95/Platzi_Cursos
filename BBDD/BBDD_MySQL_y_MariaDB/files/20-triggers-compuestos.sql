use metro_cdmx;

DELIMITER //

CREATE TRIGGER UPDATE_ACTIVE_DRIVERS AFTER UPDATE ON 
conductores FOR EACH ROW BEGIN 
	IF NEW.status = 1 THEN
	INSERT INTO
	    conductores_activos (conductor_id)
	values (NEW.id);
	ELSE delete from conductores_activos where conductor_id = NEW.id;
	END IF;
END; // 

DELIMITER ;