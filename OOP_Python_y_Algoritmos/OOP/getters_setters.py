'''
Clases sin getters y setters

Veamos un ejemplo con una clase que almacena un dato de distancia recorrida en millas (mi) y lo convierte a kilómetros (km):

'''


class Millas:
    def __init__(self, distancia=0):
        self.distancia = distancia

    def convertir_a_kilometros(self):
        return (self.distancia * 1.609344)


print("AVION====================================")
avion = Millas()
avion.distancia = 100
print(avion.distancia)
print(avion.convertir_a_kilometros(), "km")
print("COCHE====================================")

'''
Utilizando getters y setters

Incluyamos un par de métodos para obtener la distancia y otro para que no acepte valores inferiores a cero, 
pues no tendría sentido que un vehículo recorra una distancia negativa. Estos son métodos getters y setters:

'''


class Millas:
    def __init__(self, distancia=0):
        self.distancia = distancia

    def convertir_a_kilometros(self):
        return (self.distancia * 1.609344)

    # Método getter
    def get_distancia(self):
        print("Llama al método get_distancia")
        return self._distancia

    # Método setter
    def set_distancia(self, valor):
        print("Llama al método set_distancia")
        if valor < 0:
            raise ValueError("No es posible convertir distancias menores a 0.")
        self._distancia = valor


'''
El método getter obtendrá el valor de la distancia que y el método setter se encargará de añadir una restricción. 
También debemos notar cómo distancia fue reemplazado por _distancia, denotando que es una variable privada.

Si probamos nuestro código funcionará, la desventaja es que cualquier aplicación que hayamos creado con una base similar
deberá ser actualizada. Esto no es nada escalable si tenemos cientos o miles de líneas de código.
'''
# Todavia nos deja cambiar el valor de _distancia a 100 sin usar el setter o el getter
coche = Millas()
coche.distancia = 300
print(coche.distancia)
print(coche.convertir_a_kilometros(), "km")
print("BARCO====================================")

'''
Función property()

Esta función está incluida en Python, en particular crea y retorna la propiedad de un objeto.
La propiedad de un objeto posee los métodos getter(), setter() y del().

En tanto, la función tiene cuatro atributos: property(fget, fset, fdel, fdoc):

    fget: trae el valor de un atributo.
    fset: define el valor de un atributo.
    fdel: elimina el valor de un atributo.
    fdoc: crea un docstring por atributo.

Veamos un ejemplo del mismo caso implementando la función property():
'''


class Millas:
    def __init__(self):
        self._distancia = 0

    # Función para obtener el valor de _distancia
    def obtener_distancia(self):
        print("Llamada al método getter")
        return self._distancia

    # Función para definir el valor de _distancia
    def definir_distancia(self, recorrido):
        print("Llamada al método setter")
        self._distancia = recorrido

    # Función para eliminar el atributo _distancia
    def eliminar_distancia(self):
        del self._distancia

    def convertir_a_kilometros(self):
        return (self.distancia * 1.609344)

    distancia = property(
        obtener_distancia, definir_distancia, eliminar_distancia)


barco = Millas()
barco.distancia = 100
print("====================================")
# Ahora print(barco.distancia) y print(barco.distancia.obtener_distancia()) --> hacen lo mismo --> se ejecuta el método getter
print(barco.obtener_distancia())
print("====================================")
print(barco.distancia)
print("====================================")
# Tambien llama al metodo getter para poder usar el valor de la _distancia
print(barco.convertir_a_kilometros(), "km")
print("MOTO====================================")


'''
Decorador @property

Este decorador es uno de varios con los que ya cuenta Python, el cual nos permite utilizar getters y setters
para hacer más fácil la implementación de la programación orientada a objetos en Python cambiando 
los métodos o atributos de las clases de forma que no modifiquemos el código.

Pero mejor veamos un ejemplo en acción:
'''


class Millas:
    def __init__(self):
        self._distancia = 0

    # Función para obtener el valor de _distancia
    # Usando el decorador property
    @property
    def distancia(self):
        print("Llamada al método getter")
        return self._distancia

    # Función para definir el valor de _distancia
    @distancia.setter
    def distancia(self, valor):
        print("Llamada al método setter")
        if valor < 0:
            raise ValueError("No es posible convertir distancias menores a 0.")
        self._distancia = valor

    def convertir_a_kilometros(self):
        return (self.distancia * 1.609344)


moto = Millas()
moto.distancia = 100
# print(moto.distancia.obtener_distancia()) --> ahora con @property se consigue el metodo getter
print("====================================")
print(moto.distancia)
print("====================================")
# Tambien llama al metodo getter para poder usar el valor de la _distancia
print(moto.convertir_a_kilometros(), "km")

'''
De esta manera usamos el decorador @property para utilizar getters y setters de una forma más prolija e incluimos 
una nueva funcionalidad a nuestro método definir_distancia(), 
al mismo tiempo protegemos el acceso a nuestras variables privadas y cumplimos con el principio de encapsulación.
'''
