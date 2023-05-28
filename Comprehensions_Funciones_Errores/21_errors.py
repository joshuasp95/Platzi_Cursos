# Manejo de errores

# print(0/0)) --> Error de sintaxis

# print(0//0) --> Error de division por 0

# print(result) --> Error de variable no definido

# El programa se interrumpe
""""
print(var)
print("hola mundo")"""


def sum(x, y): return x + y


assert sum(1, 2) == 3

# assert sum(1, 2) == 4 --> AssertionError

print("hola mundo")

# Pruebas Unitarias --> para comprobar que los metodos funcionan correctamente

# Lanzar mis propias excepciones

age = 10
if age < 18:
    raise Exception("Tu edad debe ser mayor a 18")
