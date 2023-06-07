#Diccionarios en Python
is_dictionary = {}
print(is_dictionary)
print(type(is_dictionary))
print("----------------------------------------------------------------")
is_dictionary = {
    'name': "Joshua",
    'age': 18,
    'hobbies': ["eat", "sleep", "code", "repeat"]
}
print(is_dictionary)
# Saber cantidad de elementos en el diccionario
print(len(is_dictionary))
# Saber las llaves de cada elemento del diccionario
print(is_dictionary.keys())
# Saber los valores de cada elemento del diccionario
print(is_dictionary.values())
# Obtener el valor de un elemento del diccionario
print(is_dictionary['age'])
print(is_dictionary['hobbies'])
print(is_dictionary['hobbies'][1])
# ERROR si no existe la llave --> print(is_dictionary['hofas'])
# Otra forma Si no existe la llave devuelve NONE
print(is_dictionary.get('name'))
# Saber si una llave existe en el diccionario
print('age' in is_dictionary)
print('surname' in is_dictionary)
