use metro_cdmx;
alter table estaciones
modify column updated_at timestamp not null default CURRENT_TIMESTAMP on UPDATE CURRENT_TIMESTAMP;

alter table lineas
modify column updated_at timestamp not null default CURRENT_TIMESTAMP on UPDATE CURRENT_TIMESTAMP;

alter table trenes
modify column updated_at timestamp not null default CURRENT_TIMESTAMP on UPDATE CURRENT_TIMESTAMP;


update estaciones
set name = "Lázaro Cárdenas"
where id = 1;
update estaciones
set name = "Ferrería"
where id = 2;
update estaciones
set name = "Pantitlán"
where id = 3;
update estaciones
set name = "Tacuba"
where id = 4;
update estaciones
set name = "Martín Carrera"
where id = 5;
select *
from estaciones;