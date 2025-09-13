import random
print(1//2)

lista = [random.randint(1, 100) for i in range(100)]

for i in range(len(lista)-1):
    if lista[i] > lista[i+1]:
        result = lista[i]/lista[i+1]
        result_int = lista[i]//lista[i+1]
        print(f"{lista[i]}/{lista[i+1]} --> {result} y {result_int} ")
