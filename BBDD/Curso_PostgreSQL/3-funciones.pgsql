-- Vamos a trabajar con la tabla 'pasajero' para estos ejemplos

-- 1. ON CONFLICT DO: Esta función se utiliza para manejar conflictos en una operación de INSERT. Por ejemplo, al intentar insertar un registro con una clave primaria que ya existe.

INSERT INTO pasajero (id, nombre, direccion, fecha_nacimiento)
VALUES (1, 'Juan Pérez', 'Calle 123', '2000-01-01')
ON CONFLICT (id) DO NOTHING; -- Si ya existe un registro con id 1, no haremos nada

INSERT INTO pasajero (id, nombre, direccion, fecha_nacimiento)
VALUES (1, 'Juan Pérez', 'Calle 123', '2000-01-01')
ON CONFLICT (id) DO UPDATE SET -- Si ya existe un registro con id 1, lo actualizaremos
nombre = excluded.nombre,
direccion = excluded.direccion,
fecha_nacimiento = excluded.fecha_nacimiento;


-- 2. RETURNING: Esta cláusula se usa en una operación de INSERT, UPDATE, DELETE o TRUNCATE para devolver las filas afectadas

INSERT INTO pasajero (nombre, direccion, fecha_nacimiento)
VALUES ('Ana López', 'Calle 456', '1999-12-31')
RETURNING *; -- Retorna el nuevo registro insertado


-- 3. LIKE / ILIKE: Estos operadores se usan en una cláusula WHERE para buscar un patrón en una columna. ILIKE es la versión insensible a mayúsculas y minúsculas de LIKE.

SELECT * FROM pasajero
WHERE nombre LIKE 'Juan%'; -- Encuentra pasajeros cuyo nombre empiece con 'Juan'

SELECT * FROM pasajero
WHERE nombre ILIKE 'juan%'; -- Similar a la anterior, pero no distingue entre mayúsculas y minúsculas


-- 4. IS / IS NOT: Se utilizan para comparar una columna o expresión con NULL

SELECT * FROM pasajero
WHERE fecha_nacimiento IS NULL; -- Encuentra pasajeros con la fecha de nacimiento no establecida

SELECT * FROM pasajero
WHERE fecha_nacimiento IS NOT NULL; -- Encuentra pasajeros con la fecha de nacimiento establecida

