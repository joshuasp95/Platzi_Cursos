def get_population_size():
    keys = ['col', 'bol', 'mx']
    values = [150, 250, 470]
    return keys, values


def get_population_by_country(data, country):
    result = list(filter(lambda elem: elem['Country'] == country, data))
    return result


def get_population(country_dict):

    population_dict = {
        '2021': country_dict['2021'],
        '2020': country_dict['2020'],
        '2019': country_dict['2019'],
        '2018': country_dict['2018'],
        '2017': country_dict['2017'],
        '2016': country_dict['2016'],
        '2015': country_dict['2015'],
        '2014': country_dict['2014'],
        '2013': country_dict['2013'],
        '2012': country_dict['2012'],
        '2011': country_dict['2011'],
        '2010': country_dict['2010'],
        '2009': country_dict['2009'],
        '2008': country_dict['2008'],
        '2007': country_dict['2007'],
        '2006': country_dict['2006'],
        '2005': country_dict['2005'],
        '2004': country_dict['2004'],
        '2003': country_dict['2003'],
        '2002': country_dict['2002'],
        '2001': country_dict['2001'],
        '2000': country_dict['2000'],
        '1999': country_dict['1999'],
        '1998': country_dict['1998'],
        '1997': country_dict['1997'],
        '1996': country_dict['1996'],
        '1995': country_dict['1995']
    }

    labels = list(population_dict.keys())
    
    values = list(population_dict.values())

    return labels, values
