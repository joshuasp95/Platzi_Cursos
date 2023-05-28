# Ordenamiento de burbuja (bubble sort)
# Recorrer la lista n x n veces para que todos los elementos se ordenen
# Se compara un elemento con su adyacente

# O(n) solo para obtener el elemento mas grande
# Complejidad algoritmica de O(n**2)

import random
import time


def bubble_sort(lista):
    min = lista[0]
    for j in range(len(lista)):
        min = lista[0]
        for i in range(len(lista)-1):
            # print(lista[i], end=' ')
            if min > lista[i+1]:
                lista[i] = lista[i+1]
                lista[i+1] = min
            min = lista[i+1]
    print(lista, end=' ')


if __name__ == '__main__':
    size = int(input('Introduce el tamaño de la lista: '))
    lista = [random.randint(0, 100) for i in range(size)]
    antes = time.time()
    bubble_sort(lista)
    despues = time.time()
    tiempo = despues - antes
    print(tiempo)
