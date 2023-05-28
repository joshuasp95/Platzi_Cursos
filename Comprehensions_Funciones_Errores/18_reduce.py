# Transformar una lista de elementos a un solo valor mediante una operacion con reduce

# Hay que importar reduce
import functools

numbers = [1, 2, 3, 4]


def accum(counter, item):
    print("counter:", counter, "item:", item)
    print("----------------")
    return counter + item


sum = functools.reduce(lambda counter, item: counter + item, numbers)
# Para verlo mas claro
sum = functools.reduce(accum, numbers)

print(sum)
