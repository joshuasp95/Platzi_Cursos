-- Comenzamos conectándonos a la base de datos de PostgreSQL.
-- Reemplaza "midatabase" con el nombre de tu base de datos, y "miusuario" con tu usuario.
c midatabase miusuario -- Creamos la tabla "estacion".
-- Almacena información sobre las estaciones de un sistema de transporte.
CREATE TABLE IF NOT EXISTS public.estacion(
    id serial PRIMARY KEY,
    -- ID único autoincremental
    nombre varchar(100) NOT NULL,
    -- Nombre de la estación
    direccion varchar(255) -- Dirección de la estación
);

-- Creamos la tabla "tren".
-- Almacena información sobre los trenes.
CREATE TABLE IF NOT EXISTS public.tren(
    id serial PRIMARY KEY,
    -- ID único autoincremental
    modelo varchar(100) NOT NULL,
    -- Modelo del tren
    capacidad integer NOT NULL -- Capacidad de personas
);

-- Creamos la tabla "trayecto".
-- Relaciona los trenes con las estaciones en un trayecto.
CREATE TABLE IF NOT EXISTS public.trayecto(
    id serial PRIMARY KEY,
    -- ID único autoincremental
    nombre varchar(100) NOT NULL,
    -- Nombre del trayecto
    id_estacion integer REFERENCES public.estacion(id) ON DELETE CASCADE,
    -- Clave foránea a estacion
    id_tren integer REFERENCES public.tren(id) ON DELETE CASCADE -- Clave foránea a tren
);

-- Creamos la tabla "pasajero".
-- Almacena información sobre los pasajeros.
CREATE TABLE IF NOT EXISTS public.pasajero(
    id serial PRIMARY KEY,
    -- ID único autoincremental
    nombre varchar(100) NOT NULL,
    -- Nombre completo del pasajero
    direccion varchar(255),
    -- Dirección de residencia del pasajero
    fecha_nacimiento date -- Fecha de nacimiento
);

-- Creamos la tabla "viaje".
-- Relaciona los trayectos con los pasajeros.
CREATE TABLE IF NOT EXISTS public.viaje(
    id serial PRIMARY KEY,
    -- ID único autoincremental
    inicio timestamp NOT NULL,
    -- Hora de inicio del viaje
    fin timestamp NOT NULL,
    -- Hora de finalización del viaje
    id_pasajero integer REFERENCES public.pasajero(id) ON DELETE CASCADE,
    -- Clave foránea a pasajero
    id_trayecto integer REFERENCES public.trayecto(id) ON DELETE CASCADE -- Clave foránea a trayecto
);

-- Insertamos algunos registros de ejemplo en la tabla "estacion".
INSERT INTO public.estacion(nombre, direccion)
    VALUES ('Estacion 1', 'Direccion 1'),
('Estacion 2', 'Direccion 2');

-- Insertamos algunos registros de ejemplo en la tabla "tren".
INSERT INTO public.tren(modelo, capacidad)
    VALUES ('Modelo A', 100),
('Modelo B', 200);

-- Insertamos algunos registros de ejemplo en la tabla "trayecto".
INSERT INTO public.trayecto(nombre, id_estacion, id_tren)
    VALUES ('Trayecto 1', 1, 1),
('Trayecto 2', 2, 2);

-- Insertamos algunos registros de ejemplo en la tabla "pasajero".
INSERT INTO public.pasajero(nombre, direccion, fecha_nacimiento)
    VALUES ('Pasajero 1', 'Direccion 1', '1980-01-01'),
('Pasajero 2', 'Direccion 2', '1990-01-01');

-- Insertamos algunos registros de ejemplo en la tabla "viaje".
INSERT INTO public.viaje(inicio, fin, id_pasajero, id_trayecto)
    VALUES ('2023-01-01 09:00:00', '2023-01-01 10:00:00', 1, 1),
('2023-01-01 11:00:00', '2023-01-01 12:00:00', 2, 2);

-- Consulta básica: seleccionar todos los registros de la tabla "estacion".
SELECT
    *
FROM
    public.estacion;

-- Consulta básica: seleccionar todos los registros de la tabla "tren".
SELECT
    *
FROM
    public.tren;

-- Consulta básica: seleccionar todos los registros de la tabla "trayecto".
SELECT
    *
FROM
    public.trayecto;

-- Consulta básica: seleccionar todos los registros de la tabla "pasajero".
SELECT
    *
FROM
    public.pasajero;

-- Consulta básica: seleccionar todos los registros de la tabla "viaje".
SELECT
    *
FROM
    public.viaje;

-- Consulta avanzada: seleccionar todos los viajes junto con la información del pasajero, trayecto, estacion, y tren.
SELECT
    v.inicio,
    v.fin,
    p.nombre AS pasajero,
    t.nombre AS trayecto,
    e.nombre AS estacion,
    tr.modelo AS tren
FROM
    public.viaje v
    INNER JOIN public.pasajero p ON v.id_pasajero = p.id
    INNER JOIN public.trayecto t ON v.id_trayecto = t.id
    INNER JOIN public.estacion e ON t.id_estacion = e.id
    INNER JOIN public.tren tr ON t.id_tren = tr.id;

-- Reiniciamos los registros a 1 usando TRUNCATE.
TRUNCATE public.estacion RESTART IDENTITY CASCADE;

TRUNCATE public.tren RESTART IDENTITY CASCADE;

TRUNCATE public.trayecto RESTART IDENTITY CASCADE;

TRUNCATE public.pasajero RESTART IDENTITY CASCADE;

TRUNCATE public.viaje RESTART IDENTITY CASCADE;

