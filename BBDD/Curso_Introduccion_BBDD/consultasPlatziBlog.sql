select * from posts
where usuario_id is not null 
and estatus = 'inactivo' 
and id<60
and year(fecha_pub) < '2025'
;
