import utils

# Envolver todo en una funcion para que no se ejecute en example.py
# Solo se ejecutara cuando se llame a la funcion (main.run()) en example.py

# Sacamos countries fuera para que se pueda acceder desde example.py
countries = [
    {
        'Country': 'Afghanistan',
        'Population': 1000
    }, {
        'Country': 'Albania',
        'Population': 400
    }
]


def run():
    keys, values = utils.get_population_size()

    print(keys, values)

    country_user = input('Enter country name: ')

    result = utils.get_population_by_country(countries, country_user)
    if len(result) == 0:
        print('Country not found')
    else:
        print(result)

    # list_countries = list(
    #     filter(lambda country: country['Country'] == country_user, countries))

    # if (len(list_countries) == 0):
    #     print('Country not found')
    # else:
    #     print(list_countries)


# Pero ahora no se ejecuta este archivo main.py porque esta todo encapsulado en la funcion run()
# Para poder tener ambas cualidades y ejecutar este archivo se debe poner:
if __name__ == '__main__':
    run()
