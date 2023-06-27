-- Ejemplo de rollback con savepoint 

BEGIN;
INSERT INTO public.tren(modelo, capacidad) 
VALUES ('CAF', 9999);

SAVEPOINT trenAdd;

INSERT INTO public.tren(modelo, capacidad) 
VALUES ('test savepoint 1', 9999);

ROLLBACK TO trenAdd;

COMMIT;
select * from tren;

-- Las transacciones son un concepto clave en cualquier sistema de gestión de bases de datos relacionales
-- Una transacción es una unidad de trabajo que se realiza como una única operación. Es decir, si una transacción se compone de múltiples operaciones individuales,
-- todas ellas deben completarse para que se considere que la transacción ha tenido éxito. Si alguna de las operaciones falla, entonces toda la transacción falla.

-- Las transacciones son útiles por varias razones. Proporcionan una forma de mantener la integridad de los datos en una base de datos cuando se realizan múltiples operaciones relacionadas.

-- PostgreSQL utiliza los comandos BEGIN, COMMIT, y ROLLBACK para trabajar con transacciones.

-- COMENZAR UNA TRANSACCIÓN:
-- Para iniciar una transacción, utilizamos el comando BEGIN.
-- A partir de este punto, todas las operaciones que realicemos estarán dentro de esta transacción.

BEGIN;

-- A continuación, vamos a insertar algunos datos en nuestras tablas como parte de esta transacción.

-- Insertamos un registro en la tabla 'estacion'
INSERT INTO public.estacion(nombre, direccion) 
VALUES ('Test transaccion estacion', 'test direccion transaccion');

-- Insertamos un registro en la tabla 'tren'
INSERT INTO public.tren(modelo, capacidad) 
VALUES ('test modelo transaccion', 9999);

-- Si algo va mal en este punto, por ejemplo, si tenemos un error en nuestras instrucciones SQL, 
-- podemos usar el comando ROLLBACK para deshacer todas las operaciones que hemos realizado en esta transacción.

-- ROLLBACK;

-- Sin embargo, si todo ha ido bien y queremos que los cambios que hemos hecho sean permanentes, usamos el comando COMMIT.
-- Al hacer COMMIT, todas las operaciones que hemos hecho en esta transacción se hacen permanentes en la base de datos.
-- Si algo falla después de hacer COMMIT, no podemos usar ROLLBACK para deshacer los cambios.

COMMIT;

-- Después de hacer COMMIT, ya no estamos en una transacción. Cualquier operación que realicemos después del COMMIT estará fuera de la transacción.

-- Por último, vamos a hacer una consulta a nuestra tabla 'estacion' para verificar que el registro que insertamos está allí.

select * from estacion;


-- Ahora que hemos revisado las bases de las transacciones, es importante saber que podemos tener múltiples transacciones en nuestra base de datos al mismo tiempo.
-- Esto es especialmente útil si estamos trabajando con un equipo de desarrolladores y todos necesitan realizar cambios en la base de datos al mismo tiempo.

-- Por ejemplo, si un desarrollador está trabajando en una característica que requiere agregar un conjunto de datos a la tabla 'pasajero', y otro desarrollador está trabajando en una característica que requiere agregar datos a la tabla 'trayecto', ambos pueden iniciar sus propias transacciones para hacer esto.

-- Transacción 1
BEGIN;
INSERT INTO public.pasajero(nombre, direccion, fecha_nacimiento) 
VALUES ('Pasajero 1', 'Direccion 1', '1990-01-01');
COMMIT;

-- Transacción 2
BEGIN;
INSERT INTO public.trayecto(nombre, id_estacion, id_tren) 
VALUES ('Trayecto 1', 1, 1);
COMMIT;

-- Cada transacción es independiente de las demás. Si la transacción 1 falla, no afectará a la transacción 2, y viceversa.

-- Ahora, supongamos que estamos trabajando en una característica que requiere hacer varios cambios en nuestra base de datos.
-- Pero después de hacer algunos de los cambios, nos damos cuenta de que cometimos un error.
-- Con las transacciones, podemos simplemente hacer ROLLBACK y todos los cambios que hicimos en la transacción serán deshechos.

BEGIN;
INSERT INTO public.estacion(nombre, direccion) 
VALUES ('Test transaccion estacion 2', 'test direccion transaccion 2');
INSERT INTO public.tren(modelo, capacidad) 
VALUES ('test modelo transaccion 2', 9999);

-- ¡Ups! Nos hemos dado cuenta de que cometimos un error en nuestra instrucción INSERT para la tabla 'tren'.
-- No hay problema. Podemos simplemente hacer ROLLBACK y todos los cambios que hicimos en esta transacción serán deshechos.

ROLLBACK;

-- Si hacemos una consulta a nuestras tablas 'estacion' y 'tren' ahora, veremos que los registros que intentamos insertar no están allí.

SELECT * FROM estacion;
SELECT * FROM tren;

-- SAVEPOINTS 

-- Comenzamos una transacción con BEGIN;
BEGIN;

-- Insertamos un nuevo registro en la tabla estacion
INSERT INTO public.estacion(nombre, direccion) 
VALUES ('Estacion Savepoint', 'Direccion Savepoint');

-- Creamos un savepoint llamado SP1 después de insertar el registro en la tabla estacion
SAVEPOINT SP1;

-- Intentamos insertar un nuevo registro en la tabla tren. 
-- Nota: Este insert contiene un error intencional para ilustrar el uso del savepoint
INSERT INTO public.tren(modelo, capacidad) 
VALUES (NULL, 9999);

-- Como se produjo un error en la instrucción anterior, podemos usar ROLLBACK TO SAVEPOINT para deshacer los cambios hasta el último savepoint
ROLLBACK TO SAVEPOINT SP1;

-- Ahora, nuestro estado de transacción ha vuelto al punto en el que creamos SP1, por lo que podemos continuar con nuestra transacción e intentar insertar de nuevo el registro en la tabla tren
INSERT INTO public.tren(modelo, capacidad) 
VALUES ('Tren Savepoint', 9999);

-- Finalmente, confirmamos nuestra transacción con COMMIT
COMMIT;

-- Si consultamos nuestras tablas estacion y tren ahora, veremos que los nuevos registros están allí, a pesar de que tuvimos que retroceder a nuestro savepoint

SELECT * FROM estacion;
SELECT * FROM tren;

-- Eso es todo sobre savepoints. Son una herramienta poderosa que te permite tener un control más granular sobre tus transacciones y te ayuda a manejar los errores de manera más eficiente.
