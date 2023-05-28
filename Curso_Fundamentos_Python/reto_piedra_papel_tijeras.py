# Piedra, Papel y Tijeras
import random

print("\n\t!!!!BIENVENIDO AL JUEGO\n\tPiedra, Papel y Tijeras!!!!\n")

num_rondas = int(input("Introduce el numero de partidas: "))

punt_user = 0
punt_pc = 0

partida = 1

while num_rondas > 0:

    print('*'*10)
    print('Partida: ', partida)
    print('*'*10)

    def conv_opc(opc):
        if opc == 1:
            return "piedra"
        elif opc == 2:
            return "papel"
        elif opc == 3:
            return "tijeras"

    opc_pc = random.randint(1, 3)
    opc_user = int(
        input("Introduce una opcion (1-piedra, 2-papel o 3-tijeras): "))

    def valores():
        print(
            f"El usuario ha elegido {conv_opc(opc_user)} y el pc ha elegido {conv_opc(opc_pc)}")

    if opc_user == opc_pc:
        valores()
        print("Empate")
    elif (opc_user == 1 and opc_pc == 3) or (opc_user == 2 and opc_pc == 1) or (opc_user == 3 and opc_pc == 2):
        valores()
        print("El usuario ha ganado")
        punt_user += 1
    elif opc_user not in range(1, 3):
        valores()
        print("Has perdido porque no has elegido ninguna opcion valida")
    else:
        valores()
        print("El pc ha ganado")
        punt_pc += 1
    num_rondas -= 1
    partida += 1


def puntuacion(punt_user, punt_pc):
    print(f"Puntuacion: PC-{punt_pc}; User-{punt_user}")
    if punt_user > punt_pc:
        print("Felicidades, has ganado")
    else:
        print("El pc ha ganado")
    print("Hasta luego!")


if partida > 1:
    puntuacion(punt_user, punt_pc)
else:
    print("Vuelve cuando puedas jugar")
