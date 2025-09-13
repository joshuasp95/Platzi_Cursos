# Encapsulamiento en Java

El encapsulamiento es uno de los principios fundamentales de la programación orientada a objetos (POO) en Java. Consiste en ocultar los detalles internos de un objeto y proporcionar una interfaz controlada para interactuar con él. En Java, se logra a través del uso de modificadores de acceso y métodos getter y setter.

## Modificadores de Acceso

Java proporciona cuatro modificadores de acceso para controlar el nivel de visibilidad de las variables y métodos de una clase:

1. **Public (`public`):** Las variables y métodos marcados como `public` son accesibles desde cualquier parte del programa. No hay restricciones en su acceso.
2. **Private (`private`):** Las variables y métodos marcados como `private` son accesibles solo dentro de la propia clase. No pueden ser accedidos directamente desde fuera de la clase.
3. **Protected (`protected`):** Las variables y métodos marcados como `protected` son accesibles dentro de la misma clase, dentro de las clases en el mismo paquete y por clases que heredan de la clase.
4. **Default (sin especificar un modificador de acceso):** También conocido como "paquete" o "package-private". Las variables y métodos sin un modificador de acceso son accesibles dentro de la misma clase y dentro de las clases en el mismo paquete, pero no desde clases fuera del paquete.

## Getter y Setter

Para garantizar el encapsulamiento, es una buena práctica declarar las variables de instancia de una clase como privadas (`private`) y proporcionar métodos públicos (getter y setter) para acceder y modificar esas variables. Los getter y setter permiten un control más preciso sobre cómo se acceden y modifican los datos de un objeto.

Ejemplo de getter y setter:

```java
public class MiClase {
    private int miVariable; // Variable de instancia privada
  
    public int getMiVariable() {
        return miVariable; // Getter para acceder a la variable
    }
  
    public void setMiVariable(int valor) {
        miVariable = valor; // Setter para modificar la variable
    }
}
```

## Beneficios del Encapsulamiento

- **Control de Acceso:** El encapsulamiento controla quién puede acceder y modificar los datos de un objeto, lo que aumenta la seguridad y evita cambios no autorizados.
- **Flexibilidad:** Permite cambiar la implementación interna de una clase sin afectar a otras partes del código que utilizan la clase.
- **Mantenimiento:** Facilita el mantenimiento y la depuración del código, ya que los cambios en la implementación interna no afectan a otros componentes.
- **Reutilización:** Facilita la reutilización de código al proporcionar una interfaz clara y controlada para interactuar con los objetos.

En resumen, el encapsulamiento en Java es un concepto fundamental que implica ocultar los detalles internos de un objeto y proporcionar un control de acceso a través de modificadores de acceso y métodos getter y setter. Esto mejora la seguridad, la flexibilidad, el mantenimiento y la reutilización del código.
