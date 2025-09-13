# Creamos la clase
class Coordenada:
    # Definimos los atributos de la clase en el constructor
    def __init__(self, x, y):
        self.x = x
        self.y = y
    # Definimos el metodo para calcular la distancia entre dos coordenadas

    def distancia(self, otra_coordenada):
        x_diff = (self.x - otra_coordenada.x)**2
        y_diff = (self.y - otra_coordenada.y)**2

        return (x_diff + y_diff)**0.5
    # Definimos el metodo para obtener los valores de los atributos

    def __str__(self):
        return f'({self.x}, {self.y})'


# Ejecutamos el programa como un script
if __name__ == '__main__':

    coord_1 = Coordenada(2, 20)
    coord_2 = Coordenada(4, 10)

    print(coord_1)
    print(coord_2)
    # Vemos los tipos de los objetos
    print(type(coord_1))
    print(type(coord_2))

    print("Distancia entre los 2 puntos en representacion grafica 2D --> ",
          coord_1.distancia(coord_2))

    # Determinar si son instancias de la clase
    print(isinstance(coord_1, Coordenada))
    print(isinstance(coord_2, Coordenada))
    print(isinstance("Esto es una instancia de coordenada?", Coordenada))
