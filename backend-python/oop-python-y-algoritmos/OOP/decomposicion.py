class Automovil:
    def __init__(self, modelo, marca, color):
        self.modelo = modelo
        self.marca = marca
        self.color = color
        # Variable privada
        self._estado = 'en_reposo'
        # self._motor = None  # None --> NO tiene ningun valor
        self._motor = Motor(cilindros=4)
        self._frenos = Frenos(marca='Brembo')

    def acelerar(self, tipo='despacio'):
        if tipo == 'rapido':
            self._motor.inyectar_gasolina(10)
            self._motor._temperatura += 20
        else:
            self._motor.inyectar_gasolina(5)
            self._motor._temperatura += 10

        self._estado = 'en_movimiento'

    def desacelerar(self, tipo='despacio'):
        if tipo == 'rapido':
            self._motor.inyectar_gasolina(-10)
            self._motor._temperatura += -20
            self._frenos._temperatura += 40

        else:
            self._motor.inyectar_gasolina(-5)
            self._motor._temperatura += -10
            self._frenos._temperatura += 20

        self._estado = 'en_movimiento'

    def __str__(self):
        return f'Modelo: {self.modelo}, Marca: {self.marca}, Color: {self.color}, Estado: {self._estado}'

    def get_estado(self):
        return self._estado

    def get_temperatura_motor(self):
        return self._motor._temperatura

    def get_temperatura_frenos(self):
        return self._frenos._temperatura


class Motor:
    # Parametros por default gasolina
    def __init__(self, cilindros, tipo='gasolina'):
        self.cilindros = cilindros
        self.tipo = tipo
        self._temperatura = 0

    def inyectar_gasolina(self, cantidad):
        pass


class Frenos:
    def __init__(self,  marca, tipo='disco'):
        self.marca = marca
        self.tipo = tipo
        self._temperatura = 0


def mover_automovil(automovil1, automovil2, tipo='despacio'):
    print("----------------------------------------------------------------")
    # Ejecutamos los metodos y movemos el automovil
    for i in range(1, 10):
        automovil1.acelerar(tipo)
        automovil2.acelerar(tipo)
    print("Estado -->", automovil1.get_estado())
    print("Estado -->", automovil2.get_estado())
    print("Temperatura motor --> ", automovil1.get_temperatura_motor())
    print("Temperatura motor --> ", automovil2.get_temperatura_motor())
    print("Temperatura frenos -->", automovil1.get_temperatura_frenos())
    print("Temperatura frenos -->", automovil2.get_temperatura_frenos())
    print("----------------------------------------------------------------")
    for i in range(1, 6):
        automovil1.desacelerar(tipo)
        automovil2.desacelerar(tipo)
    print("Estado -->", automovil1.get_estado())
    print("Estado -->", automovil2.get_estado())
    print("Temperatura motor --> ", automovil1.get_temperatura_motor())
    print("Temperatura motor --> ", automovil2.get_temperatura_motor())
    print("Temperatura frenos -->", automovil1.get_temperatura_frenos())
    print("Temperatura frenos -->", automovil2.get_temperatura_frenos())
    print("----------------------------------------------------------------")


if __name__ == '__main__':
    # Decomponer un problema en varios modulos
    # Creamos una instancia de la clase Automovil
    automovil1 = Automovil(modelo='320 i', marca='BMW', color='blanco')
    automovil2 = Automovil(modelo='Focus ST', marca='Ford', color='rojo')
    # Obtenemos los valores
    print("----------------------------------------------------------------")
    print(automovil1)
    print(automovil2)

    # mover_automovil(automovil1, automovil2)
    mover_automovil(automovil1, automovil2, 'rapido')


# print("----------------------------------------------------------------")
# # Ejecutamos los metodos y movemos el automovil
# for i in range(1, 10):
#     automovil1.acelerar()
#     automovil2.acelerar()
# print(automovil1)
# print(automovil2)
# print("Temperatura motor --> ", automovil1.get_temperatura_motor())
# print("Temperatura motor --> ", automovil2.get_temperatura_motor())
# print("Temperatura frenos -->", automovil1.get_temperatura_frenos())
# print("Temperatura frenos -->", automovil2.get_temperatura_frenos())
# print("----------------------------------------------------------------")
# for i in range(1, 4):
#     automovil1.desacelerar()
#     automovil2.desacelerar()
# print(automovil1)
# print(automovil2)
# print("Temperatura motor --> ", automovil1.get_temperatura_motor())
# print("Temperatura motor --> ", automovil2.get_temperatura_motor())
# print("Temperatura frenos -->", automovil1.get_temperatura_frenos())
# print("Temperatura frenos -->", automovil2.get_temperatura_frenos())
# print("----------------------------------------------------------------")

# #Ahora con tipo rapido
# print("----------------------------------------------------------------")
# # Ejecutamos los metodos y movemos el automovil
# for i in range(1, 10):
#     automovil1.acelerar('rapido')
#     automovil2.acelerar('rapido')
# print(automovil1)
# print(automovil2)
# print("Temperatura motor --> ", automovil1.get_temperatura_motor())
# print("Temperatura motor --> ", automovil2.get_temperatura_motor())
# print("Temperatura frenos -->", automovil1.get_temperatura_frenos())
# print("Temperatura frenos -->", automovil2.get_temperatura_frenos())
# print("----------------------------------------------------------------")
# for i in range(1, 4):
#     automovil1.desacelerar()
#     automovil2.desacelerar()
# print(automovil1)
# print(automovil2)
# print("Temperatura motor --> ", automovil1.get_temperatura_motor())
# print("Temperatura motor --> ", automovil2.get_temperatura_motor())
# print("Temperatura frenos -->", automovil1.get_temperatura_frenos())
# print("Temperatura frenos -->", automovil2.get_temperatura_frenos())
# print("----------------------------------------------------------------")
