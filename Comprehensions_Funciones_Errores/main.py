import package  # define variables, paquetes, namespace
from package.mod_1 import func_1, func_2
from package.mod_2 import func_3, func_4

# el init siempre se va a inicializar al llamar al package (solo una vez)

print(func_1())
print(func_2())
print(func_3())
print(func_4())

# se puede llamar a url


print(package.url)

# namespace --> deben usarse mas
# Si no se ha importado previamente a los paquetes explicitamente daria error
# para habilitar esta manera de poder usar la funcion y evitar el error se inicializan en el init las imporaciones de los mods
print(package.mod_1.func_1())  # --> namespace
