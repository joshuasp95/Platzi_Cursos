# Funciones lambda
def increment(x):
    return x + 1


result = increment(10)

print(result)

# Crear funcion lambda --> lambda argumento_entrada : (operacion_a_ejecutar)

increment_2 = lambda x: x + 1

result = increment_2(20)

print(result)

full_name = lambda name, last_name: f'Full name: {name.title()} {last_name.title()}'

person_name = full_name('John', 'Doe')

print(person_name)


# Funciones lambda
def increment(x):
    return x + 1


result = increment(10)

print(result)

# Crear funcion lambda --> lambda argumento_entrada : (operacion_a_ejecutar)


def increment_2(x): return x + 1


result = increment_2(20)

print(result)


def full_name(
    name, last_name): return f'Full name: {name.title()} {last_name.title()}'


person_name = full_name('John', 'Doe')

print(person_name)
