use metro_cdmx;
-- insert into lineas_estaciones (pivot_linea_id, pivot_estacion_id)
-- VALUES (
--         (
--             select lineas.id
--             from lineas
--             where lineas.name = "Linea 9"
--         ),
--         (
--             select estaciones.id
--             from estaciones
--             where estaciones.name = "Lázaro Cárdenas"
--         )
--     ),
--     (
--         (
--             select lineas.id
--             from lineas
--             where lineas.name = "Linea 6"
--         ),
--         (
--             select estaciones.id
--             from estaciones
--             where estaciones.name = "Ferrería"
--         )
--     ),
--     (
--         (
--             select lineas.id
--             from lineas
--             where lineas.name = "Linea 1"
--         ),
--         (
--             select estaciones.id
--             from estaciones
--             where estaciones.name = "Pantitlán"
--         )
--     ),
--     (
--         (
--             select lineas.id
--             from lineas
--             where lineas.name = "Linea 2"
--         ),
--         (
--             select estaciones.id
--             from estaciones
--             where estaciones.name = "Tacuba"
--         )
--     ),
--     (
--         (
--             select lineas.id
--             from lineas
--             where lineas.name = "Linea 6"
--         ),
--         (
--             select estaciones.id
--             from estaciones
--             where estaciones.name = "Martín Carrera"
--         )
--     );
--PLATZI
INSERT INTO `lineas_estaciones` (pivot_linea_id, pivot_estacion_id)
VALUES(
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 9"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Lázaro Cárdenas"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 6"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Ferrería"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea A"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Pantitlán"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Tacuba"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 6"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Martín Carrera"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 4"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Santa Anita"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Villa de Aragón"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 6"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Tezozómoc"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Tecnológico"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Colegio Militar"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 1"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Chapultepec"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 12"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Calle 11"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 8"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Constitución de 1917"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Copilco"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 7"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Tacuba"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 4"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Talismán"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 5"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Terminal Aérea"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Tepito"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 12"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Hospital 20 de Nov."
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Eugenia"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 12"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Lomas Estrella"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Tlatelolco"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 8"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Atlalilco"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 1"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Blvd. Puerto Aéreo"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 9"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Chilpancingo"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Ciudad Azteca"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Niños Héroes"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Popotla"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 7"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "San Joaquín"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Universidad"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 6"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Instituto del Petróleo"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 8"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Escuadrón 201"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 8"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Iztacalco"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Juárez"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Chabacano"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 6"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Azcapotzalco"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Bosque de Aragón"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 12"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Tlaltenco"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 4"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Jamaica"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Oceanía"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 8"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Iztapalapa"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 9"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Mixhuca"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Centro Médico"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 1"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Balderas"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 9"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Chabacano"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 8"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Salto del Agua"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 1"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Insurgentes"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea A"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Guelatao"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Morelos"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 1"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Moctezuma"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Normal"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Zapata"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 1"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Zaragoza"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 5"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "La Raza"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 9"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Jamaica"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 7"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Constituyentes"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Múzquiz"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Romero Rubio"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "San Cosme"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Portales"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 9"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Puebla"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea A"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Santa Marta"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Tasqueña"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Xola"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 4"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Canal del Norte"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Buenavista"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 1"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Balbuena"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Ermita"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 5"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Aragón"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 6"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Deportivo 18 de Marzo"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 12"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Atlalilco"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 7"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Auditorio"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 12"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Culhuacán"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 8"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Santa Anita"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 6"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Instituto del Petroleo"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 7"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "El Rosario"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Guerrero"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Hospital General"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 4"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Fray Servando"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 12"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Ermita"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 1"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Pantitlán"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 9"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Patriotismo"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 1"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Observatorio"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea A"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "La Paz"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 5"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Valle Gómez"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 12"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Tezonco"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 8"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Chabacano"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 4"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Candelaria"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 7"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Aquiles Serdán"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 8"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "La Viga"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Olímpica"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 12"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Mexicaltzingo"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 5"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Politécnico"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 12"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Periférico Ote"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "San Lázaro"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 7"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "San Antonio"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 12"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Zapotitlán"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 12"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Tláhuac"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Hidalgo"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Hidalgo"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Etiopía / Plaza de la Transpatencia"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Deportivo Oceanía"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Impulsora"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Deportivo 18 de Marzo"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 4"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Consulado"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 7"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Camarones"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Allende"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 8"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "San Juan de Letrán"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Viaducto"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 6"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Vallejo"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 9"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Pantitlán"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 4"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Morelos"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 8"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Doctores"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea A"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Los Reyes"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 8"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Bellas Artes"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Balderas"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 5"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Autobuses del Norte"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea A"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Acatitla"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Revolución"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 7"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Polanco"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 12"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "San Andrés Tomatlán"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Garibaldi"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 5"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Eduardo Molina"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 8"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Coyuya"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Coyoacán"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 6"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Norte 45"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 6"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Lindavista"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 7"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Tacubaya"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 8"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Garibaldi"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 7"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Mixcoac"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 12"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Mixcoac"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 5"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Hangares"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 6"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "El Rosario"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 5"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Oceanía"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 12"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Nopalera"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Bellas Artes"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 8"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "UAM-I"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 9"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Velódromo"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 1"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Cuauhtémoc"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 8"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Apatlaco"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 8"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Aculco"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea A"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Agrícola Oriental"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 12"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Eje Central"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 1"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Tacubaya"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Pino Suárez"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Río de los Remedios"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Potrero"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 1"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Sevilla"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "General Anaya"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Indios Verdes"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 6"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "La Villa - Basílica"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 12"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Parque de los Venados"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 1"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Juanacatlán"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Nativitas"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 5"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Misterios"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 1"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Candelaria"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 7"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Barranca del Muerto"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Miguel Ángel de Quevedo"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Lagunilla"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 12"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Olivos"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 1"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "San Lázaro"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea A"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Tepalcates"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Zócalo"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 1"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Gómez Farías"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 9"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Centro Médico"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 5"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Consulado"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 1"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Pino Suárez"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 1"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Salto del Agua"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 7"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "San Pedro de Los Pinos"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 7"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Refinería"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Villa de Cortés"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "R. Flores Magón"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Guerrero"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 12"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Insurgentes Sur"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 12"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Zapata"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Viveros"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 8"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Cerro de la Estrella"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 4"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Bondojito"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea A"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Canal de San Juan"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 5"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Pantitlán"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "San Antonio Abad"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 8"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Obrera"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Plaza Aragón"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Panteones"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea A"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Peñón Viejo"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "División del Norte"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Cuitláhuac"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 9"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Ciudad Deportiva"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 2"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Cuatro Caminos"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 4"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Martín Carrera"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 3"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "La Raza"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 1"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Isabel la Católica"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea B"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Nezahualcóyotl"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 1"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Merced"
        )
    ),
    (
        (
            SELECT `lineas`.`id`
            FROM `lineas`
            WHERE `lineas`.`name` = "Línea 9"
        ),
        (
            SELECT `estaciones`.`id`
            FROM `estaciones`
            WHERE `estaciones`.`name` = "Tacubaya"
        )
    );