import utils
import read_csv
import country
import charts


def run():

    data = read_csv.read_csv(read_csv.path)

    country_user = input('Enter country name: ')

    labels, values = country.generate_country_data(country_user, data)

    if labels is None:
        print('Country not found')
    else:
        print(labels)
        print(values)
        charts.generate_bar_chart(labels, values)

    # countries = read_csv.read_csv()

    # list_countries = list(
    #     filter(lambda country: country['Country'] == country_user, countries))

    # if (len(list_countries) == 0):
    #     print('Country not found')
    # else:
    #     print(list_countries)


if __name__ == '__main__':
    run()
