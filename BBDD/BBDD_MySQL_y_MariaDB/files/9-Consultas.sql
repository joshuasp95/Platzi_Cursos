use metro_cdmx;
-- Consultas
select *
from lineas;
-- Consultas filtradas por columnas
select id,
    name,
    color
from lineas;
--Operaciones matematicas
select (2 + 2);
select (2 + 2) as resultado;
--Promedio de años en trenes
select round(AVG(year)) as promedio
from trenes;
select round(AVG(year)) as "Promedio de años en trenes"
from trenes;
-- Juntar TABLAS con inner join
select lineas.name,
    trenes.serial_number,
    trenes.type
from lineas
    inner join trenes on lineas.id = trenes.linea_id;
select lineas.name as "Nombre Linea",
    trenes.serial_number as "Numero serie de tren",
    trenes.type as "Tipo de tren"
from lineas
    inner join trenes on lineas.id = trenes.linea_id;