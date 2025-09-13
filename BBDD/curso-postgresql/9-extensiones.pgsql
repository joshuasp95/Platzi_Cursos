-- Comenzamos nuestra transacción
BEGIN;

-- Creamos la extensión pgcrypto, si no está ya creada
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Antes de insertar un usuario en la tabla usuario, asegurarse de que la tabla existe
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT FROM pg_tables
        WHERE schemaname = 'public'
        AND tablename   = 'usuario') THEN

    -- Crear la tabla usuario si no existe
    CREATE TABLE usuario(
       id SERIAL PRIMARY KEY,
       nombre VARCHAR(100),
       contraseña text
    );
    END IF;
END $$;

-- Ahora podemos usar las funciones que proporciona la extensión pgcrypto. Por ejemplo, podemos crear una contraseña encriptada para un nuevo usuario
INSERT INTO public.usuario(nombre, contraseña) 
VALUES ('Usuario Con Contraseña Encriptada', crypt('mi_contraseña', gen_salt('bf')));

-- Terminamos nuestra transacción
COMMIT;

-- Si ahora seleccionamos nuestros datos de la tabla de usuario, veremos que la contraseña del nuevo usuario está encriptada, gracias a las funciones proporcionadas por la extensión pgcrypto
SELECT * FROM usuario;

-- Creamos la extensión PostGIS si no está ya creada
CREATE EXTENSION IF NOT EXISTS postgis;

-- Creamos una tabla con un campo de tipo POINT (geometría en 2D)
CREATE TABLE IF NOT EXISTS lugares(
   id SERIAL PRIMARY KEY,
   nombre VARCHAR(100),
   ubicacion GEOMETRY(POINT, 4326)  -- Este es un tipo de datos proporcionado por PostGIS
);

-- Insertamos un nuevo lugar con una ubicación dada por un par de coordenadas
INSERT INTO lugares(nombre, ubicacion)
VALUES ('OpenAI HQ', ST_GeomFromText('POINT(-122.4194 37.7749)', 4326));  -- ST_GeomFromText es una función proporcionada por PostGIS

-- Podemos hacer consultas espaciales, por ejemplo, seleccionar todos los lugares dentro de un radio de un punto dado
-- Aquí seleccionamos todos los lugares dentro de un radio de 1 grado (aproximadamente 111 km) del OpenAI HQ
SELECT * FROM lugares
WHERE ST_DWithin(ubicacion, ST_GeomFromText('POINT(-122.4194 37.7749)', 4326), 1);

-- Creamos la extensión hstore si no está ya creada
CREATE EXTENSION IF NOT EXISTS hstore;

-- Creamos una tabla con un campo de tipo hstore
CREATE TABLE IF NOT EXISTS productos(
   id SERIAL PRIMARY KEY,
   nombre VARCHAR(100),
   atributos hstore  -- Este es un tipo de datos proporcionado por hstore
);

-- Insertamos un nuevo producto con algunos atributos
INSERT INTO productos(nombre, atributos)
VALUES ('Producto A', 'color => "rojo", tamaño => "grande", peso => "2kg"');

-- Podemos hacer consultas sobre los atributos, por ejemplo, seleccionar todos los productos de color rojo
SELECT * FROM productos
WHERE atributos -> 'color' = 'rojo';


-- Empezamos habilitando la extensión, si es que aún no está habilitada.
CREATE EXTENSION IF NOT EXISTS fuzzystrmatch;

-- Usamos la función levenshtein() para obtener la distancia de edición entre dos cadenas.
-- La "distancia de edición" es la cantidad mínima de cambios de caracteres necesarios para transformar una cadena en otra.
-- Esperamos que el resultado sea 1, ya que sólo necesitamos cambiar 'w' por 'v' para convertir 'Pedro' en 'Petro'.
SELECT levenshtein ('Pedro', 'Petro') AS levenshtein_distance;

-- Ahora, consideramos una consulta más realista.
-- Imaginemos que tenemos una tabla "pacientes" con nombres de pacientes, y queremos encontrar pacientes con nombres similares a una entrada dada.

-- Creamos una tabla de ejemplo:
CREATE TABLE IF NOT EXISTS pacientes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100)
);

-- Insertamos algunos datos:
INSERT INTO pacientes(nombre) VALUES ('Pedro'), ('Petro'), ('Perdo'), ('Pedroso'), ('Pedrinho');

-- Ahora, queremos encontrar todos los pacientes cuyos nombres tengan una distancia de Levenshtein de 2 o menos respecto a 'Pedro'.
SELECT nombre
FROM pacientes
WHERE levenshtein(nombre, 'Pedro') <= 2;

-- La función difference() compara dos cadenas y devuelve un entero que indica cuán similares son las cadenas.
-- El resultado varía de 0 a 4. Un resultado de 4 indica que las cadenas son muy similares.
-- Apliquemos esta función a dos cadenas:
SELECT difference('peppermint', 'pepper') AS similarity_score;

-- De nuevo, vamos a aplicar esto a un caso más realista.
-- Queremos encontrar pacientes cuyo nombre es muy similar a 'Pedro'. Usamos la función difference() para esto.
SELECT nombre
FROM pacientes
WHERE difference(nombre, 'Pedro') = 4;

-- No olvides hacer limpieza al final de tu script.
-- DROP TABLE IF EXISTS pacientes;
