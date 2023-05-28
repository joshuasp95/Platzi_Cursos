import csv


def read_csv(path):
    # Tu código aquí 👇
    with open(path, 'r') as csvfile:
        reader = csv.reader(csvfile, delimiter=',')
        total = 0
        for row in reader:
            print(row)
            total += int(row[1])
        return total


response = read_csv('./playgrounds/data.csv')
print(response)
