# Programación Orientada a Objetos en Java

La programación orientada a objetos (POO) es un paradigma de programación en el que los programas se diseñan y organizan en torno a objetos que representan entidades del mundo real. Java es un lenguaje de programación que se basa fuertemente en la POO. Aquí hay algunos conceptos clave:

## Clases y Objetos

- **Clase**: Una clase es una plantilla que define la estructura y el comportamiento de un objeto. En Java, una clase se define utilizando la palabra clave `class`.

```java
public class MiClase {
    // Atributos
    int miVariable;
  
    // Métodos
    public void miMetodo() {
        // Código del método
    }
}
```

- **Objeto**: Un objeto es una instancia de una clase. Se crea a partir de una clase y puede acceder a sus atributos y métodos.

```java
MiClase objeto = new MiClase();
objeto.miVariable = 10;
objeto.miMetodo();
```

## Encapsulación

- La encapsulación es un principio de la POO que consiste en ocultar los detalles de implementación de una clase y proporcionar una interfaz pública para interactuar con ella.
- En Java, se utiliza el modificador de acceso `private`, `public`, o `protected` para controlar el acceso a los miembros de una clase.

```java
public class Persona {
    private String nombre;
  
    public String getNombre() {
        return nombre;
    }
  
    public void setNombre(String nuevoNombre) {
        this.nombre = nuevoNombre;
    }
}
```

## Herencia

- La herencia es un mecanismo que permite que una clase herede los atributos y métodos de otra clase. En Java, se utiliza la palabra clave `extends` para implementar la herencia.

```java
public class Empleado extends Persona {
    private int salario;
  
    public int getSalario() {
        return salario;
    }
  
    public void setSalario(int nuevoSalario) {
        this.salario = nuevoSalario;
    }
}
```

## Polimorfismo

- El polimorfismo permite que objetos de diferentes clases se comporten de manera similar. Esto se logra mediante el uso de métodos con el mismo nombre pero con implementaciones diferentes en las clases derivadas.

```java
public class Animal {
    public void sonido() {
        System.out.println("Hace un sonido genérico");
    }
}

public class Perro extends Animal {
    @Override
    public void sonido() {
        System.out.println("El perro ladra");
    }
}

public class Gato extends Animal {
    @Override
    public void sonido() {
        System.out.println("El gato maulla");
    }
}
```
