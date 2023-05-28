class Persona:
    def __init__(self, nombre):
        self.nombre = nombre

    def avanzar(self):
        print("Estoy avanzando...")


class Ciclista(Persona):
    def __init__(self, nombre):
        # Referencia a la clase Persona con super()
        super().__init__(nombre)

    def avanzar(self):
        print("Estoy avanzando rapido en una bicicleta...")


def main():
    # Aunque las 2 clases tienen el mismo metodo avanzar cada una ejecuta una funcionalidad distinta
    persona = Persona("Juan")
    persona.avanzar()
    ciclista = Ciclista("Pablo")
    ciclista.avanzar()


if __name__ == '__main__':
    main()
