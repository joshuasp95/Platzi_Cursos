# Pasar como argumento una funcion a otra funcion
def increment(x):
    return x + 1  # devuelve el valor de x + 1


def high_order_function(x, func):
    return x + func(x)  # devuelve el valor de x + func(x)


result = high_order_function(4, increment)
# 4 + (4+1)
print(result)


# Mismo ejemplo con lambdas
#increment = lambda x: x + 1
def increment(x): return x + 1  # devuelve el valor de x + 1

# high_order_function = lambda x, func: x + func(x)  # devuelve el valor de x + func


def high_order_function(x, func): return x + \
    func(x)  # devuelve el valor de x + func


result = high_order_function(4, increment)
# 4 + (4+1)
print(result)

# Enviar lambda como parametro de la high order function

result = high_order_function(4, lambda x: x * 4)
print(result)
result = high_order_function(4, lambda x: (x * 4)/5)
print(result)
result = high_order_function(4, lambda x: 100 / x)
print(result)
