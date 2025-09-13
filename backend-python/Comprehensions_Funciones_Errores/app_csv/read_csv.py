import csv


def read_csv(path):
    with open(path, 'r', encoding="utf-8") as csvfile:
        reader = csv.reader(csvfile, delimiter=',')
        # Al ser un iterable podemos obtener la fila de las columnas con:
        # En este caso es la quinta fila
        for i in range(1, 6):
            headers = next(reader)
        # print(headers)
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


if __name__ == '__main__':
    result = read_csv('./app_csv/csv/poblacion.csv')
    print(result[0]['Country Name'])
    for countries in result:
        print(countries['Country Name'])
# Es una lista
['Camboya', 'KHM', 'Población, total', 'SP.POP.TOTL', '5541676', '5664654', '5788854', '5913680', '6040847', '6170727', '6299230', '6426445', '6553109', '6679708', '6708525', '6696324', '6766289', '6852360', '6913408', '6727922', '6307122', '6040197', '5961193', '6051808', '6198959', '6364472', '6619699', '6881962', '7133899', '7376090', '7661317', '7975597', '8269780', '8570928',
    '8910808', '9259362', '9718215', '10243550', '10636353', '10919528', '11182612', '11431569', '11669077', '11899006', '12118841', '12338192', '12561779', '12787710', '13016371', '13246583', '13477779', '13714791', '13943888', '14155740', '14363532', '14573885', '14786640', '14999683', '15210817', '15417523', '15624584', '15830689', '16025238', '16207746', '16396860', '16589023', '']
# Transformar a un formato diccionario
[{'Country': 'Camboya', 'Population': '5541676'}]

path = './app_csv/csv/poblacion.csv'
path2 = './app_csv/csv/pob_copy.csv'
