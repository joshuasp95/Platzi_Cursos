# Propagation en Transacciones con Spring

En Spring, la anotación `@Transactional` admite diferentes tipos de propagación de transacciones. La propagación es la capacidad de decidir cómo se manejan las transacciones existentes y nuevas cuando se invoca un método de negocio.

Aquí están los tipos de propagación que Spring soporta:

## Propagation.REQUIRED

`Propagation.REQUIRED` es el valor predeterminado y probablemente el más comúnmente usado. Si ya existe una transacción en curso, el método la usa. Si no existe ninguna transacción, se inicia una nueva.

Ejemplo:

```java
@Transactional(propagation = Propagation.REQUIRED)
public void methodA() {
    // Código aquí
}
```

## Propagation.SUPPORTS

Si existe una transacción en curso, el método la usa, pero no es obligatorio. Si no hay ninguna transacción en curso, el método se ejecuta en un contexto no transaccional.

Ejemplo:

```java
@Transactional(propagation = Propagation.SUPPORTS)
public void methodB() {
    // Código aquí
}
```

## Propagation.MANDATORY

El método debe ser invocado dentro de una transacción existente, de lo contrario, Spring lanzará una excepción.

Ejemplo:

```java
@Transactional(propagation = Propagation.MANDATORY)
public void methodC() {
    // Código aquí
}
```

## Propagation.REQUIRES_NEW

Independientemente de si existe una transacción en curso o no, el método siempre se ejecuta en una nueva transacción. Si hay una transacción en curso, se suspenderá.

Ejemplo:

```java
@Transactional(propagation = Propagation.REQUIRES_NEW)
public void methodD() {
    // Código aquí
}
```

## Propagation.NOT_SUPPORTED

El método debe ejecutarse sin una transacción, si existe una transacción en curso, se suspenderá.

Ejemplo:

```java
@Transactional(propagation = Propagation.NOT_SUPPORTED)
public void methodE() {
    // Código aquí
}
```

## Propagation.NEVER

El método debe ejecutarse sin una transacción, si existe una transacción en curso, Spring lanzará una excepción.

Ejemplo:

```java
@Transactional(propagation = Propagation.NEVER)
public void methodF() {
    // Código aquí
}
```

## Propagation.NESTED

El método se ejecutará dentro de una transacción anidada si existe una transacción en curso. De lo contrario, funcionará de la misma manera que `Propagation.REQUIRED`.

Ejemplo:

```java
@Transactional(propagation = Propagation.NESTED)
public void methodG() {
    // Código aquí
}
```

En resumen, los atributos de propagación te permiten tener un control detallado sobre cómo se manejan las transacciones en tus métodos de servicio. Deberías elegir el que mejor se adapte a las necesidades de tu aplicación.