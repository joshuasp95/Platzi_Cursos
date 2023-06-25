use metro_cdmx;

CREATE TABLE
    IF NOT EXISTS estaciones_trigger (
        id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
        name VARCHAR(10) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
    ) DEFAULT CHARSET = UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

INSERT INTO
    estaciones_trigger (name)
VALUES ('Estación 1'), ('Estación 2'), ('Estación 3'), ('Estación 4'), ('Estación 5');

CREATE TRIGGER UPDATE_UPDATED_AT_FIELD 
	before
	UPDATE
	    on estaciones_trigger for each row
	set new.updated_at = now();
ç
CREATE TRIGGER UPDATE_UPDATED_AT_FIELD 
	before
	UPDATE
	    on estaciones for each row
	set new.updated_at = now();

CREATE TRIGGER UPDATE_UPDATED_AT_FIELD 
	before
	UPDATE
	    on lineas for each row
	set new.updated_at = now();

CREATE TRIGGER UPDATE_UPDATED_AT_FIELD 
	before
	UPDATE
	    on lineas_estaciones for each row
	set new.updated_at = now();
