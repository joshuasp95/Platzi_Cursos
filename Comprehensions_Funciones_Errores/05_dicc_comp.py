# Diccionarios comprehension
# Estructura --> {key:value for var in iterable}
# Forma normal
import random
dict = {}
for i in range(1, 11):
    dict[i] = i*2
print(dict)
# Forma comprehension
dict = {i: i*2 for i in range(1, 11)}
print(dict)

countries = ['Argentina', 'Brasil', 'Colombia', 'Peru']

population = {}

for country in countries:
    population[country] = random.randint(100, 10000)
print(population)

population_2 = {country: random.randint(100, 10000) for country in countries}
print(population_2)

names = ['john', 'jane', 'kenn']
ages = [20, 30, 40]
# Unir listas con zip
print(list(zip(names, ages)))
lista_unique = list(set(zip(names, ages)))
print(lista_unique[2])

people = {name: age for (name, age) in zip(names, ages)}
print(people)
