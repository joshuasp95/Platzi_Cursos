# Sobrecarga de Constructores en Java

La sobrecarga de constructores es un concepto en Java que permite a una clase tener múltiples constructores con la misma nombre pero con diferentes parámetros. Esto facilita la creación de objetos de la clase con diferentes configuraciones iniciales.

## Creación de Constructores Sobrecargados

Para sobrecargar constructores en Java, debes seguir estos pasos:

```java
public class MiClase {
    int valor;

    // Constructor predeterminado
    public MiClase() {
        valor = 0;
    }

    // Constructor con un parámetro
    public MiClase(int numero) {
        valor = numero;
    }

    // Otros constructores sobrecargados
}
```

En el ejemplo anterior, hemos definido tres constructores diferentes en la clase `MiClase`. Uno es el constructor predeterminado sin parámetros, otro toma un parámetro entero, y puedes agregar más constructores según tus necesidades.

## Selección del Constructor Correcto

Cuando creas un objeto de la clase, Java selecciona automáticamente el constructor adecuado según los argumentos proporcionados en la llamada al constructor. Esto se llama resolución del constructor.

```java
MiClase objeto1 = new MiClase();      // Utiliza el constructor predeterminado
MiClase objeto2 = new MiClase(42);    // Utiliza el constructor con un parámetro
```

## Ventajas de la Sobrecarga de Constructores

- Permite a los objetos ser inicializados de diferentes maneras según las necesidades del usuario.
- Proporciona mayor flexibilidad en la creación de objetos.
- Facilita la lectura y comprensión del código al proporcionar nombres significativos para los constructores.

## Consideraciones

- Los constructores sobrecargados deben tener nombres idénticos pero diferentes listas de parámetros.
- La resolución del constructor se basa en el número y tipo de argumentos proporcionados en la llamada al constructor.

En resumen, la sobrecarga de constructores en Java te permite definir múltiples constructores con el mismo nombre en una clase, pero con diferentes parámetros. Esto facilita la creación de objetos con diferentes configuraciones iniciales y aumenta la flexibilidad de tu código.
