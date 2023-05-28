# Creamos la clase persona, el molde

class Persona():
    def __init__(self, nombre, apellido, edad):
        self.nombre = nombre
        self.apellido = apellido
        self.edad = edad

    def get_datos(self):
        return f"Hola me llamo {self.nombre} {self.apellido} y tengo {self.edad} años"


# Generamos una nueva instancia de la clase persona con el constructor init

persona1 = Persona("Juan", "Perez", 25)

# Ejecutamos el metodo get_datos
print(persona1.get_datos())
