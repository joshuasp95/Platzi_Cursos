# Ordenamiento de burbuja (bubble sort)
# Recorrer la lista n x n veces para que todos los elementos se ordenen
# Se compara un elemento con su adyacente

# O(n) solo para obtener el elemento mas grande
import random

lista = [2, 1, 3, 4, 2, 9, 5, 1, 5, 6, 8, 7, 3, 4, 3, 9, 6]
min = lista[0]
for j in range(len(lista)):
    min = lista[0]
    for i in range(len(lista)-1):
        # print(lista[i], end=' ')
        if min > lista[i+1]:
            lista[i] = lista[i+1]
            lista[i+1] = min
        min = lista[i+1]
# print(lista, end=' ')

# El procedimiento se basa en que primero se establece un minimo (correspondiente al principio al
# primver valor de la lista) y ese minimo ira variando conforme se avance en las iteraciones
# de la lista y en caso de que elemento siguiente de la lista sea mayor al minimo establecido
# se actualizan los valores primero se cambia el valor del indice anterior de la lista
# luego se actualiza el indice siguiente y despues se establece el nuevo valor minimo
# como valor a comparar con el siguiente indice con el valor maximo de los 2 valores comparados,
# es decir, el indice siguiente ya actualizado, una vez establecido este algoritmo,
# se repite una vez mas por cada posicion en la lista


# EN PLATZI

def bubble_sort(lista):
    n = len(lista)

    for i in range(n):
        for j in range(0, n-i-1):  # O(n) * O(n)= O(n*n) = O(n**2)
            if lista[j] > lista[j+1]:
                lista[j], lista[j+1] = lista[j+1], lista[j]
    return lista


if __name__ == '__main__':
    size = int(input('Introduce tamaño de la lista: '))

    lista = [random.randint(0, 100) for i in range(size)]

    # print(lista)
    print(bubble_sort(lista))


# for i in range(len(lista)):
#     print(lista[i], end='--->')
#     for j in range(len(lista)-1):
#         print(lista[j], end=' ')
#         if lista[i] > lista[j+1]:
#             lista[i] = lista[j+1]
#     print('')
# print(lista)
