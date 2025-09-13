#!/bin/bash

# Este es un script de ejemplo para hacer respaldos y restauraciones en PostgreSQL

# Backup:
# El comando pg_dump se utiliza para hacer un respaldo de una base de datos de PostgreSQL
# La opción -U especifica el nombre de usuario a utilizar
# La opción -F especifica el formato del archivo de salida (c = personalizado, d = directorio, t = tar, p = texto sin formato (predeterminado))
# La opción -f especifica el nombre del archivo de salida
# Finalmente, especificas el nombre de la base de datos que quieres respaldar
echo "Realizando respaldo..."
pg_dump -U theguardian -F c -f platzi_postgresql_transporte.backup platzi_postgresql_transporte
echo "Respaldo completado."

# Restauración:
# El comando pg_restore se utiliza para restaurar un respaldo de una base de datos de PostgreSQL
# La opción -U especifica el nombre de usuario a utilizar
# La opción -d especifica la base de datos a la que restaurar (la base de datos debe existir ya)
# Finalmente, especificas el archivo de respaldo a restaurar
# Advertencia: Esto sobrescribirá todos los datos actuales en la base de datos de destino
echo "Realizando restauración..."
pg_restore -U theguardian -d platzi_postgresql_transporte platzi_postgresql_transporte.backup
echo "Restauración completada."

# Nota: En un entorno real, querrás manejar los errores correctamente y quizás agregar algunas opciones adicionales, como -v para la salida detallada.
