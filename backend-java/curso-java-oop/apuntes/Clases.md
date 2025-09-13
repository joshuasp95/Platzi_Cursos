
# Diagrama de Clases en Java

Un diagrama de clases es una representación visual de las clases, atributos y métodos en un sistema de programación orientada a objetos. Las clases son elementos fundamentales en un sistema que almacenan información y definen acciones. Aquí se explica cómo se representan las clases en un diagrama de clases en Java:

## Clases

Una clase se representa en un diagrama de clases con un rectángulo dividido en tres secciones:

```
+-------------------+
| Nombre de la Clase |
+-------------------+
| Atributos         |
| - atributo1: tipo |
| - atributo2: tipo |
|                   |
| Métodos           |
| + método1()       |
| + método2()       |
+-------------------+
```

- **Nombre de la Clase**: Es el nombre de la clase y se coloca en la parte superior del rectángulo.
- **Atributos**: Los atributos de la clase se listan en la sección de atributos. Se puede indicar el modificador de acceso (+ para público, - para privado, # para protegido, o sin modificador para paquete) seguido del nombre del atributo y su tipo.
- **Métodos**: Los métodos de la clase se listan en la sección de métodos. Al igual que con los atributos, se puede indicar el modificador de acceso (+, -, # o sin modificador), seguido del nombre del método y sus parámetros.

Ejemplo:

```
+--------------+
| Empleado     |
+--------------+
| - salario: int |
| + obtenerSalario(): int |
| + asignarSalario(int nuevoSalario): void |
+--------------+
```

## Modificadores de Acceso

En un diagrama de clases, los modificadores de acceso se representan de la siguiente manera:

- **+**: Modificador de acceso público (accesible desde cualquier lugar).
- **-**: Modificador de acceso privado (solo accesible desde dentro de la clase).
- **#**: Modificador de acceso protegido (accesible desde dentro de la clase y sus subclases).
- Sin modificador: Modificador de acceso de paquete (accesible desde clases en el mismo paquete).

## Relaciones entre Clases

Además de representar las clases, un diagrama de clases también puede mostrar las relaciones entre ellas:

- **Asociación**: Se representa mediante una línea sólida que conecta dos clases. Puede tener una flecha para indicar la dirección de la asociación.
- **Herencia**: Se representa mediante una línea con una flecha sólida que apunta desde la subclase a la superclase.
- **Implementación**: Se representa mediante una línea con una flecha punteada que apunta desde la clase que implementa una interfaz a la propia interfaz.
- **Agregación**: Se representa mediante una línea con un diamante en el extremo que apunta hacia la clase que contiene la otra clase como parte de sí misma.
- **Composición**: Se representa de manera similar a la agregación, pero con un diamante lleno en lugar de uno vacío.

Ejemplo de asociación:

```
+----------+      +--------+
| Cliente  |      | Pedido |
+----------+      +--------+
| -id: int |      | -id: int|
|          |<>----|          |
|          |      |          |
+----------+      +--------+
```

Este es un ejemplo básico de cómo representar clases y relaciones en un diagrama de clases en Java. Los diagramas de clases son herramientas poderosas para visualizar la estructura de un sistema y las interacciones entre las clases en una aplicación orientada a objetos.
