# Descomponer los pasos de lavado en funciones privadas

class Lavadora:
    def __init__(self):
        pass  # --> No hay cuerpo en la funcion

    def lavar(self, temperatura='caliente'):
        self._llenar_recipiente_agua(temperatura)
        self._añadir_detergente()
        self._lavar()
        self._centrifugar()
        self._secar()

    def _llenar_recipiente_agua(self, temperatura):
        print(f'Llenado de recipiente con agua a temperatura {temperatura}')

    def _añadir_detergente(self):
        print('Añadido el detergente')

    def _lavar(self):
        print('Lavando...')

    def _centrifugar(self):
        print('Centrifugando...')

    def _secar(self):
        print('Secando...')


if __name__ == '__main__':
    lavadora = Lavadora()
    print(lavadora.lavar())
