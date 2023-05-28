# Lista con diccionarios a ver como se comporta filter con la referencia de memoria
# Lista creada por Camilo Enrique en comentario de Platzi
people = [
    {
        'name': 'Pedro',
        'country': 'Colombia',
        'age': 18,
        'course': 'developer'
    },
    {
        'name': 'Juan',
        'country': 'Perú',
        'age': 17,
        'course': 'UX'
    },
    {
        'name': 'Carlos',
        'country': 'Chile',
        'age': 31,
        'course': 'Diseño'
    },
    {
        'name': 'Ana Maria',
        'country': 'Colombia',
        'age': 25,
        'course': 'Tester'
    }
]

print(people)
print(len(people))

new_people = list(filter(lambda person: not person['age'] >= 18, people))
print("Lista nueva:")
print(new_people)
print(len(new_people))
print("Lista anterior:")
print(people)
print(len(people))

# Se puede comprobar que no se modifica la lista original con filter