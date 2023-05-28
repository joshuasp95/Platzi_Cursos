# Diccionarios
# Estructura --> key:value for var in iterable if condition
import random

countries = ['Argentina', 'Brasil', 'Colombia', 'Peru']

population = {}

for country in countries:
    population[country] = random.randint(100, 10000)
print(population)

population_2 = {country: random.randint(100, 10000) for country in countries}
print(population_2)

# Solo coger los elementos de un diccionario con poblacion > 6000
result = {country: population for (
    country, population) in population_2.items() if population > 6000}
print(result)

text = "Hola, me llamo Joshua"

unique = {cha:cha.upper() for cha in text if cha in 'aeiou'}
print(unique)