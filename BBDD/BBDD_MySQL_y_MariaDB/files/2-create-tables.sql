use metro_cdmx;
CREATE TABLE IF NOT EXISTS lineas (
    id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    color VARCHAR(15) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) DEFAULT CHARSET = UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;
CREATE TABLE IF NOT EXISTS trenes (
    serial_number VARCHAR(10) NOT NULL,
    linea_id BIGINT(20) NOT NULL,
    type TINYINT(4) NOT NULL,
    year INT(4) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (serial_number),
    CONSTRAINT fk_linea_id FOREIGN KEY (linea_id) REFERENCES lineas (id)
) DEFAULT CHARSET = UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;
CREATE TABLE IF NOT EXISTS estaciones (
    id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) DEFAULT CHARSET = UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;