# Mas diccionarios
person = {
    'name': 'John',
    'last_name': 'Doe',
    'langs': ['python', 'java', 'javascript'],
    'age': 39
}
# Cambiar valores
print(person)
person['name'] = 'Joshua'
print("----------------------------------------------------------------")
print(person)
print("----------------------------------------------------------------")
# Modificar valores
person['age'] -= 10
print(person)
print("----------------------------------------------------------------")
# Añadir valores a la lista
person['langs'].append('Go')
print(person)
print("----------------------------------------------------------------")
# Eliminar valores
del person['last_name']
print(person)
print("----------------------------------------------------------------")
# Otra forma de eliminar valores
# person.pop('age')
print(person)
print("----------------------------------------------------------------")
# Conocer la estructura de un diccionario
print(person.items())
print(person.keys())
print(person.values())