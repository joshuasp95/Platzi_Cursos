import csv

import matplotlib.pyplot as plt


def read_csv(path):
    with open(path, 'r') as csvfile:
        reader = csv.reader(csvfile, delimiter=',')
        # Al ser un iterable podemos obtener la fila de las columnas con:
        # En este caso es la quinta fila
        for i in range(1, 6):
            headers = next(reader)
        print(headers)
        data_list = []
        for row in reader:
            # Usamos el zip para unir cada elemento de la lista de headers con el valor del elemento de la fila
            tuple_row = zip(headers, row)
            # Genera tuplas entre los valores mencionados
            # Ahora lo convertimos a una lista para imprimirlo
            # print(list(tuple_row))
            # Ahora lo convertimos a un diccionario
            # Con comprehension
            dict_row = {key: value for key, value in tuple_row}
            # print(dict_row)
            data_list.append(dict_row)
            # Queremos retornar una lista con cada diccionario
            # print('******')
            # print(row)
        return data_list


def generate_pie_chart(labels, values):
    fig, ax = plt.subplots()
    ax.pie(values, labels=labels)
    ax.axis('equal')
    plt.show()


def generate_bar_chart(labels, values):
    fig, ax = plt.subplots()
    ax.bar(labels, values)
    plt.show()


if __name__ == '__main__':
    result = read_csv('./app_csv/csv/pob_copy.csv')
    print(result[0]['Country Name'])
    list_countries = []
    list_populations = []
    for countries in result:
        # print(countries['Country Name'])
        if len(countries['Country Name']) > 1:
            list_countries.append(countries['Country Name'])
            list_populations.append(int(countries['2012']))
    print(list_countries)
    print(list_populations)
    # generate_pie_chart(list_countries, list_populations)
    generate_bar_chart(list_countries, list_populations)
