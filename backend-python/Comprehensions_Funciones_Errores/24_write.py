# Añadir r,w para poder escribir,leer en un archivo
# r+ para poder escribir en un archivo y leer en un archivo
with open('./24_write.txt', 'r+') as file:
    for line in file:
        print(line)
    # --> Error por permisos no autorizados
    file.write('\nEstoy escribiendo en el archivo')

# Si añadimos w+ reescribe el archivo con lo que se pase a la funcion write
# with open('./24_write.txt', 'w+') as file:
#     for line in file:
#         print(line)
#         # --> Error por permisos no autorizados
#     file.write('\nEstoy escribiendo en el archivo')
