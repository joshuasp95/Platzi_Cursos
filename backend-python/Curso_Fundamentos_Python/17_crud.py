#CRUD Create, Read, Update, Delete

numbers = [1, 2, 3, 4, 5]
print(numbers[1])
numbers[-1]=10
print(numbers)

#Agregar elements al final de la lista
numbers.append(700)
print(numbers)

#Insertar elementos en una posicion de la lista
numbers.insert(0, 0)
print(numbers)

numbers.insert(5, 5)
print(numbers)

numbers_2 = [6, 7, 8, 9]
#Unir listas
numbers_total = numbers+numbers_2
print(numbers_total)

#Obtener posicion de la lista
print(numbers_total.index(10))
numbers_total[6] = 100
print(numbers_total)

#Eliminar elementos de la lista
numbers_total.remove(100)
print(numbers_total)

#Eliminar el ultimo elemento de la lista
numbers_total.pop()
print(numbers_total)

#Eliminar elementos de una posicion
numbers_total.pop(6)
print(numbers_total)

numbers_total.insert(len(numbers_total), 9)
print(numbers_total)

#Reverse el orden de elementos de la lista
numbers_total.reverse()
print(numbers_total)

#Ordenar elementos de la lista
numbers_total.sort()
print(numbers_total)

#Ordenar strings
strings = ["do", "re", "mi", "fa", "sol", "la", "si"]
strings.sort()
print(strings)

#SORT --> NO funciona con listas de varios tipos

types = ["comer", 29, True, [2, 3, "dormir", "comer", "estudiar"]]
# types.sort()--> Error
print(types) 