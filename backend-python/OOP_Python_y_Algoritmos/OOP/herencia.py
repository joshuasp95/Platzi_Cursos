# Superclases y subclases

class Persona:
    def __init__(self, nombre, apellido, edad):
        self.__nombre = nombre
        self.__apellido = apellido
        self.__edad = edad

    @property
    def nombre(self):
        return self.__nombre

    @property
    def apellido(self):
        return self.__apellido

    @property
    def edad(self):
        return self.__edad

    @nombre.setter
    def nombre(self, nombre):
        self.__nombre = nombre

    @apellido.setter
    def apellido(self, apellido):
        self.__apellido = apellido

    @edad.setter
    def edad(self, edad):
        self.__edad = edad

    def __str__(self):
        return f"Nombre: {self.__nombre}; Apellidos: {self.__apellido}; Edad: {self.__edad} años"


class Cliente(Persona):
    def __init__(self, nombre, apellido, edad):
        super().__init__(nombre, apellido, edad)
        self.__direccion = None

    @property
    def direccion(self):
        print("Llamando al metodo getter")
        return self.__direccion

    @direccion.setter
    def direccion(self, direccion):
        print("Llamando al metodo setter")
        if len(direccion) >= 3:
            self.__direccion = direccion
        else:
            raise ValueError(
                f"La direccion debe tener al menos 3 caracteres, recibiendo {direccion}")


class Empleado(Persona):
    def __init__(self, nombre, apellido, edad):
        super().__init__(nombre, apellido, edad)
        self.__salario = None

    @property
    def salario(self):
        print("Llamando al metodo getter")
        return self.__salario

    @salario.setter
    def salario(self, salario):
        print("Llamando al metodo setter")
        if salario >= 1000:
            self.__salario = salario
        else:
            raise ValueError(
                f"El salario minimo es de 1000, recibiendo {salario}")


marcos = Cliente("Marcos", "Perez Sanchis", 20)
james = Empleado("Juan", "Chacon Almeida", 30)
# Heredan el metodo __str__ de la clase Persona
# marcos.edad = 27 --> NO FUNCIONA EL SETTER, añadiendo los @property
# marcos.edad = 28 --> AHORA SI FUNCIONA
print(marcos)
print(james)
# Ahora mostramos la direccion del cliente de la clase Cliente
print(marcos.direccion)  # --> Devuelve none usando el metodo getter
print(james.salario)  # --> Devuelve None usando el metodo getter
# Hay que usar el setter primero para cambiar la direccion del cliente y el salario del empleado
print("SETTERS================================================================")
# Setters
marcos.direccion = "Calle 123"
james.salario = 1540
print("GETTERS================================================================")
# Getters
print(marcos.direccion)
print(james.salario)
print("================================================================")


class Rectangulo:

    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura


class Cuadrado(Rectangulo):
    def __init__(self, lado):
        # Super --> permite obtener una referencia de la superclase (Rectangulo)
        # Llamamos al constructor de la clase Rectangulo
        # Acceso directo a la superclase
        super().__init__(lado, lado)  # --> base = lado, altura = lado


if __name__ == "__main__":
    rectangulo = Rectangulo(base=3, altura=4)
    print(rectangulo.area())
    # Usamos el metodo area de la clase Rectangulo sin estar definido en la clase Cuadrado
    cuadrado = Cuadrado(lado=5)
    print(cuadrado.area())
