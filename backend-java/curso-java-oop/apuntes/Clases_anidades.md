# Clases Anidadas en Java

En Java, las clases anidadas son clases que se definen dentro de otras clases. Hay dos tipos principales de clases anidadas en Java: las clases anidadas estáticas y las clases internas (no estáticas). A continuación, se proporciona una explicación más detallada de cada tipo:

## Clases Anidadas Estáticas

- Las clases anidadas estáticas se definen dentro de una clase exterior utilizando la palabra clave `static`. No dependen de instancias de la clase exterior y pueden ser utilizadas de manera independiente.
- Estas clases no tienen acceso a las variables de instancia ni a los métodos no estáticos de la clase exterior. Sin embargo, pueden acceder a miembros estáticos de la clase exterior si están definidos.
- Se utilizan comúnmente para agrupar clases relacionadas y mejorar la organización del código.

Ejemplo:

```java
public class ClaseExterna {
    // Variables y métodos de la clase exterior
  
    public static class ClaseAnidadaEstatica {
        // Variables y métodos de la clase anidada estática
    }
}
```

Instanciación de una clase anidada estática:

```java
ClaseExterna.ClaseAnidadaEstatica objeto = new ClaseExterna.ClaseAnidadaEstatica();
```

## Clases Internas (No Estáticas)

- Las clases internas (no estáticas) se definen dentro de una clase exterior sin utilizar la palabra clave `static`. Tienen acceso completo a todos los miembros (variables y métodos) de la clase exterior, incluso a los privados.
- Suelen utilizarse cuando una clase interna tiene una relación cercana y depende de la clase exterior, y necesita acceder a sus miembros.
- Para instanciar una clase interna, primero se debe crear una instancia de la clase exterior y luego se puede crear una instancia de la clase interna utilizando la instancia de la clase exterior.

Ejemplo:

```java
public class ClaseExterna {
    // Variables y métodos de la clase exterior
  
    public class ClaseInterna {
        // Puede acceder a todos los miembros de la clase exterior
    }
}
```

Instanciación de una clase interna:

```java
ClaseExterna externa = new ClaseExterna();
ClaseExterna.ClaseInterna interna = externa.new ClaseInterna();
```

## Clases Anidadas Anónimas

Además de las clases anidadas estáticas y no estáticas, Java permite la creación de clases anónimas. Estas clases no tienen un nombre y se definen en el lugar donde se necesitan, generalmente para implementar interfaces o clases abstractas de manera concisa.

Ejemplo de una clase anidada anónima que implementa una interfaz:

```java
InterfaceEjemplo objeto = new InterfaceEjemplo() {
    @Override
    public void metodo() {
        // Implementación del método en una clase anónima
    }
};
```

En resumen, las clases anidadas en Java proporcionan una forma de organizar y modularizar el código. Pueden ser estáticas (sin acceso a instancias) o internas (con acceso completo a la clase exterior). Además, las clases anidadas anónimas se utilizan para implementaciones breves y concisas de interfaces y clases abstractas. La elección de utilizar clases anidadas depende de los requisitos de diseño y la organización del código.
