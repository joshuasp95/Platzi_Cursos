# Divide y conquista
# Hacer el problema mas pequeño hasta llegar a la solución
# Muy eficiente
# Necesario tener elementos ordenados
import random
import time


def busqueda_binaria(lista, comienzo, final, objetivo):
    # print(comienzo, final)
    # print(f'buscando el {objetivo} entre {lista[comienzo]} y {lista[final-1]}')
    if comienzo > final:  # se ha pasado de la mitad y no esta el objetivo
        return False
    medio = (comienzo+final) // 2  # se divide la lista en 2
    if objetivo == lista[medio]:  # si el objetivo esta en la mitad
        return True
    elif lista[medio] < objetivo:  # si100 el objetivo es mas grande, la recorremos a la drcha
        return busqueda_binaria(lista, medio + 1, final, objetivo)
    else:  # si no la recorremos hacia la izq
        return busqueda_binaria(lista, comienzo, medio - 1, objetivo)


if __name__ == '__main__':
    size = int(input('Introduce el tamaño de la lista: '))
    objetivo = int(input('Que numero quieres encontrar: '))

    lista = sorted([random.randint(0, 100) for i in range(size)])
    # print(lista)
    antes = time.time()
    encontrado = busqueda_binaria(lista, 0, len(lista), objetivo)
    despues = time.time()
    print(
        f'El elemento {objetivo} {"si se encuentra en la lista" if encontrado else "no se ha encontrado"}')
    tiempo = despues - antes
    print(tiempo)
