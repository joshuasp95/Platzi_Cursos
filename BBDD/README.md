# 🗄️ Bases de Datos - Cursos de Platzi

Esta carpeta contiene todos los cursos relacionados con bases de datos, desde fundamentos hasta administración avanzada y optimización.

## 📚 Cursos Incluidos

### 1. [Curso Introducción BBDD](./curso-introduccion-bbdd/)
**Fundamentos de Bases de Datos**
- Conceptos básicos de BBDD
- Modelo Entidad-Relación
- Normalización (1NF, 2NF, 3NF, BCNF)
- Álgebra relacional
- ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad)

### 2. [BBDD MySQL y MariaDB](./bbdd-mysql-y-mariadb/)
**Administración de MySQL/MariaDB**
- Instalación y configuración
- Creación de bases de datos y tablas
- Tipos de datos en MySQL
- Índices y optimización
- Procedimientos almacenados y triggers
- Backup y restauración

### 3. [Curso PostgreSQL](./curso-postgresql/)
**PostgreSQL Avanzado**
- Características específicas de PostgreSQL
- Tipos de datos avanzados (JSON, Arrays, etc.)
- Funciones window
- Common Table Expressions (CTE)
- Particionamiento de tablas
- Replicación y alta disponibilidad
- **Archivos:** Backup de base de datos incluido

### 4. [Curso Práctico SQL](./curso-practico-sql/)
**SQL Avanzado y Optimización**
- Consultas complejas
- JOINs avanzados (INNER, LEFT, RIGHT, FULL, CROSS)
- Subconsultas y consultas correlacionadas
- Vistas y vistas materializadas
- Optimización de consultas
- Análisis de planes de ejecución

## 🛠️ Tecnologías y Herramientas

- **Sistemas de Gestión:**
  - MySQL 8.0
  - MariaDB 10.x
  - PostgreSQL 14+
  - SQLite

- **Herramientas de Administración:**
  - MySQL Workbench
  - pgAdmin 4
  - DBeaver
  - phpMyAdmin

- **Lenguajes:**
  - SQL estándar
  - PL/pgSQL (PostgreSQL)
  - SQL/PSM (MySQL)

## 🚀 Configuración y Conexión

### MySQL/MariaDB
```sql
-- Conexión local
mysql -u root -p

-- Crear usuario
CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'usuario'@'localhost';
FLUSH PRIVILEGES;
```

### PostgreSQL
```sql
-- Conexión local
psql -U postgres

-- Crear usuario y base de datos
CREATE USER usuario WITH PASSWORD 'password';
CREATE DATABASE mi_database OWNER usuario;
GRANT ALL PRIVILEGES ON DATABASE mi_database TO usuario;
```

## 📊 Ejemplos de Consultas

### Consultas Básicas
```sql
-- SELECT con JOIN
SELECT c.nombre, p.nombre AS producto, op.cantidad
FROM clientes c
INNER JOIN ordenes o ON c.id = o.cliente_id
INNER JOIN ordenes_productos op ON o.id = op.orden_id
INNER JOIN productos p ON op.producto_id = p.id
WHERE o.fecha >= '2024-01-01';

-- Agregación con GROUP BY
SELECT categoria, COUNT(*) as total, AVG(precio) as precio_promedio
FROM productos
GROUP BY categoria
HAVING COUNT(*) > 5
ORDER BY total DESC;
```

### Consultas Avanzadas (PostgreSQL)
```sql
-- Window Functions
SELECT
    nombre,
    salario,
    departamento,
    AVG(salario) OVER (PARTITION BY departamento) as salario_promedio_depto,
    RANK() OVER (PARTITION BY departamento ORDER BY salario DESC) as ranking
FROM empleados;

-- Common Table Expression (CTE)
WITH ventas_mensuales AS (
    SELECT
        DATE_TRUNC('month', fecha) as mes,
        SUM(total) as total_ventas
    FROM ventas
    GROUP BY DATE_TRUNC('month', fecha)
)
SELECT
    mes,
    total_ventas,
    LAG(total_ventas) OVER (ORDER BY mes) as ventas_mes_anterior,
    total_ventas - LAG(total_ventas) OVER (ORDER BY mes) as diferencia
FROM ventas_mensuales;
```

## 🔧 Scripts Útiles

### Backup y Restauración

#### MySQL
```bash
# Backup
mysqldump -u usuario -p base_datos > backup.sql

# Restaurar
mysql -u usuario -p base_datos < backup.sql
```

#### PostgreSQL
```bash
# Backup
pg_dump -U usuario -d base_datos > backup.sql

# Restaurar
psql -U usuario -d base_datos < backup.sql
```

## 📈 Optimización de Consultas

### Índices
```sql
-- Crear índice simple
CREATE INDEX idx_productos_categoria ON productos(categoria);

-- Crear índice compuesto
CREATE INDEX idx_ordenes_cliente_fecha ON ordenes(cliente_id, fecha);

-- Índice único
CREATE UNIQUE INDEX idx_usuarios_email ON usuarios(email);

-- Analizar uso de índices (PostgreSQL)
EXPLAIN ANALYZE SELECT * FROM productos WHERE categoria = 'Electrónica';
```

### Tips de Optimización
1. **Usar índices apropiadamente** - En columnas de búsqueda frecuente
2. **Evitar SELECT *** - Seleccionar solo columnas necesarias
3. **Limitar resultados** - Usar LIMIT cuando sea posible
4. **Normalización vs Desnormalización** - Balance según el caso de uso
5. **Cachear consultas frecuentes** - Usar vistas materializadas
6. **Particionar tablas grandes** - Para mejorar rendimiento

## 📚 Conceptos Clave

### Normalización
- **1NF:** Valores atómicos, sin grupos repetidos
- **2NF:** Cumple 1NF + sin dependencias parciales
- **3NF:** Cumple 2NF + sin dependencias transitivas
- **BCNF:** Forma normal de Boyce-Codd

### ACID
- **Atomicidad:** Todo o nada en transacciones
- **Consistencia:** Integridad de datos mantenida
- **Aislamiento:** Transacciones independientes
- **Durabilidad:** Cambios permanentes

### Tipos de Joins
```
INNER JOIN: Solo registros que coinciden
LEFT JOIN: Todos de la izquierda + coincidencias
RIGHT JOIN: Todos de la derecha + coincidencias
FULL JOIN: Todos los registros de ambas tablas
CROSS JOIN: Producto cartesiano
```

## 🔗 Enlaces Útiles

- [MySQL Documentation](https://dev.mysql.com/doc/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [SQL Tutorial - W3Schools](https://www.w3schools.com/sql/)
- [Use The Index, Luke!](https://use-the-index-luke.com/) - Optimización SQL
- [DB Fiddle](https://www.db-fiddle.com/) - Práctica online

## 📝 Notas Importantes

- **Seguridad:** Nunca hardcodear credenciales en el código
- **Backups:** Realizar respaldos regulares de las bases de datos
- **Transacciones:** Usar transacciones para operaciones críticas
- **Índices:** No sobre-indexar, cada índice tiene un costo de mantenimiento

---

⬅️ [Volver al README principal](../README.md)