# Funciones en python
print("Hola mundo")  # -->Ejemplo de funcion
# Crear funcion


def my_print():
    print("Esta es una funcion")


def suma(a, b):
    return a+b


def multiplicar_texto(texto, veces):
    print(texto * veces)


# Ejecutar funcion
my_print()


# Ejecutar funcion
print("Resultado", suma(10, 20))

# Introduce parametros

num1 = int(input("Ingrese un numero: "))
num2 = int(input("Ingrese otro numero: "))
print("Resultado", suma(num1, num2))

text = input("Ingrese un texto: ")
veces = int(input("Ingrese numero de veces a repetir el texto: "))
multiplicar_texto(text, veces)
