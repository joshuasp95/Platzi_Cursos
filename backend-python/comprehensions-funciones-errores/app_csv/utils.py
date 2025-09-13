# import read_csv


def get_population_size():
    keys = ['col', 'bol', 'mx']
    values = [150, 250, 470]
    return keys, values


def get_population_by_country(data, country):
    result = list(filter(lambda elem: elem['Country Name'] == country, data))
    return result


def get_population(country_dict):
    print(country_dict[0])
    country_dict = country_dict[0]
    population_dict = {
        '2021': int(country_dict['2021']),
        '2020': int(country_dict['2020']),
        '2019': int(country_dict['2019']),
        '2018': int(country_dict['2018']),
        '2017': int(country_dict['2017']),
        '2016': int(country_dict['2016']),
        '2015': int(country_dict['2015']),
        '2014': int(country_dict['2014']),
        '2013': int(country_dict['2013']),
        '2012': int(country_dict['2012']),
        '2011': int(country_dict['2011']),
        '2010': int(country_dict['2010']),
        '2009': int(country_dict['2009']),
        '2008': int(country_dict['2008']),
        '2007': int(country_dict['2007']),
        '2006': int(country_dict['2006']),
        '2005': int(country_dict['2005']),
        '2004': int(country_dict['2004']),
        '2003': int(country_dict['2003']),
        '2002': int(country_dict['2002']),
        '2001': int(country_dict['2001']),
        '2000': int(country_dict['2000']),
        '1999': int(country_dict['1999']),
        '1998': int(country_dict['1998']),
        '1997': int(country_dict['1997']),
        '1996': int(country_dict['1996']),
        '1995': int(country_dict['1995']),
        '1994': int(country_dict['1994']),
        '1993': int(country_dict['1993']),
        '1992': int(country_dict['1992']),
        '1991': int(country_dict['1991']),
        '1990': int(country_dict['1990']),
        '1989': int(country_dict['1989']),
        '1988': int(country_dict['1988']),
        '1987': int(country_dict['1987']),
        '1986': int(country_dict['1986']),
        '1985': int(country_dict['1985']),
        '1984': int(country_dict['1984']),
        '1983': int(country_dict['1983']),
        '1982': int(country_dict['1982']),
        '1981': int(country_dict['1981']),
        '1980': int(country_dict['1980']),
        '1979': int(country_dict['1979']),
        '1978': int(country_dict['1978']),
        '1977': int(country_dict['1977']),
        '1976': int(country_dict['1976']),
        '1975': int(country_dict['1975'])
    }

    labels = list(population_dict.keys())
    print(labels)
    print(type(labels))
    values = list(population_dict.values())
    print(values)
    print(type(values))

    return labels, values

# def get_population(country_dict):

#     population_dict = {
#         '2021': country_dict['2021'],
#         '2020': country_dict['2020'],
#         '2019': country_dict['2019'],
#         '2018': country_dict['2018'],
#         '2017': country_dict['2017'],
#         '2016': country_dict['2016'],
#         '2015': country_dict['2015'],
#         '2014': country_dict['2014'],
#         '2013': country_dict['2013'],
#         '2012': country_dict['2012'],
#         '2011': country_dict['2011'],
#         '2010': country_dict['2010'],
#         '2009': country_dict['2009'],
#         '2008': country_dict['2008'],
#         '2007': country_dict['2007'],
#         '2006': country_dict['2006'],
#         '2005': country_dict['2005'],
#         '2004': country_dict['2004'],
#         '2003': country_dict['2003'],
#         '2002': country_dict['2002'],
#         '2001': country_dict['2001'],
#         '2000': country_dict['2000'],
#         '1999': country_dict['1999'],
#         '1998': country_dict['1998'],
#         '1997': country_dict['1997'],
#         '1996': country_dict['1996'],
#         '1995': country_dict['1995']
#     }

#     labels = list(population_dict.keys())
#     print(labels)
#     print(type(labels[0]))
#     values = list(population_dict.values())
#     print(values)
#     print(type(values[0]))
#     # Convertimos valores de str a int
#     labels = list(map(lambda elem: int(elem), labels))
#     values = list(map(lambda x: int(x), values))
#     print(type(values[0]))
#     print(labels)
#     print(values)
#     print(type(labels))
#     print(type(values))
#     return labels, values


# if __name__ == '__main__':
#     data = read_csv.read_csv(read_csv.path)
#     print(data[0]['Country Name'])
#     get_population(data[0])
