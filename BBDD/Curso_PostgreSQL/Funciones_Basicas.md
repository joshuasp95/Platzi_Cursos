A continuación se muestra un resumen de las funciones básicas de la consola de PostgreSQL, incluyendo una breve descripción de cada una:

- **Entrar a la consola de PostgreSQL:** Para acceder a la consola de PostgreSQL, se puede utilizar el comando `psql -U postgres -W`, donde `-U` especifica el nombre de usuario y `-W` solicita la contraseña.
- **Ver los comandos de PostgreSQL:** Para obtener una lista de los comandos disponibles en PostgreSQL, se puede utilizar el comando `\?`.
- **Listar todas las bases de datos:** Para mostrar una lista de todas las bases de datos existentes, se puede utilizar el comando `\l`.
- **Ver las tablas de una base de datos:** Para listar las tablas de una base de datos en particular, se puede utilizar el comando `\dt`.
- **Cambiar a otra base de datos:** Para cambiar a otra base de datos, se puede utilizar el comando `\c nombre_BD`, donde `nombre_BD` es el nombre de la base de datos a la que se desea acceder.
- **Describir una tabla:** Para obtener información detallada sobre una tabla específica, se puede utilizar el comando `\d nombre_tabla`, donde `nombre_tabla` es el nombre de la tabla que se desea describir.
- **Ver todos los comandos SQL:** Para obtener una lista de todos los comandos SQL disponibles en PostgreSQL, se puede utilizar el comando `\h`.
- **Ver cómo se ejecuta un comando SQL:** Para obtener información sobre cómo se ejecuta un comando SQL específico, se puede utilizar el comando `\h nombre_de_la_funcion`, donde `nombre_de_la_funcion` es el nombre del comando que se desea investigar.
- **Cancelar lo que hay en pantalla:** Para cancelar la salida en pantalla y volver al prompt de comandos, se puede presionar Ctrl + C.
- **Ver la versión de PostgreSQL instalada:** Para obtener información sobre la versión de PostgreSQL instalada, se puede ejecutar el comando `SELECT version();`, asegurándose de agregar el punto y coma al final.
- **Volver a ejecutar la función realizada anteriormente:** Para volver a ejecutar la función anteriormente realizada, se puede utilizar el comando `\g`.
- **Inicializar el contador de tiempo:** Para habilitar el contador de tiempo y obtener información sobre el tiempo de ejecución de cada función, se puede utilizar el comando `\timing`.
- **Limpiar la pantalla de la consola psql:** Para limpiar la pantalla de la consola psql, se puede presionar Ctrl + L.

Estas son solo algunas de las funciones básicas de la consola de PostgreSQL. Existen muchas más funciones y comandos avanzados que permiten administrar y consultar bases de datos de manera eficiente.

- **Mostrar registros únicos:** `SELECT DISTINCT columna FROM nombre_tabla;`
    - Recupera valores únicos de una columna específica en una tabla.

- **Ordenar resultados:** `SELECT columnas FROM nombre_tabla ORDER BY columna ASC/DESC;`
    - Ordena los resultados de una consulta en orden ascendente (ASC) o descendente (DESC) según los valores de una columna.

- **Filtrar resultados:** `SELECT columnas FROM nombre_tabla WHERE condiciones;`
    - Filtra los resultados de una consulta utilizando condiciones lógicas.

- **Unir tablas:** `SELECT columnas FROM tabla1 JOIN tabla2 ON condiciones;`
    - Combina registros de dos o más tablas utilizando una condición de unión.

- **Agregar una columna a una tabla existente:** `ALTER TABLE nombre_tabla ADD COLUMN columna tipo_dato;`
    - Agrega una nueva columna a una tabla existente con el nombre y tipo de dato especificados.

- **Modificar una columna de una tabla existente:** `ALTER TABLE nombre_tabla ALTER COLUMN columna SET tipo_dato;`
    - Modifica el tipo de dato de una columna existente en una tabla.

- **Eliminar una columna de una tabla existente:** `ALTER TABLE nombre_tabla DROP COLUMN columna;`
    - Elimina una columna existente de una tabla.

- **Crear un índice:** `CREATE INDEX nombre_indice ON nombre_tabla (columna);`
    - Crea un índice en una columna específica de una tabla para mejorar la eficiencia en las consultas.

- **Realizar una copia de seguridad de una base de datos:** `pg_dump -U postgres -d nombre_BD > archivo.sql`
    - Crea un archivo de respaldo SQL de una base de datos específica.

- **Restaurar una base de datos desde una copia de seguridad:** `psql -U postgres -d nombre_BD < archivo.sql`
    - Restaura una base de datos desde un archivo de respaldo SQL.




