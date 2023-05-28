def my_divide(a, b):
    # Escribe tu solución 👇
    try:
        result = a / b
        return result
    except ZeroDivisionError as error:
        return 'No se puede dividir por 0'


response = my_divide(10, 2)
print(response)  # 5

response = my_divide(10, 0)
print(response)  # No se puede dividir por 0
