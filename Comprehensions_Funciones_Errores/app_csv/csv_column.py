import csv
import matplotlib.pyplot as plt
import country
import read_csv
import charts


def generate_year_data(data, year):
    # Declaramos las listas que contendras las etiquetas del grafico y sus valores
    # En este caso, paises y su poblacion segun el año elegido
    list_country = []
    list_population = []
    # Recorremos la lista con los diccionarios que contiene la informacion de los países
    for country in data:
        # print(country['Country Name'])
        # Añadimos las etiquetas del grafico
        list_country.append(country['Country Name'])
        # Añadimos los valores de poblacion de cada pais segun el año elegido
        # Convertirmos los valores de poblacion a un entero
        list_population.append(int(country[year]))
    # Comprobamos que los valores de cada lista son correctos
    # print(list_country)
    # print(list_population)
    # Devolvemos las listas
    return list_country, list_population


if __name__ == '__main__':
    # Recogemos la lista con los diccionarios que contiene la informacion de los países
    result = country.read_csv(read_csv.path2)
    # print(result)
    # Pedimos al usuario un año en concreto para generar el grafico de la poblacion por pais en el año elegido
    year_user = input("Ingrese el año deseado: ")
    # Recogemos las etiquetas y valores de los graficos
    labels, values = generate_year_data(result, year_user)
    # Generamos el grafico
    charts.generate_pie_chart(labels, values)
