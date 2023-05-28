# Complejidad Algoritmica
# Busqueda lineal O(n)
import random
import time


def busqueda_lineal(lista, objetivo):
    match = False
    for i in lista:
        if i == objetivo:
            match = True
            break  # si el objetivo esta en ultimo lugar break no sirve de nada igual que si
            # no se encuentra en la lista
    return match


if __name__ == '__main__':
    size = int(input('Introduce el tamaño de la lista: '))
    objetivo = int(input('Que numero quieres encontrar: '))

    lista = [random.randint(0, 100) for i in range(size)]
    # print(lista)
    antes = time.time()
    encontrado = busqueda_lineal(lista, objetivo)
    despues = time.time()
    tiempo = despues - antes
    print(tiempo)
    print(
        f'El elemento {objetivo} {"si se encuentra en la lista" if encontrado else "no se ha encontrado"}')
