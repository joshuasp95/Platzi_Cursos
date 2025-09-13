
# Programación Orientada a Objetos en Java

## Palabra Reservada `static`

La palabra reservada `static` se utiliza en Java para crear miembros (variables o métodos) que pertenecen a la clase en lugar de a una instancia específica de la clase. Esto significa que estos miembros son compartidos entre todas las instancias de la clase y se pueden acceder a través del nombre de la clase en lugar de a través de una instancia específica.

### Variables Estáticas

Las variables estáticas se definen con la palabra clave `static`. Algunas características clave de las variables estáticas son:

```java
public class MiClase {
    static int variableEstatica = 10;
    // ...
}
```

- Pertenecen a la clase en lugar de a una instancia específica.
- Se inicializan una sola vez, cuando la clase se carga en la memoria.
- Se puede acceder a ellas utilizando el nombre de la clase, como `MiClase.variableEstatica`.

### Métodos Estáticos

Los métodos estáticos también se definen con la palabra clave `static`. Algunas características clave de los métodos estáticos son:

```java
public class MiClase {
    static void metodoEstatico() {
        // ...
    }
    // ...
}
```

- Pertenecen a la clase en lugar de a una instancia específica.
- No pueden acceder a variables de instancia (no pueden usar `this`).
- Se pueden invocar directamente a través del nombre de la clase, como `MiClase.metodoEstatico()`.

### Uso de `static`

1. **Variables Estáticas**: Útiles para almacenar valores compartidos entre todas las instancias de la clase, como constantes o contadores compartidos.
2. **Métodos Estáticos**: Se utilizan para realizar operaciones que no dependen de un estado específico de la instancia y, por lo tanto, pueden ser independientes de las instancias de la clase.
3. **Bloques Estáticos**: Se pueden usar bloques estáticos para inicializar variables estáticas o realizar tareas de configuración que deben hacerse cuando la clase se carga en memoria.

Ejemplo de un bloque estático:

```java
public class MiClase {
    static {
        // Código de inicialización estática
    }
}
```

En resumen, la palabra reservada `static` en Java se utiliza para crear miembros de clase que no dependen de instancias específicas de la clase y son compartidos entre todas las instancias. Esto es útil para definir variables constantes, contadores compartidos, y métodos que realizan operaciones independientes de las instancias.
