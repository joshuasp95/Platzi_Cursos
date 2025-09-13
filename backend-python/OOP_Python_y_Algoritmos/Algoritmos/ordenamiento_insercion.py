# Ordenamiento por insercion
import random
import time


def ordenamiento_insercion(lista):
    for indice in range(1, len(lista)):
        valor_actual = lista[indice]
        posicion_actual = indice

        while posicion_actual > 0 and lista[posicion_actual-1] > valor_actual:
            lista[posicion_actual] = lista[posicion_actual-1]
            posicion_actual -= 1

            lista[posicion_actual] = valor_actual
    return lista

# ChatGPT


def insertion_sort(arr):
    print(arr)
    # Iteramos sobre cada elemento de la lista, comenzando desde el segundo
    for i in range(1, len(arr)):
        # Guardamos el valor del elemento actual
        current = arr[i]
        # Comenzamos a comparar con los elementos a la izquierda
        j = i - 1
        while j >= 0 and arr[j] > current:
            # Si encontramos un valor mayor, lo movemos una posición a la derecha
            arr[j + 1] = arr[j]
            j -= 1
        # Colocamos el valor actual en su posición correcta
        arr[j + 1] = current
    return arr


if __name__ == '__main__':
    size = int(input('Introduce el tamaño de la lista: '))
    lista = [random.randint(0, 100) for i in range(size)]
    antes = time.time()
    # result = ordenamiento_insercion(lista)
    result_gpt = insertion_sort(lista)
    print(result_gpt)
    # print(result)
    despues = time.time()
    tiempo = despues - antes
    print(tiempo)
