import csv

import matplotlib.pyplot as plt


def read_csv(path):
    with open(path, 'r') as csvfile:
        reader = csv.reader(csvfile, delimiter=',')
        for i in range(1, 6):
            headers = next(reader)
        print(headers)
        data_list = []
        for row in reader:
            tuple_row = zip(headers, row)
            dict_row = {key: value for key, value in tuple_row}
            data_list.append(dict_row)
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


def generate_country_data(country_name, data):
    list_year = []
    list_population = []
    for country in data:
        if country['Country Name'] == country_name:
            #Obtenemos las llaves de la 
            for keys in country.keys():
                # print(keys)
                if keys.isdigit():
                    list_year.append(keys)
                    list_population.append(int(country[keys]))
                #     list_year.append(country.keys())
                #     list_population.append(country.values())
    # print(list_year)
    # print(list_population)
    return list_year, list_population


if __name__ == '__main__':
    result = read_csv('./app_csv/csv/pob_copy.csv')

    country_name = 'Nepal'

    list_year, list_population = generate_country_data(country_name, result)

    generate_bar_chart(list_year, list_population)
