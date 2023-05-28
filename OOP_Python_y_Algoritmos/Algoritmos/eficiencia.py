import time
import sys

print("limit -->", sys.getrecursionlimit())
# Comparacion de tiempos de ejecución


def factorial_1(n):
    resultado = 1

    while n > 1:
        resultado *= n
        n -= 1
    return resultado


def factorial_2(n):

    if n == 1:
        return 1
    else:
        return n * factorial_2(n - 1)

# Recogemos el tiempo antes y despues de la ejecución del programa
# para saber cual es el metodo mas rapido


# print(time.time())
print("While================================================")
antes = time.time()
print(factorial_1(8))
despues = time.time()

tiempo = despues - antes
print(tiempo)
print("Recursiva================================================")

antes = time.time()
print(factorial_2(8))
despues = time.time()
tiempo = despues - antes
print(tiempo)
