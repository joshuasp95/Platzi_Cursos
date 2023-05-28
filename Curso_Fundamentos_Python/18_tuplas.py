#Tuplas () y is_listas []
numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7)
strings = ('hello', 'world', 'python')

print(numbers)
print(type(numbers))
print(strings)
print(type(strings))
print("----------------------------------------------------------------")
#Posiciones
print('[0] =>',numbers[0])
last_index = len(numbers)-1
print(f"[{last_index}] => {numbers[-1]}")
print("----------------------------------------------------------------")
#CRUD --> En una tupla no se pueden añadir mas elementos SON SOLO DE LECTURA
#Buscar posiciones de elementos
print(numbers.index(2))
print(strings.index('python'))
print("----------------------------------------------------------------")
#Contar numero de veces que se repite un elemento
print(numbers.index(3))
print("----------------------------------------------------------------")
#Otra manera pero que me da error al intentar añadir elementos --> is_list = list(strings)
is_list =[*strings]
print(is_list)
print(type(is_list))
is_list[1]= 'javascript'
is_list.append('java')
print(is_list)
print("----------------------------------------------------------------")
is_tuple =  tuple(is_list)
print(is_tuple)
print(type(is_tuple))
print("----------------------------------------------------------------")

