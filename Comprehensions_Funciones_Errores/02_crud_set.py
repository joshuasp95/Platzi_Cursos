# CRUD de set
set_countries = {'Spain', 'France', 'Germany', 'United States'}
print(set_countries)
# Obtener tamaño de elementos del set
print("SIZE-------------------------------------------------------")
size = len(set_countries)
print(size)
print("----------------------------------------------------------------")
# Saber si un elemento forma parte del set
print("elemento in set-------------------------------------------------------")
print('Spain' in set_countries)
print("----------------------------------------------------------------")
# Agregar un elemento
print("ADD-------------------------------------------------------------")
set_countries.add('Poland')
print(set_countries)
# Actualizar un elemento
print("UPDATE-------------------------------------------------------------")
set_countries.update({'Finland', 'Sweden', 'Spain'})  # no se añade Spain
print(set_countries)
print("----------------------------------------------------------------")
# Eliminar un elemento
print("REMOVE-------------------------------------------------------------")
set_countries.remove('Spain')
print(set_countries)
# Si no existe el elemento --> lanzaria error
# set_countries.remove('Spain')
# print(set_countries)
print("----------------------------------------------------------------")
# Eliminar un elemento aunque no exista (por si acaso)
print("DISCARD-------------------------------------------------------------")
set_countries.discard('Spain')
print(set_countries)
print("----------------------------------------------------------------")
# Eliminar todo el conjunto
set_countries.clear()
size = len(set_countries)
print(set_countries)
print('Numero de elementos =>', size)
print("----------------------------------------------------------------")
