# Filtrar para seleccionar ciertos elementos de una lista usando una condicion

numbers = [1, 2, 3, 4, 5, 6]
print(numbers)
# Usar filter para seleccionar numeros pares
numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(numbers)
print("--------------------------------")
is_list = []
for i in range(1, 31):
    is_list.append(i)
print(is_list)
print("--------------------------------")
# Crear una nueva lista con el filtrado de la lista original
new_list = list(filter(lambda x: x % 2 == 0 and x % 3 == 0, is_list))
(print("Lista anterior"))
print(is_list)
(print("Lista nueva"))
print(new_list)
