# Tutorial de Data Mapper y MapStruct

## Data Mapper

El patrón de diseño Data Mapper es un patrón de diseño arquitectónico que separa los objetos de datos que se escriben en una base de datos de los objetos que contienen lógica de negocio.

El mapeador de datos es una capa de software que se encarga de la transferencia de datos entre objetos y una base de datos, manteniéndolos aislados el uno del otro. Con el mapeador de datos, los cambios en el modelo de datos no afectarán a la lógica de negocio y viceversa.

```java
// Objeto de dominio
public class User {
    private String name;
    private String email;
    // getters y setters...
}

// Data Transfer Object (DTO)
public class UserDTO {
    private String name;
    private String email;
    // getters y setters...
}

// Data Mapper
public class UserDataMapper {
    public UserDTO mapToDTO(User user) {
        UserDTO dto = new UserDTO();
        dto.setName(user.getName());
        dto.setEmail(user.getEmail());
        return dto;
    }

    public User mapToUser(UserDTO dto) {
        User user = new User();
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        return user;
    }
}
```

En este ejemplo, `User` es nuestro objeto de dominio y `UserDTO` es el objeto que se usa para transferir datos de la base de datos a la aplicación y viceversa. `UserDataMapper` es nuestra implementación de Data Mapper que convierte entre `User` y `UserDTO`.

## MapStruct

[MapStruct](https://mapstruct.org/) es una herramienta de generación de código que simplifica la implementación de mapeos entre tipos de Java. MapStruct genera código fuente que hace el mapeo entre dos tipos de Java, por lo que elimina la necesidad de un mapeador manual.

MapStruct te permite definir la conversión en un formato declarativo (a través de interfaces de Java) y generará el código en tiempo de compilación.

Aquí tienes un ejemplo de cómo utilizarlo:

```java
@Mapper
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    @Mapping(source = "name", target = "username")
    @Mapping(source = "email", target = "emailAddress")
    UserDTO userToUserDTO(User user);

    @InheritInverseConfiguration
    User userDTOToUser(UserDTO dto);
}
```

En este ejemplo, `UserMapper` es una interfaz que declara dos métodos para convertir entre `User` y `UserDTO`. `@Mapper` es una anotación de MapStruct que indica que esta interfaz es un mapeador. `INSTANCE` es un campo que proporciona una instancia del mapeador.

`userToUserDTO` es un método que convierte de `User` a `UserDTO`. Las anotaciones `@Mapping` especifican las conversiones de campo a campo.

`userDTOToUser` es un método que convierte de `UserDTO` a `User`. La anotación `@InheritInverseConfiguration` indica que este método debería invertir la configuración de mapeo del método `userToUserDTO`.

MapStruct generará una implementación de `UserMapper` en tiempo de compilación que puedes utilizar en tu código para convertir entre `User` y `UserDTO`.

## Conclusión

El patrón de diseño Data Mapper y las bibliotecas como MapStruct son útiles para separ

ar los objetos de dominio de la lógica de mapeo de datos, haciendo que tu código sea más limpio y fácil de mantener.
