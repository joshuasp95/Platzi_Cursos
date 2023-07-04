# Tutorial: Entendiendo FetchType.EAGER y FetchType.LAZY en Spring Data JPA

## Introducción

Cuando trabajamos con JPA (Java Persistence API), especialmente en un contexto de Spring Data JPA, una de las cosas más
importantes que debemos entender es cómo manejar las relaciones entre entidades y cómo se cargan estos datos
relacionados. Aquí es donde entran en juego `FetchType.EAGER` y `FetchType.LAZY`.

### FetchType.EAGER

`FetchType.EAGER` significa que los datos de la relación se cargarán de inmediato. En otras palabras, cuando recuperas
una entidad, JPA también cargará sus relaciones con `FetchType.EAGER` al mismo tiempo.

Ejemplo:

```java

@Entity
public class Usuario {
    // ...
    @OneToMany(fetch = FetchType.EAGER)
    private Set<Orden> ordenes;
    // ...
}
```

En este ejemplo, cuando recuperamos un `Usuario`, JPA también cargará automáticamente todas sus `Ordenes` al mismo
tiempo.

### FetchType.LAZY

`FetchType.LAZY`, por otro lado, significa que los datos de la relación no se cargarán de inmediato. En lugar de eso, se
cargarán solo cuando se acceda a ellos por primera vez. Esto se llama "carga perezosa" o "lazy loading".

Ejemplo:

```java

@Entity
public class Usuario {
    // ...
    @OneToMany(fetch = FetchType.LAZY)
    private Set<Orden> ordenes;
    // ...
}
```

En este ejemplo, cuando recuperamos un `Usuario`, JPA no cargará sus `Ordenes` de inmediato. En cambio, las `Ordenes`
solo se cargarán la primera vez que accedamos a ellas, por ejemplo, cuando llamamos a `usuario.getOrdenes()`.

## Cuándo usar EAGER y cuándo usar LAZY

### Usando EAGER

`FetchType.EAGER` puede ser útil cuando sabes que siempre necesitarás los datos de la relación y el número de datos
relacionados es pequeño, por lo que no hay un gran impacto en el rendimiento.

Sin embargo, usar `FetchType.EAGER` puede llevar a problemas de rendimiento si tienes una gran cantidad de datos en tus
relaciones. Esto se debe a que JPA cargará todos los datos relacionados cada vez que recuperes una entidad, incluso si
no los necesitas.

### Usando LAZY

`FetchType.LAZY` puede ser útil cuando no siempre necesitas los datos de la relación, o si hay una gran cantidad de
datos en la relación. Con `FetchType.LAZY`, puedes evitar el costo de cargar los datos hasta que realmente los
necesites.

La principal desventaja de `FetchType.LAZY` es que debes tener cuidado con la excepción `LazyInitializationException`.
Esta excepción se lanza cuando intentas acceder a los datos de una relación LAZY después de que la sesión de Hibernate (
o el EntityManager de JPA) se haya cerrado. Asegúrate de acceder a los datos mientras la sesión aún está abierta, o
utiliza alguna técnica para manejar la carga perezosa fuera de la sesión, como Open Session in View (aunque esto también
puede tener sus propios problemas).

## Valores predeterminados para FetchType

Dependiendo del tipo de asociación, JPA establece valores predeterminados para la estrategia de carga.

### OneToOne y ManyToOne

Para las relaciones `@OneToOne` y `@ManyToOne`, el tipo de carga por defecto es `FetchType.EAGER`. Esto significa que si
no especificas una estrategia de carga, JPA asumirá `FetchType.EAGER`.

Ejemplo:

```java

@Entity
public class Orden {
    // ...
    @ManyToOne
    private Usuario usuario;
    // ...
}
```

En este ejemplo, aunque no hemos especificado un tipo de carga, JPA asumirá `FetchType.EAGER` para la relación `Usuario`
en la `Orden`. Cuando recuperemos una `Orden`, JPA también cargará el `Usuario` relacionado de inmediato.

### OneToMany y ManyToMany

Para las relaciones `@OneToMany` y `@ManyToMany`, el tipo de carga por defecto es `FetchType.LAZY`. Esto significa que
si no especificas una estrategia de carga, JPA asumirá `FetchType.LAZY`.

Ejemplo:

```java

@Entity
public class Usuario {
    // ...
    @OneToMany
    private Set<Orden> ordenes;
    // ...
}
```

En este ejemplo, aunque no hemos especificado un tipo de carga, JPA asumirá `FetchType.LAZY` para la relación `Ordenes`
en el `Usuario`. Cuando recuperemos un `Usuario`, JPA no cargará las `Ordenes` relacionadas de inmediato. En cambio,
las `Ordenes` solo se cargarán la primera vez que las accedamos.

## Cambio de los valores predeterminados

Aunque JPA establece valores predeterminados para la estrategia de carga, puedes cambiarlos según tus necesidades
especificando explícitamente `FetchType.EAGER` o `FetchType.LAZY` en tus anotaciones.

Recuerda que es importante seleccionar la estrategia de carga correcta según tus necesidades para garantizar un buen
rendimiento de tu aplicación. Como regla general, deberías preferir `FetchType.LAZY` para evitar cargar datos
innecesarios, y solo usar `FetchType.EAGER` cuando estés seguro de que siempre necesitarás los datos relacionados y que
no habrá un gran impacto en el rendimiento.

## Razón de los Valores Predeterminados para FetchType

### FetchType.EAGER para @OneToOne y @ManyToOne

El `FetchType.EAGER` es el valor predeterminado para las relaciones `@OneToOne` y `@ManyToOne`. Esto se debe a que estas
relaciones suelen involucrar entidades que se consideran estrechamente relacionadas o que suelen ser necesarias cuando
se consulta la entidad principal.

Por ejemplo, si tienes un `Pedido` que está asociado a un `Cliente` mediante una relación `@ManyToOne`, es probable que
cada vez que consultes un `Pedido`, también quieras tener información sobre el `Cliente` que hizo ese pedido. Por lo
tanto, en este caso, tiene sentido que la relación `Cliente` se cargue ansiosamente (EAGER) por defecto.

### FetchType.LAZY para @OneToMany y @ManyToMany

Por otro lado, `FetchType.LAZY` es el valor predeterminado para las relaciones `@OneToMany` y `@ManyToMany`. Esta
elección se basa en la consideración de la eficiencia y el rendimiento.

Las relaciones `@OneToMany` y `@ManyToMany` pueden involucrar un gran número de entidades relacionadas. Si todas estas
entidades se cargaran de manera ansiosa (EAGER) cada vez que consultas la entidad principal, podrías terminar cargando
una gran cantidad de datos que quizás ni siquiera necesites, lo que podría tener un impacto negativo significativo en el
rendimiento de tu aplicación.

Por lo tanto, tiene sentido que el valor predeterminado para estas relaciones sea LAZY, para que solo se carguen cuando
realmente sean necesarias.

### Consideraciones Finales

Aunque estos valores predeterminados pueden tener sentido en muchos casos, es importante recordar que no siempre serán
los mejores para tu caso de uso específico. Debes considerar cuidadosamente tus necesidades y quizás cambiar estos
valores predeterminados si es necesario.

Por ejemplo, si tienes una relación `@OneToMany` en la que siempre necesitas las entidades relacionadas y su número no
es grande, podría tener sentido cambiar el tipo de carga a EAGER. Por otro lado, si tienes una relación `@ManyToOne` en
la que rara vez necesitas la entidad relacionada, podría ser más eficiente cambiar el tipo de carga a LAZY.

En última instancia, la elección entre EAGER y LAZY depende de las necesidades específicas de tu aplicación, y la
comprensión de estos conceptos te ayudará a tomar la decisión correcta.

## Conclusión

El manejo de `FetchType.EAGER` y `FetchType.LAZY` es un aspecto crucial en el uso de JPA y Hibernate. Usarlos
correctamente puede tener un gran impacto en el rendimiento de tu aplicación. Como regla general, deberías
preferir `FetchType.LAZY` para evitar cargar datos innecesarios, y solo usar `FetchType.E AGER` cuando estés seguro de
que siempre necesitarás los datos relacionados y que no habrá un gran impacto en el rendimiento.