### 1. Conexiones a bases de datos remotas en PostgreSQL utilizando la extensión dblink:

```markdown
## Conexiones a bases de datos remotas en PostgreSQL utilizando dblink

La extensión dblink en PostgreSQL permite establecer conexiones y ejecutar consultas en bases de datos remotas. A continuación, se muestra un ejemplo de cómo utilizar dblink para conectarse a una base de datos remota y realizar una consulta.

### 1. Instalación de la extensión dblink

Antes de comenzar, debemos asegurarnos de tener la extensión dblink instalada en nuestro servidor de PostgreSQL. Para instalarla, debemos ejecutar el siguiente comando SQL en la base de datos deseada:

```sql
CREATE EXTENSION IF NOT EXISTS dblink;
```

### 2. Establecimiento de la conexión remota

Para establecer una conexión a una base de datos remota, utilizamos la función `dblink()` junto con los parámetros de conexión necesarios. Aquí tienes un ejemplo de sintaxis para establecer la conexión:

```sql
SELECT *
FROM dblink (
   'dbname=remote 
    port=5432 
    host=127.0.0.1 
    user=select_user 
    password=1234',
   'select id, fecha from vip_users'
) AS datos_remote (id integer, fecha date);
```

En este ejemplo, los parámetros de conexión son:

- `dbname`: Nombre de la base de datos remota.
- `port`: Puerto en el que se encuentra el servidor de la base de datos remota.
- `host`: Dirección IP o nombre del host de la base de datos remota.
- `user`: Nombre de usuario para autenticarse en la base de datos remota.
- `password`: Contraseña del usuario para autenticarse en la base de datos remota.

### 3. Ejecución de consultas remotas

Después de establecer la conexión, podemos ejecutar consultas en la base de datos remota utilizando la sintaxis de dblink. En el ejemplo anterior, la consulta selecciona los campos `id` y `fecha` de la tabla `vip_users` en la base de datos remota.

### 4. Obtención de resultados

Los resultados de la consulta remota se devolverán como una tabla virtual que puede ser tratada como cualquier otra tabla en PostgreSQL. En el ejemplo, los resultados se asignan a la tabla virtual `datos_remote` con las columnas `id` (entero) y `fecha` (fecha).

### 5. Gestión de errores y seguridad

Es importante tener en cuenta que al establecer conexiones remotas a bases de datos, debemos considerar medidas de seguridad y manejo de errores adecuados. Asegúrate de proteger tus conexiones con autenticación segura y manejar los errores que puedan surgir durante la ejecución de las consultas remotas.

En la sección anterior, explicamos cómo establecer conexiones a bases de datos remotas utilizando la extensión dblink en PostgreSQL. Ahora, veremos cómo realizar un JOIN entre una tabla local y una tabla remota utilizando dblink.

### 6. Establecimiento de la conexión remota inversa

Para establecer la conexión a la base de datos remota, utilizamos la función `dblink()` junto con los parámetros de conexión necesarios. Aquí tienes un ejemplo de sintaxis:

```sql
SELECT *
FROM pasajero
JOIN dblink (
   'dbname=remote 
    port=5432 
    host=127.0.0.1 
    user=select_user 
    password=1234',
   'select id, fecha from vip_users'
) AS datos_remote (id integer, fecha date)
ON (pasajero.id = datos_remote.id);
En este ejemplo, se establece la conexión a la base de datos remota utilizando los mismos parámetros de conexión que mencionamos anteriormente.

2. Realización del JOIN con la tabla remota
Después de establecer la conexión, podemos realizar un JOIN entre la tabla local (pasajero en este caso) y la tabla remota (vip_users) utilizando la sintaxis habitual de JOIN. En el ejemplo, se realiza un JOIN entre las columnas id de ambas tablas.

## Conexiones a bases de datos remotas en PostgreSQL utilizando dblink (continuación)

En la sección anterior, explicamos cómo realizar JOINs entre una tabla local y una tabla remota utilizando la extensión dblink en PostgreSQL. Ahora, veremos cómo hacerlo en sentido inverso, uniendo una tabla remota con una tabla local.

### 1. Instalación de la extensión dblink

Antes de comenzar, asegurémonos de tener la extensión dblink instalada en nuestro servidor de PostgreSQL. Para instalarla, ejecutamos el siguiente comando SQL en la base de datos deseada:

```sql
CREATE EXTENSION IF NOT EXISTS dblink;
```

2. Establecimiento de la conexión remota
   Para establecer la conexión a la base de datos remota, utilizamos la función dblink() junto con los parámetros de conexión necesarios. Aquí tienes un ejemplo de sintaxis:

```sql
SELECT *
FROM vip_users
JOIN dblink (
   'dbname=platzi_postgresql_transporte 
    port=5432 
    host=127.0.0.1 
    user=theguardian 
    password=admin1234',
   'select * from pasajero'
) AS datos_remote (id integer, nombre character varying, direccion character varying, fecha_nacimiento date)
ON (vip_users.id = datos_remote.id);
```

En este ejemplo, se establece la conexión a la base de datos remota utilizando los mismos parámetros de conexión que mencionamos anteriormente.

3. Realización del JOIN inverso con la tabla local
   Después de establecer la conexión, podemos realizar un JOIN entre la tabla remota (pasajero en este caso) y la tabla local (vip_users) utilizando la sintaxis habitual de JOIN. En el ejemplo, se realiza un JOIN entre las columnas id de ambas tablas.
