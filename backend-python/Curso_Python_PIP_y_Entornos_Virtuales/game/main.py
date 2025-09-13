# Importa el módulo random para generar números aleatorios.
import random

# Función para mostrar la puntuación al final del juego y determinar quién ganó.
def puntuacion(punt_user, punt_pc):
    print(f"Puntuacion: PC-{punt_pc}; User-{punt_user}")
    if punt_user > punt_pc:
        print("Felicidades, has ganado")
    elif punt_pc > punt_user:
        print("El PC ha ganado")
    else:
        print("Ha sido empate")
    print("Hasta luego!")

# Función para convertir la opción numérica en su representación textual (piedra, papel o tijeras).
def conv_opc(opc):
    if opc == 1:
        return "piedra"
    elif opc == 2:
        return "papel"
    elif opc == 3:
        return "tijeras"

# Función para mostrar las elecciones del usuario y la computadora.
def valores(opc_user, opc_pc):
    print(f"El usuario ha elegido {conv_opc(opc_user)} y el pc ha elegido {conv_opc(opc_pc)}")

# Función que maneja la lógica principal del juego.
def run_game():
    print("\n\t!!!!BIENVENIDO AL JUEGO\n\tPiedra, Papel y Tijeras!!!!\n")

    # Solicita al usuario el número de partidas.
    num_rondas = int(input("Introduce el numero de partidas: "))

    punt_user = 0
    punt_pc = 0

    partida = 1

    # Bucle para jugar cada partida.
    while num_rondas > 0:

        print('*' * 10)
        print('Partida: ', partida)
        print('*' * 10)

        # Genera una opción aleatoria para la computadora y solicita la opción del usuario.
        opc_pc = random.randint(1, 3)
        opc_user = int(input("Introduce una opcion (1-piedra, 2-papel o 3-tijeras): "))

        # Compara las opciones y determina el ganador de la partida, actualizando la puntuación.
        if opc_user == opc_pc:
            valores(opc_user, opc_pc)
            print("Empate")
        elif (opc_user == 1 and opc_pc == 3) or (opc_user == 2 and opc_pc == 1) or (opc_user == 3 and opc_pc == 2):
            valores(opc_user, opc_pc)
            print("El usuario ha ganado")
            punt_user += 1
        elif opc_user not in range(1, 4):
            valores(opc_user, opc_pc)
            print("Has perdido porque no has elegido ninguna opcion valida")
        else:
            valores(opc_user, opc_pc)
            print("El pc ha ganado")
            punt_pc += 1
        num_rondas -= 1
        partida += 1

    # Al final de todas las partidas, muestra la puntuación y determina el ganador del juego.
    if partida > 1:
        puntuacion(punt_user, punt_pc)
    else:
        print("Vuelve cuando puedas jugar")

# Ejecuta run_game() si el script se ejecuta como el programa principal.
if __name__ == "__main__":
    run_game()
