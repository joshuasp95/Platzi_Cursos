use metro_cdmx;
CREATE TABLE IF NOT EXISTS estaciones_copia (
    id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) DEFAULT CHARSET = UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;
INSERT INTO estaciones_copia (name)
VALUES ('Estacion1');
INSERT INTO estaciones_copia (name)
VALUES ('Estacion2');
INSERT INTO estaciones_copia (name)
VALUES ('Estacion3');
INSERT INTO estaciones_copia (name)
VALUES ('Estacion4');
INSERT INTO estaciones_copia (name)
VALUES ('Estacion5');
select *
from estaciones_copia;
--MODO DELETE NO RESTABLECE LOS IDs, MANTIENE EL AUTOINCREMENT
-- delete from estaciones_copia;
-- MODO TRUNCATE SI RESTABLECE LOS IDs
truncate table estaciones_copia;