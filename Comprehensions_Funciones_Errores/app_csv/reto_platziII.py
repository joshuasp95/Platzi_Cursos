import utils
import read_csv
import country
import charts


def run():

    data = read_csv.read_csv(read_csv.path)

    country_user = input('Enter country name: ')

    result = utils.get_population_by_country(data, country_user)

    print(result)

    labels, values = utils.get_population(result)
    print("----------------------------------------------------")
    charts.generate_bar_chart(labels, values)


if __name__ == '__main__':
    run()
