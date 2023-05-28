# Map hace transformaciones a una lista de elementos
# [vaca, pollo, pescado]  --> cook() = (map) --> [hamburguesa, alitas, sopa]

numbers = [1, 2, 3, 4, 5]
print(numbers)

numbers_2 = []

for i in numbers:
    numbers_2.append(i * 2)
print(numbers_2)

# Usando map() seria

numbers_3 = map(lambda i: i * 2, numbers)
print(numbers_3)
print(type(numbers_3))
# o podrias haber hecho --> list(map(lambda i: i * 2, numbers))
print(list(numbers_3))

l1 = [1, 2, 3, 4, 5]
l2 = [6, 7, 8]
print(l1, l2)
result = map(lambda x, y: x+y, l1, l2)
result = list(result)
print(result)
