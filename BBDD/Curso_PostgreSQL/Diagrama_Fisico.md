# Diagrama Físico de la Base de Datos

## Tabla: Estación

| Columna      | Tipo    |
| ------------ | ------- |
| id_estación | PK, INT |
| nombre       | TEXT    |
| dirección   | TEXT    |

## Tabla: Tren

| Columna   | Tipo    |
| --------- | ------- |
| id_tren   | PK, INT |
| modelo    | TEXT    |
| capacidad | NUMERIC |

## Tabla: Trayecto

| Columna            | Tipo    |
| ------------------ | ------- |
| id_trayecto        | PK, INT |
| id_tren            | FK, INT |
| id_estacion_inicio | FK, INT |
| id_estacion_final  | FK, INT |

## Tabla: Pasajero

| Columna              | Tipo    |
| -------------------- | ------- |
| id_pasajero          | PK, INT |
| nombre               | TEXT    |
| direccion_residencia | TEXT    |
| fecha_nacimiento     | TEXT    |

## Tabla: Viaje

| Columna     | Tipo    |
| ----------- | ------- |
| id_viaje    | PK, INT |
| id_pasajero | FK, INT |
| id_trayecto | FK, INT |

## Relaciones

1. Trayecto - Tren: (1:N)
2. Trayecto - Estación: (1:1) para id_estacion_inicio e id_estacion_final
3. Viaje - Pasajero: (1:N)
4. Viaje - Trayecto: (1:1)
