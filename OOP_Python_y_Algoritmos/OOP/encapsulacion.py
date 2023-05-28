class CasillaDeVotacion:
    def __init__(self, identificador, pais):
        self.__identificador = identificador
        self.__pais = pais
        self.__region = None

    @property
    def region(self):
        print("Llamando al metodo getter")
        return self.__region

    @region.setter
    def region(self, region):
        print("Llamando al metodo setter")
        if region in self.__pais:
            self.__region = region
        else:
            raise ValueError(
                f"El pais {self.__pais} no tiene la region {region}")


casilla = CasillaDeVotacion("1234567890", ["Bizkaia", "Araba", "Guipuzkoa"])
print(casilla.region)
# Pedimos la region al usuario
region_user = input("Ingrese la region: ")
# Si no esta en la lista de paises permitidos saldria el error ValueError
casilla.region = region_user  # metodo setter
print(casilla.region)  # metodo getter
