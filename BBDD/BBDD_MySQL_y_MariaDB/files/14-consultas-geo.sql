use metro_cdmx;

-- hardcodeando datos

SELECT
    ST_Distance_Sphere(
        POINT(-99.14433718, 19.40702104),
        POINT(-99.12120581, 19.40425847)
    ) as "Distancia en metros Lázaro Cárdenas a Santa Anita";

-- con consultas anidadas

select ST_Distance_Sphere( (
            select ubicacion
            from ubicaciones
            where
                estacion_id = (
                    select id
                    from
                        estaciones
                    where
                        name = "Lázaro Cárdenas"
                )
        ), (
            select ubicacion
            from ubicaciones
            where
                estacion_id = (
                    select id
                    from
                        estaciones
                    where
                        name = "Santa Anita"
                )
        )
    ) as "Distancia en metros Lázaro Cárdenas a Santa Anita";

select ST_Distance_Sphere( (
            select ubicacion
            from ubicaciones
            where
                estacion_id = (
                    select id
                    from
                        estaciones
                    where
                        name = "Morelos"
                )
        ), (
            select ubicacion
            from ubicaciones
            where
                estacion_id = (
                    select id
                    from
                        estaciones
                    where
                        name = "Moctezuma"
                )
        )
    ) as "Distancia en metros de Morelos a Moctezuma";

select ST_Distance_Sphere( (
            select
                ubicaciones.ubicacion
            from ubicaciones
                inner join estaciones on estaciones.id = ubicaciones.estacion_id
            where
                estaciones.name = "Balderas"
        ), (
            select
                ubicaciones.ubicacion
            from ubicaciones
                inner join estaciones on estaciones.id = ubicaciones.estacion_id
            where
                estaciones.name = "Pino Suarez"
        )
    ) as "Distanca en metros de Balderas a Pino Suarez";