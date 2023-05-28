# Manejo de archivos
file = open('./23_text.txt')
# Leer los datos del archivo
print(file.read())
# Cerrar el archivo
file.close()
print("================================================================")
# file = open('./23_text.txt')
# # Leer linea a linea
# print(file.readline())
# print(file.readline())
# print(file.readline())
# print(file.readline())
# file.close()

# Usar bucles para leer un numero de lineas
file = open('./23_text.txt')

for line in range(1, 5):
    print(file.readline())
print("================================================================")

for line in file:
    print(line)
file.close()

# Para cerrar el archivo automáticamente
print("================================================================")

with open('./23_text.txt') as file:
    for line in file:
        print(line)
