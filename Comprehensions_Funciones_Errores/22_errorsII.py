# Manejo de excepciones
# Variable no definida
try:
    print(var)
    print("hola mundo")
    print(0/0)
except Exception as error:
    print(error)
except ZeroDivisionError as error_0:
    print(error_0)
# Division por cero
try:
    print(0/0)
except ZeroDivisionError as error_0:
    print(error_0)
except Exception as error:
    print(error)
# Assertion error
try:
    assert 1 == 1, 'Correcto'
    assert 1 == 2, 'Incorrecto'
except AssertionError as error:
    print(error)
# No se sigue ejecutando
# age = 10
# if age < 18:
#     raise Exception("Tu edad debe ser mayor a 18")

try:
    age = 10
    if age < 18:
        raise Exception("Tu edad debe ser mayor a 18")
except Exception as error:
    print(error)

print("Fin del programa")
print("----------------------------------------------------------------")
# Unificar todos los errores
try:
    # print(var)
    print("hola mundo")
    # print(0/0)
    assert 1 == 1, 'Correcto'
    assert 1 == 2, 'Incorrecto'
    age = 10
    if age < 18:
        raise Exception("Tu edad debe ser mayor a 18")
except ZeroDivisionError as error_0:
    print("Zero", error_0)
except AssertionError as error:
    print("Assertion", error)
except Exception as error:
    print("Error", error)
