# Divide una lista en partes iguales hasta que quedan en sublistas de 1 o 0 elementos
# Luego se recombinan

# n log n

import random
import time


def merge_sort(lista):
    print("lista:::", lista)
    if len(lista) > 1:
        medio = len(lista)//2
        izq = lista[:medio]
        drch = lista[medio:]
        print(izq, "****", drch)
        # llamada recursiva en cada mitad
        print("-->", merge_sort(izq))
        print("...", merge_sort(drch))

        # iteradores para recorrer las listas
        i = 0
        j = 0
        # iterador para la lista principal
        k = 0

        while i < len(izq) and j < len(drch):
            if izq[i] < drch[j]:
                lista[k] = izq[i]
                i += 1
            else:
                lista[k] = drch[j]
                j += 1
            k += 1
        while i < len(izq):
            lista[k] = izq[i]
            i += 1
            k += 1
        while j < len(drch):
            lista[k] = drch[j]
            j += 1
            k += 1

        print(f"izquierda {izq} , derecha {drch}")
        print(lista)
        print('-'*50)
    return lista


if __name__ == '__main__':
    size = int(input('Introduce el tamaño de la lista: '))

    lista = [random.randint(0, 100) for i in range(size)]
    print(lista)

    print('------------------------------------------------')

    antes = time.time()

    result_gpt = merge_sort(lista)

    print(result_gpt)

    despues = time.time()

    tiempo = despues - antes

    print('tiempo', tiempo)
