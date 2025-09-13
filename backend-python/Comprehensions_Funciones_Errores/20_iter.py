# Iterables
# Con range no crear un array de x valores, si no que lo va creando a medida que ingresa el iterador
for i in range(1, 4):
    print(i)

my_iter = range(1, 4)
print(my_iter)
print(type(my_iter))
print(len(my_iter))
print(my_iter[2])
# Este es el iterador
my_iter = iter(my_iter)
print(my_iter)
print(next(my_iter))  # 1
print(next(my_iter))  # 2
print(next(my_iter))  # 3
# Error StopIteration
# print(next(my_iter))  # StopIteration
