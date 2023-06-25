# Diagrama de Entidad-Relación para el Sistema de Transporte

## Entidades y Atributos

1. **Estación**

   - `id_estación` (Primary Key)
   - `nombre` (Texto)
   - `dirección` (Texto)
2. **Tren**

   - `id_tren` (Primary Key)
   - `modelo` (Texto)
   - `capacidad` (Numérico)
3. **Pasajero**

   - `id_pasajero` (Primary Key)
   - `nombre` (Texto)
   - `direccion_residencia` (Texto)
   - `fecha_nacimiento` (Texto)
4. **Trayecto**

   - `id_trayecto` (Primary Key)
   - `id_tren` (Foreign Key que referencia a `Tren`)
   - `id_estacion_inicio` (Foreign Key que referencia a `Estación`)
   - `id_estacion_final` (Foreign Key que referencia a `Estación`)
5. **Viaje**

   - `id_viaje` (Primary Key)
   - `id_pasajero` (Foreign Key que referencia a `Pasajero`)
   - `id_trayecto` (Foreign Key que referencia a `Trayecto`)

## Relaciones

- **Trayecto_Tren**: Un `Tren` puede tener muchos `Trayectos` y un `Trayecto` está asociado a un `Tren`. (1:N)
- **Trayecto_Estación**: Un `Trayecto` tiene una `Estación` de inicio y una `Estación` de final. (1:1)
- **Viaje_Pasajero**: Un `Pasajero` puede tener muchos `Viajes`, y un `Viaje` está asociado a un `Pasajero`. (1:N)
- **Viaje_Trayecto**: Un `Viaje` está asociado a un `Trayecto`. (1:1)
